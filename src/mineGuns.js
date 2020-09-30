import { getBinaryImage, detectSymbol, ocrNumber } from "./api";
import { swipe, click } from "./actions";
import { Symbols } from "./constant/symbols";
import { Points } from "./constant/points";

let guns = null;

export const init = () => {
  swipe(Points.调整视角);
  const screenshot = getBinaryImage();
  if (!screenshot) return;
  sleep(100);
  const rst = detectSymbol({
    screenshot,
    symbol: Symbols.矿枪,
    countOfExpect: 3,
  });
  if (!rst) {
    return;
  }
  guns = rst.sort((a, b) => a.point.x - b.point.x);
  image.recycle(screenshot);
  logd(JSON.stringify(guns));
  sleep(100);
};

export const checkGunsStatus = () => {
  if (guns === null) {
    init();
    return;
  }
  const screenshot = getBinaryImage();
  if (!screenshot) return;
  guns.forEach((gun) => {
    const area = [
      gun.point.x + Symbols.激活标识.offset[0],
      gun.point.y + Symbols.激活标识.offset[1],
      gun.point.x + Symbols.激活标识.offset[2],
      gun.point.y + Symbols.激活标识.offset[3],
    ];
    const rst = detectSymbol({
      screenshot,
      symbol: {
        ...Symbols.激活标识,
        area,
      },
    });
    gun.firing = !!rst;
  });
  image.recycle(screenshot);
  sleep(100);
};

export const isBusy = () => {
  if (!guns) return false;
  for (let i = 0; i < guns.length; i++) {
    if (!guns[i].firing) return false;
  }
  return true;
};

export const fire = (target) => {
  checkGunsStatus();
  if (isBusy()) return;
  for (let i = 0; i < guns.length; i++) {
    if (!guns[i].firing) {
      click(guns[i].point, 3000);
      checkGunsStatus();
    }
  }
};

export const inited = () => {
  return !!guns;
};