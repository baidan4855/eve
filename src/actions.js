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
    acEvent.clickPoint(...pos);

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
  click(Points.关闭按钮, 2000);
};

export const leaveStation = () => {
  closeAllWindow();
  click(Points.离站按钮, 2000);
};

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

export const backToStation = () => {
  ensureMenuPopup();
  let screenshot = getBinaryImage();

  let rst = detectSymbol({
    screenshot,
    symbol: Symbols.菜单空间站标识
  });

  if (!rst) {
    click(Points.菜单开关, 1000);
    click(Points.菜单内空间站选项, 2000);
  }                 
  image.recycle(screenshot)
  sleep(100)
  screenshot = getBinaryImage();
  rst = detectSymbol({
    screenshot,
    symbol: Symbols.驻地空间站
  });
  sleep(100)
  if (!rst) return;
  click(rst[0].point, 1000);

  image.recycle(screenshot)
  
  screenshot = getBinaryImage();

  let area = [
    rst[0].point.x + Symbols.停靠标识.offset[0],
    rst[0].point.y + Symbols.停靠标识.offset[1],
    rst[0].point.x + Symbols.停靠标识.offset[2],
    rst[0].point.y + Symbols.停靠标识.offset[3],

]
  rst = detectSymbol({
    screenshot,
    symbol: {
        ...Symbols.停靠标识,
        area
    }
  });
  if(!rst)return
  click(rst[0].point, 5000);
}

export const gotoWork = () => {
  sleep(100);
  ensureMenuPopup();
  click(Points.菜单开关, 1000);
  click(Points.菜单内采矿选项, 1000);
  let screenshot = getBinaryImage();
  if (!screenshot) return;
  let rst = detectSymbol({
    screenshot,
    symbol: Symbols.矿场图标,
    countOfExpect: 6,
  });
  if (!rst || rst.length < 2) return;

  let targetIndex = Math.ceil(Math.random() * (rst.length - 1));
  let target = rst[targetIndex].point;
  click(target, 2000);
  click(target, 1000,Offsets.跃迁);
};

export const moveTo = (point) => {
  click(point, 800);
  click(point, 800, Offsets.接近);
};

export const fire = (point) => {
  click(point, 1000);
  let screenshot = getBinaryImage();
  let area = [
    point.x + Symbols.矿枪.offset[0],
    point.y + Symbols.矿枪.offset[1],
    point.x + Symbols.矿枪.offset[2],
    point.y + Symbols.矿枪.offset[3],
  ];
  let gun = detectSymbol({
    screenshot,
    symbol: {
      ...Symbols.矿枪,
      area,
    },
  });
  image.recycle(screenshot);
  sleep(100);
  if (gun) {
    click(gun[0].point, 2000, [30, 20]);
    return true;
  } else {
    return false;
  }
};

export const stop = () => {
    let screenshot = getBinaryImage();
    
    let flying = detectSymbol({
      screenshot,
      symbol: Symbols.速度100,
    });
    
    image.recycle(screenshot)
    if(flying)
        click([Symbols.速度100.area[0],Symbols.速度100.area[1]],2000)

};