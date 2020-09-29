import { Points } from "./constant/points";
import { Symbols } from "./constant/symbols";
import { getBinaryImage, detectSymbol } from "./api";
// 关闭窗口
export const closeAllWindow = () => {
  click(Points.关闭按钮);
  sleep(140);
  swipe(Points.调整视角);
  sleep(500);
};

export const click = (point, delay) => {
  acEvent.clickPoint(...point);
  if (delay) sleep(delay);
};

export const swipe = (point) => {
  swipeToPoint(...point, 400);
  sleep(500);
};

export const discharge = () => {
  click(Points.仓库按钮, 3000);
  click(Points.矿石舱, 2000);
  click(Points.全选按钮, 2000);
  click(Points.移动至, 2000);
  click(Points.物品机库, 5000);
  click(Points.关闭按钮, 6000);
};

export const leaveStation = () => {};

export const gotoWork = () => {
  sleep(100);
  let screenshot = getBinaryImage();
  let rst = detectSymbol({
    screenshot,
    symbol: Symbols.小眼睛,
    countOfExpect: 1,
  });
  logd(rst);
  if (!rst) return null;
  if (rst[0].point.x - Symbols.小眼睛.area[0] > 3) {
    click([rst[0].point.x, rst[0].point.y], 1500);
  }

  click(Points.菜单开关, 1000);
  click(Points.菜单内采矿选项, 1000);
  image.recycle(screenshot);
  screenshot = getBinaryImage();
  if (!screenshot) return;
  rst = detectSymbol({
    screenshot,
    symbol: Symbols.矿场图标,
    countOfExpect: 6,
  });
  logd(rst);
  if (!rst || rst.length < 2) return;

  let targetIndex = Math.ceil(Math.random() * (rst.length - 1));
  let target = rst[targetIndex].point;
  click([target.x, target.y], 2000);
  click([target.x - 50, target.y + 80], 1000);
};
