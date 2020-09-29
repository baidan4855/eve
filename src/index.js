import { Symbols } from "./constant/symbols";
import {prepareEnv} from './env'
import { getBinaryImage, detectSymbol } from "./api";
import { confirmCapacity } from "./sensor";

const main = () => {
    prepareEnv()

    const screenshot = getBinaryImage();
    // image.saveTo("/sdcard/100.png");
    const rst = confirmCapacity(screenshot);
    logd(rst, "xx");
}

main()