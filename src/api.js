import { DEFAULT_THRESHOLD, Symbols } from "./constant/symbols";
// 截图并二值化
export const getBinaryImage = (threshold = DEFAULT_THRESHOLD) => {
  let screenshot = image.captureFullScreenEx();
  if (screenshot) {
    let binary = image.binaryzation(screenshot, 0, threshold);
    image.recycle(screenshot);
    if (binary) {
      return binary;
    }
  }
  return null;
};

const toRect = (area) => {
  let [left, top, right, bottom] = area;
  let rect = new Rect();
  rect.left = left;
  rect.top = top;
  rect.right = right;
  rect.bottom = bottom;
  return rect;
};
// 查找图片
export const detectSymbol = ({ screenshot, symbol, countOfExpect = 1 }) => {
  const { file, area, similarity } = symbol;
  let result = image.matchTemplate(
    screenshot,
    file,
    similarity,
    similarity,
    toRect(area),
    -1,
    countOfExpect
  );
  return result || null;
};

export const ocrNumber = (screenshot, symbol) => {
  const { area, files, similarity } = symbol;
  let numbers = [];
  files.forEach((file, index) => {
    const result = detectSymbol({
      screenshot,
      symbol: { file, area, similarity },
      countOfExpect: 2,
    });
    sleep(10);
    if (result) {
      //   logd(index, result);
      result.forEach(({ point, similarity }) => {
        const i = numbers.findIndex(({ x }) => {
          return Math.abs(x - point.x) < 4;
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