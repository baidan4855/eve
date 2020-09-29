import { Symbols } from "./constant/symbols";
import { prepareEnv } from "./env";
import { getBinaryImage, detectSymbol } from "./api";
import { confirmCapacity, detectCapacity, detectEnv } from "./sensor";
import { discharge, gotoWork } from "./actions";

const main = () => {
  prepareEnv();
  // let c = detectSymbol({
  //   screenshot: getBinaryImage(),
  //   symbol: Symbols.矿石图标,
  //   countOfExpect: 1,
  // });
  // logd(c);
  // let i = detectEnv();
  // logd(i);
  gotoWork();
  // image.saveTo(getBinaryImage(), "/sdcard/test1.png");
};

main();
