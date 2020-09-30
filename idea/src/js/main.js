'use strict';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var DEFAULT_THRESHOLD = 90;
var Symbols = Object.freeze({
  离站按钮: {
    file: readResAutoImage("离站.png"),
    area: [1310, 222, 1327, 258],
    similarity: 0.9
  },
  仓库图标: {
    file: readResAutoImage("仓库图标.png"),
    area: [67, 86, 91, 113],
    similarity: 0.9
  },
  库容: {
    area: [100, 94, 132, 106],
    similarity: 0.8,
    files: [readResAutoImage("库容数字0.png"), readResAutoImage("库容数字1.png"), readResAutoImage("库容数字2.png"), readResAutoImage("库容数字3.png"), readResAutoImage("库容数字4.png"), readResAutoImage("库容数字5.png"), readResAutoImage("库容数字6.png"), readResAutoImage("库容数字7.png"), readResAutoImage("库容数字8.png"), readResAutoImage("库容数字9.png")]
  },
  小眼睛: {
    file: readResAutoImage("小眼睛.png"),
    area: [1133, 395, 1600, 413],
    similarity: 0.3
  },
  矿枪: {
    file: readResAutoImage("矿枪.png"),
    area: [1198, 551, 1408, 601],
    similarity: 0.7
  },
  激活标识: {
    file: readResAutoImage("激活标识.png"),
    offset: [25, -12, 31, -2],
    similarity: 0.5
  },
  矿石图标: {
    file: readResAutoImage("矿石图标.png"),
    area: [1206, 84, 1216, 550],
    similarity: 0.4
  },
  矿石距离: {
    offset: [46, -8, 75, 5],
    similarity: 0.3,
    files: [readResAutoImage("距离数字0.png"), readResAutoImage("距离数字1.png"), readResAutoImage("距离数字2.png"), readResAutoImage("距离数字3.png"), readResAutoImage("距离数字4.png"), readResAutoImage("距离数字5.png"), readResAutoImage("距离数字6.png"), readResAutoImage("距离数字7.png"), readResAutoImage("距离数字8.png"), readResAutoImage("距离数字9.png")]
  },
  锁定标识: {
    file: readResAutoImage("锁定标识.png"),
    offset: [13, 0, 18, 9],
    similarity: 0.3
  },
  矿场图标: {
    file: readResAutoImage("矿场图标.png"),
    area: [1204, 83, 1219, 512],
    similarity: 0.7
  },
  卸货空间站: {
    file: readResAutoImage('驻地空间站'),
    area: [1289, 72, 1371, 372],
    similarity: 0.7
  }
});
var EnvSymbols = Object.freeze([_objectSpread2({
  location: "空间站"
}, Symbols.离站按钮), _objectSpread2({
  location: "矿场"
}, Symbols.矿石图标), _objectSpread2({
  location: "太空"
}, Symbols.小眼睛)]);

// 启动服务
var autoServiceStart = function autoServiceStart(time) {
  for (var i = 0; i < time; i++) {
    if (isServiceOk()) {
      return true;
    }

    var started = startEnv();
    logd("第" + (i + 1) + "次启动服务结果: " + started);

    if (isServiceOk()) {
      return true;
    }
  }

  return isServiceOk();
};
var requestPermission = function requestPermission() {
  var req = image.requestScreenCapture(10000, 0);

  if (!req) {
    req = image.requestScreenCapture(10000, 0);
  }

  if (!req) {
    return;
  }

  sleep(1000);
  return true;
};
var prepareEnv = function prepareEnv() {
  if (!autoServiceStart(3)) {
    logd("自动化服务启动失败，无法执行脚本");
    exit();
    return;
  }

  if (!requestPermission()) {
    logd("申请权限失败");
    exit();
    return;
  }
};

var getBinaryImage = function getBinaryImage() {
  var threshold = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_THRESHOLD;
  var screenshot = image.captureFullScreenEx();

  if (screenshot) {
    var binary = image.binaryzation(screenshot, 0, threshold);
    image.recycle(screenshot);

    if (binary) {
      return binary;
    }
  }

  return null;
};

ß;

var main = function main() {
  prepareEnv();
  image.saveTo(getBinaryImage(), "/sdcard/kkk.png"); //   scan();
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
