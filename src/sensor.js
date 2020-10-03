import { Symbols, EnvSymbols } from "./constant/symbols";
import { detectSymbol, getBinaryImage, ocrNumber } from "./api";
import { closeAllWindow } from "./actions";

export const confirmCapacity = () => {
  let probably = {};
  for (let i = 0; i < 10; i++) {
    let screenshot = getBinaryImage();
    sleep(20);
    let number = ocrNumber(screenshot, Symbols.库容);
    toast("检查库容:"+number);
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
