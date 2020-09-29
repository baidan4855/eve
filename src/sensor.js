import { Symbols } from "./constant/symbols";
import { detectSymbol, getBinaryImage } from "./api";
import { closeAllWindow } from "./actions";

export const detectCapacity = (screenshot) => {
  const { files, area, similarity } = Symbols.库容数字;
  let numbers = [];
  files.forEach((file, index) => {
    const result = detectSymbol({
      screenshot,
      symbol: { file, area, similarity },
      countOfExpect: 2,
    });
    sleep(10);
    if (result) {
      logd(index, result);
      result.forEach(({ point, similarity }) => {
        const i = numbers.findIndex(({ x }) => {
          return Math.abs(x - point.x) < 3;
        });
        if (i === -1) {
          numbers.push({ x: point.x, s: similarity, n: index });
        } else if (numbers[i].similarity < similarity) {
          numbers[i] = { x: point.x, s: similarity, n: index };
        }
      });
    }
  });
  if (numbers.length == 0) return null;

  numbers.sort((a, b) => a.x - b.x);
  return numbers.reduce((acc, cur, index, arr) => {
    return acc + cur.n * Math.pow(10, arr.length - index - 1);
  }, 0);
};

export const confirmCapacity = () => {
  let probably = {};
  for (let i = 0; i < 10; i++) {
    let screenshot = getBinaryImage();
    sleep(20);
    let number = detectCapacity(screenshot);
    logd(number);
    if (number !== null) {
      probably[number] = (probably[number] || 0) + 1;
      if (probably[number] > 1) return number;
    } else closeAllWindow();
  }
  return null;
};


// 检查当前地点
export const detectEnv = () => {
    let binary = getBinaryImage()
    if(!binary) return
    let env = null
    let bestSimilarity = null
    let mine = false
    for(let i=0;i<EnvSign.length;i++){
        let ret = detectImage(binary,EnvSign[i].sign,1,EnvSign[i].left,EnvSign[i].top,EnvSign[i].right,EnvSign[i].bottom)

        if(ret && EnvSign[i].location === Location.mine && ret[0].similarity > 0.8){
            mine = true
        }
        if(ret && (bestSimilarity===null ||  ret[0].similarity > bestSimilarity.similarity)){
            bestSimilarity = ret[0]
            env = EnvSign[i].location
        }
    }

    image.recycle(binary)

    if(mine && env === Location.space)
        env= Location.mine


    if(!env){
        logd('尝试关闭窗口')
        // 环境检查失败，可能是有打开的窗口，关闭窗口重试
        closeAllWindow()
        sleep(500)
        env = detectEnv()
    }
    return env
}