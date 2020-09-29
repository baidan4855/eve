import { DEFAULT_THRESHOLD } from "./constant/symbols";
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
  return result;
};

// 关闭窗口
export const closeAllWindow = () => {
    let r = acEvent.clickPoint(1455,42)
    sleep(140)
    swipeToPoint(1000, 400, 900,360,400)
    sleep(500)
}