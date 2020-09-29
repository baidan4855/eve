import { Symbols, EnvSymbols } from "./constant/symbols";
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
  let screenshot = getBinaryImage();
  if (!screenshot) return;
  let env = null;
  let bestSimilarity = null;
  let mine = false;
  for (let i = 0; i < EnvSymbols.length; i++) {
    let ret = detectSymbol({
      screenshot,
      symbol: EnvSymbols[i],
      countOfExpect: 1,
    });

    if (ret && EnvSymbols[i].location === "矿场") {
      mine = true;
    }
    if (
      ret &&
      (bestSimilarity === null || ret[0].similarity > bestSimilarity.similarity)
    ) {
      bestSimilarity = ret[0];
      env = EnvSymbols[i].location;
    }
    logd(EnvSymbols[i].location, ret, env, JSON.stringify(bestSimilarity));
  }

  image.recycle(screenshot);

  if (mine && env === "太空") env = "矿场";

  if (!env) {
    closeAllWindow();
    sleep(500);
    env = detectEnv();
  }
  return env;
};
