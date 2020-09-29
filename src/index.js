import { Symbols } from "./constant/symbols";
import {prepareEnv} from './env'
import { getBinaryImage, detectSymbol } from "./api";
import { confirmCapacity, detectCapacity } from "./sensor";
import { discharge } from "./actions";

const main = () => {
  prepareEnv();
  let img = getBinaryImage();
  logd(img);
  let i = detectCapacity(img);
  logd(i);
};

main()