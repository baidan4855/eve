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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var DEFAULT_THRESHOLD = 90;
var NUMBERS = [readResAutoImage("库容数字0.png"), readResAutoImage("库容数字1.png"), readResAutoImage("库容数字2.png"), readResAutoImage("库容数字3.png"), readResAutoImage("库容数字4.png"), readResAutoImage("库容数字5.png"), readResAutoImage("库容数字6.png"), readResAutoImage("库容数字7.png"), readResAutoImage("库容数字8.png"), readResAutoImage("库容数字9.png")];
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
  库容数字: {
    files: NUMBERS,
    area: [100, 94, 132, 106],
    similarity: 0.8
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
    similarity: 0.8
  },
  矿石图标: {
    file: readResAutoImage("矿石图标.png"),
    area: [1206, 85, 1216, 550],
    similarity: 0.7
  },
  矿石距离: {
    files: NUMBERS,
    offset: [58, -7, 73, 4],
    similarity: 0.8
  },
  锁定标识: {
    file: readResAutoImage("锁定标识.png"),
    area: [-8, 0, 17, 8],
    similarity: 0.8
  },
  卸货站: {
    file: readResAutoImage("卸货站.png"),
    area: [1291, 55, 1369, 390],
    similarity: 0.8
  },
  矿场图标: {
    file: readResAutoImage("矿场图标.png"),
    area: [1204, 83, 1219, 512],
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

var toRect = function toRect(area) {
  var _area = _slicedToArray(area, 4),
      left = _area[0],
      top = _area[1],
      right = _area[2],
      bottom = _area[3];

  var rect = new Rect();
  rect.left = left;
  rect.top = top;
  rect.right = right;
  rect.bottom = bottom;
  return rect;
}; // 查找图片


var detectSymbol = function detectSymbol(_ref) {
  var screenshot = _ref.screenshot,
      symbol = _ref.symbol,
      _ref$countOfExpect = _ref.countOfExpect,
      countOfExpect = _ref$countOfExpect === void 0 ? 1 : _ref$countOfExpect;
  var file = symbol.file,
      area = symbol.area,
      similarity = symbol.similarity;
  logd(file, area, similarity);
  var result = image.matchTemplate(screenshot, file, similarity, similarity, toRect(area), -1, countOfExpect);
  return result || null;
};

var Points = {
  关闭按钮: [1455, 42],
  调整视角: [1000, 400, 900, 360],
  仓库按钮: [110, 100],
  矿石舱: [180, 620],
  全选按钮: [1174, 642],
  移动至: [120, 150],
  物品机库: [520, 160],
  菜单开关: [1300, 30],
  菜单内空间站选项: [1300, 272],
  菜单内采矿选项: [1300, 555]
};

var click = function click(point, delay) {
  var _acEvent;

  (_acEvent = acEvent).clickPoint.apply(_acEvent, _toConsumableArray(point));

  if (delay) sleep(delay);
};
var gotoWork = function gotoWork() {
  sleep(100);
  var screenshot = getBinaryImage();
  var rst = detectSymbol({
    screenshot: screenshot,
    symbol: Symbols.小眼睛,
    countOfExpect: 1
  });
  logd(rst);
  if (!rst) return null;

  if (rst[0].point.x - Symbols.小眼睛.area[0] > 3) {
    click([rst[0].point.x, rst[0].point.y], 1500);
  }

  click(Points.菜单开关, 1000);
  click(Points.菜单内采矿选项, 1000);
  image.recycle(screenshot);
  screenshot = getBinaryImage();
  if (!screenshot) return;
  rst = detectSymbol({
    screenshot: screenshot,
    symbol: Symbols.矿场图标,
    countOfExpect: 6
  });
  logd(rst);
  if (!rst || rst.length < 2) return;
  var targetIndex = Math.ceil(Math.random() * (rst.length - 1));
  var target = rst[targetIndex].point;
  click([target.x, target.y], 2000);
  click([target.x - 50, target.y + 80], 1000);
};

var main = function main() {
  prepareEnv(); // let c = detectSymbol({
  //   screenshot: getBinaryImage(),
  //   symbol: Symbols.矿石图标,
  //   countOfExpect: 1,
  // });
  // logd(c);
  // let i = detectEnv();
  // logd(i);

  gotoWork(); // image.saveTo(getBinaryImage(), "/sdcard/test1.png");
};

main();
