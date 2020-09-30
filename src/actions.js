import { Points } from "./constant/points";
import { Symbols } from "./constant/symbols";
import {Offsets} from './constant/offsets'
import { getBinaryImage, detectSymbol } from "./api";
// 关闭窗口
export const closeAllWindow = () => {
  click(Points.关闭按钮);
  sleep(140);
  swipe(Points.调整视角);
  sleep(500);
};

export const click = (point, delay, offset) => {
    let pos = []
    if (Object.prototype.toString.call(point) === "[object Object]") {
        pos.push(point.x, point.y);
    } else {
        pos.push(...point);
    }
    if(offset){
        pos[0]=pos[0]+offset[0]
        pos[1]=pos[1]+offset[1]
    }
    acEvent.clickPoint(pos)

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

export const ensureMenuPopup = () => {
  let screenshot = getBinaryImage();
  let rst = detectSymbol({
    screenshot,
    symbol: Symbols.小眼睛,
    countOfExpect: 1,
  });
  if (!rst) return null;
  if (rst[0].point.x - Symbols.小眼睛.area[0] > 3) {
    click(rst[0].point, 1500);
  }
};
ß
export const backToStation = () => {
    ensureMenuPopup()
    click(Points.菜单开关,1000)
    click(Points.菜单内空间站选项,1000)
    let screenshot = getBinaryImage();
    let rst = detectSymbol({
        screenshot,
        symbol: Symbols.卸货空间站
    });
    if(!rst)return
    click(rst[0].point, 500)
    click(rst[0].point,1000, Offsets.跃迁)
    sleep(5000)
}

export const gotoWork = () => {
  sleep(100);
  ensureMenuPopup();
  click(Points.菜单开关, 1000);
  click(Points.菜单内采矿选项, 1000);
  let screenshot = getBinaryImage();
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
  click(target, 2000);
  click(target, 1000,Offsets.跃迁);
};
