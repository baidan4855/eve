import { Points } from "./constant/points";
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
