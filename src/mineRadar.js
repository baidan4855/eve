import { getBinaryImage, detectSymbol, ocrNumber } from "./api";

import { swipe, click, ensureMenuPopup, fire, moveTo,stop } from "./actions";
import { Symbols } from "./constant/symbols";
import { Points } from "./constant/points";
import { Offsets } from "./constant/offsets";

let stones = null;

export const scanAndDig = () => {
  ensureMenuPopup();

  let screenshot = getBinaryImage();
  if (!screenshot) return;
  sleep(100);
  let rst = detectSymbol({
    screenshot,
    symbol: Symbols.菜单采矿标识
  });
  if (!rst) {
    click(Points.菜单开关, 1000);
    click(Points.菜单内采矿选项, 1000);
    click(Points.菜单右侧筛选器位置1, 500);
    swipe(Points.菜单向下滑动);
    swipe(Points.菜单向下滑动);
  }else{
    click(Points.菜单右侧筛选器位置1, 500);
  }
  
  image.recycle(screenshot);
  sleep(500);
  screenshot = getBinaryImage();
  if (!screenshot) return;
  sleep(100);
  rst = detectSymbol({
    screenshot,
    symbol: Symbols.矿石图标,
    countOfExpect: 3,
  });
  if (!rst) {
    return;
  }
  stones = rst.sort((a, b) => a.point.y - b.point.y);

  for(let i = 0;i< stones.length;i++){
    let succ = fire(stones[i].point)
    if(succ && i===0){
        moveTo(stones[i].point)
    }else if(!succ){
        stop()
        break
    }
  }
       
        
      
    // let area = [
    //   stone.point.x + Symbols.锁定标识.offset[0],
    //   stone.point.y + Symbols.锁定标识.offset[1],
    //   stone.point.x + Symbols.锁定标识.offset[2],
    //   stone.point.y + Symbols.锁定标识.offset[3],
    // ];

    // let rst = detectSymbol({
    //   screenshot,
    //   symbol: {
    //     ...Symbols.锁定标识,
    //     area,
    //   },
    // });
    // stone.locked = !!rst;

    // area = [
    //   stone.point.x + Symbols.矿石距离.offset[0],
    //   stone.point.y + Symbols.矿石距离.offset[1],
    //   stone.point.x + Symbols.矿石距离.offset[2],
    //   stone.point.y + Symbols.矿石距离.offset[3],
    // ];
    // rst = isInRange(screenshot, {
    //   ...Symbols.矿石距离,
    //   area,
    // });
    // stone.inRange = rst;
  
  image.recycle(screenshot);
//   lockIfICan();
};

// 不准确
const isInRange = (screenshot, symbol) => {
  const { area, files, similarity } = symbol;
  let maxCount = 0;
  files.forEach((file) => {
    const result = detectSymbol({
      screenshot,
      symbol: { file, area, similarity },
      countOfExpect: 3,
    });
    if (result) {
      maxCount = Math.max(result.length);
    }
  });
  return maxCount < 2;
};

const lockIfICan = () => {
  if (!stones) return;
  stones.forEach(({ point, locked }) => {
    if (!locked) {
      click(point, 600);
      click(point, 1000, Offsets.锁定);
    }
  });
};

export const getOneLocked = () => {
  let firstLocked = stones.find(({ locked }) => locked);
  logd("locked", stones, firstLocked);
  return firstLocked;
};