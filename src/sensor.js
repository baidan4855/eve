import { Symbols } from "./constant/symbols";
import { detectSymbol, getBinaryImage, closeAllWindow } from "./api";

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
    sleep(10);
    let number = detectCapacity(screenshot);
    if (number !== null) {
      probably[number] = (probably[number] || 0) + 1;
      if (probably[number] > 1) return number;
    } else closeAllWindow();
  }
  return null;
};
