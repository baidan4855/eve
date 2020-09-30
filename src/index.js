import { Symbols } from "./constant/symbols";
import { prepareEnv } from "./env";
import { getBinaryImage, detectSymbol } from "./api";
import { confirmCapacity, detectEnv } from "./sensor";
import { discharge, gotoWork,backToStation } from "./actions";
import { init, checkGunsStatus,inited, isBusy } from "./mineGuns";
import { scan } from "./mineRadar";

const MainProcess = [
  {
    code: "location",
    condition: {
      location: null,
    },
    should: detectEnv,
  },
  {
    condition: {
      mineGun: null,
    },
    should: init,
  },
  {
    code: "capacity",
    condition: {
      capacity: null,
    },
    should: confirmCapacity,
  },
  {
    condition: {
      location: "矿场",
      capacity: (capacity) => capacity < 95,
    },
    should: scan,
  },
  {
    condition: {
        capacity: (capacity) => capacity >= 100
    },
    should: scan,
  },
  // {
  //     condition: {
  //         capacity: capacity => capacity >= 95
  //     },
  //     should:
  // }
];

const main = () => {
  prepareEnv();

    image.saveTo(getBinaryImage(), "/sdcard/kkk.png");
//   scan();
  //   init();
  //   checkGunsStatus()
//   const checkCondition = (status, condition) => {
//     let keys = Object.keys(condition);
//     for (let i = 0; i < keys.length; i++) {
//       if (keys[i] === "mineGun") {
//         return inited() === condition[keys[i]];
//       } else if (status[keys[i]] !== condition[keys[i]]) {
//         return false;
//       }
//     }
//     return true;
//   };

  // while (true) {
  //   let status = {
  //     location: null,
  //     capacity: null,
  //     mining: null,
  //   };
  //   for (let i = 0; i < MainProcess.length; i++) {
  //     let process = MainProcess[i];
  //     if (checkCondition(status, process.condition)) {
  //       if (process.should) {
  //         let ret = process.should();
  //         if (ret && process.code) {
  //           status[process.code] = ret;
  //         }
  //       }
  //     }
  //   }

  //   logd(JSON.stringify(status));
  //   sleep(5000);
  // }
};



main();
