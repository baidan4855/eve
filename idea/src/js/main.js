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
    similarity: 0.7,
    files: [readResAutoImage("库容数字0.png"), readResAutoImage("库容数字1.png"), readResAutoImage("库容数字2.png"), readResAutoImage("库容数字3.png"), readResAutoImage("库容数字4.png"), readResAutoImage("库容数字5.png"), readResAutoImage("库容数字6.png"), readResAutoImage("库容数字7.png"), readResAutoImage("库容数字8.png"), readResAutoImage("库容数字9.png")]
  },
  小眼睛: {
    file: readResAutoImage("小眼睛.png"),
    area: [1133, 395, 1600, 413],
    similarity: 0.3
  },
  矿枪: {
    file: readResAutoImage("矿枪.png"),
    offset: [-344, -12, -290, 30],
    similarity: 0.8
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
  驻地空间站: {
    file: readResAutoImage("驻地空间站.png"),
    area: [1288, 70, 1329, 378],
    similarity: 0.6
  },
  停靠标识: {
    file: readResAutoImage("停靠标识.png"),
    offset: [-316, -10, -275, 320],
    similarity: 0.7
  },
  菜单空间站标识: {
    file: readResAutoImage('菜单空间站标识.png'),
    area: [1214, 12, 1243, 41],
    similarity: 0.9
  },
  菜单采矿标识: {
    file: readResAutoImage('菜单采矿标识.png'),
    area: [1214, 12, 1243, 41],
    similarity: 0.9
  },
  速度100: {
    file: readResAutoImage('速度100.png'),
    area: [566, 626, 613, 641],
    similarity: 0.8
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
  var result = image.matchTemplate(screenshot, file, similarity, similarity, toRect(area), -1, countOfExpect);
  return result || null;
};
var ocrNumber = function ocrNumber(screenshot, symbol) {
  var area = symbol.area,
      files = symbol.files,
      similarity = symbol.similarity;
  var numbers = [];
  files.forEach(function (file, index) {
    var result = detectSymbol({
      screenshot: screenshot,
      symbol: {
        file: file,
        area: area,
        similarity: similarity
      },
      countOfExpect: 2
    });
    sleep(10);

    if (result) {
      //   logd(index, result);
      result.forEach(function (_ref2) {
        var point = _ref2.point,
            similarity = _ref2.similarity;
        var i = numbers.findIndex(function (_ref3) {
          var x = _ref3.x;
          return Math.abs(x - point.x) < 4;
        });

        if (i === -1) {
          numbers.push({
            x: point.x,
            s: similarity,
            n: index
          });
        } else if (numbers[i].similarity < similarity) {
          numbers[i] = {
            x: point.x,
            s: similarity,
            n: index
          };
        }
      });
    }
  });
  if (numbers.length == 0) return null;
  numbers.sort(function (a, b) {
    return a.x - b.x;
  });
  return numbers.reduce(function (acc, cur, index, arr) {
    return acc + cur.n * Math.pow(10, arr.length - index - 1);
  }, 0);
};

var Points = {
  离站按钮: [1350, 232],
  关闭按钮: [1455, 42],
  调整视角: [1000, 400, 900, 360],
  仓库按钮: [110, 100],
  矿石舱: [180, 620],
  全选按钮: [1174, 642],
  移动至: [120, 150],
  物品机库: [520, 160],
  菜单开关: [1300, 30],
  菜单内空间站选项: [1300, 272],
  菜单内采矿选项: [1300, 555],
  菜单向下滑动: [1330, 100, 1330, 580],
  菜单右侧筛选器位置1: [1481, 83],
  菜单右侧筛选器位置2: [1481, 145]
};

var Offsets = {
  锁定: [-100, 0],
  接近: [-135, 90],
  跃迁: [-50, 80],
  矿枪: [-314, 8],
  停靠: [-234, 20]
};

var closeAllWindow = function closeAllWindow() {
  click(Points.关闭按钮);
  sleep(140);
  swipe(Points.调整视角);
  sleep(500);
};
var click = function click(point, delay, offset) {
  var _acEvent;

  var pos = [];

  if (Object.prototype.toString.call(point) === "[object Object]") {
    pos.push(point.x, point.y);
  } else {
    pos.push.apply(pos, _toConsumableArray(point));
  }

  if (offset) {
    pos[0] = pos[0] + offset[0];
    pos[1] = pos[1] + offset[1];
  }

  (_acEvent = acEvent).clickPoint.apply(_acEvent, pos);

  if (delay) sleep(delay);
};
var swipe = function swipe(point) {
  swipeToPoint.apply(void 0, _toConsumableArray(point).concat([400]));
  sleep(500);
};
var discharge = function discharge() {
  click(Points.仓库按钮, 3000);
  click(Points.矿石舱, 2000);
  click(Points.全选按钮, 2000);
  click(Points.移动至, 2000);
  click(Points.物品机库, 5000);
  click(Points.关闭按钮, 2000);
};
var leaveStation = function leaveStation() {
  closeAllWindow();
  click(Points.离站按钮, 2000);
};
var ensureMenuPopup = function ensureMenuPopup() {
  var screenshot = getBinaryImage();
  var rst = detectSymbol({
    screenshot: screenshot,
    symbol: Symbols.小眼睛,
    countOfExpect: 1
  });
  if (!rst) return null;

  if (rst[0].point.x - Symbols.小眼睛.area[0] > 3) {
    click(rst[0].point, 1500);
  }
};
var backToStation = function backToStation() {
  ensureMenuPopup();
  var screenshot = getBinaryImage();
  var rst = detectSymbol({
    screenshot: screenshot,
    symbol: Symbols.菜单空间站标识
  });

  if (!rst) {
    click(Points.菜单开关, 1000);
    click(Points.菜单内空间站选项, 2000);
  }

  image.recycle(screenshot);
  sleep(100);
  screenshot = getBinaryImage();
  rst = detectSymbol({
    screenshot: screenshot,
    symbol: Symbols.驻地空间站
  });
  sleep(100);
  if (!rst) return;
  click(rst[0].point, 1000);
  image.recycle(screenshot);
  screenshot = getBinaryImage();
  var area = [rst[0].point.x + Symbols.停靠标识.offset[0], rst[0].point.y + Symbols.停靠标识.offset[1], rst[0].point.x + Symbols.停靠标识.offset[2], rst[0].point.y + Symbols.停靠标识.offset[3]];
  rst = detectSymbol({
    screenshot: screenshot,
    symbol: _objectSpread2(_objectSpread2({}, Symbols.停靠标识), {}, {
      area: area
    })
  });
  if (!rst) return;
  click(rst[0].point, 5000);
};
var gotoWork = function gotoWork() {
  sleep(100);
  ensureMenuPopup();
  click(Points.菜单开关, 1000);
  click(Points.菜单内采矿选项, 1000);
  var screenshot = getBinaryImage();
  if (!screenshot) return;
  var rst = detectSymbol({
    screenshot: screenshot,
    symbol: Symbols.矿场图标,
    countOfExpect: 6
  });
  if (!rst || rst.length < 2) return;
  var targetIndex = Math.ceil(Math.random() * (rst.length - 1));
  var target = rst[targetIndex].point;
  click(target, 2000);
  click(target, 1000, Offsets.跃迁);
};
var moveTo = function moveTo(point) {
  click(point, 800);
  click(point, 800, Offsets.接近);
};
var fire = function fire(point) {
  click(point, 1000);
  var screenshot = getBinaryImage();
  var area = [point.x + Symbols.矿枪.offset[0], point.y + Symbols.矿枪.offset[1], point.x + Symbols.矿枪.offset[2], point.y + Symbols.矿枪.offset[3]];
  var gun = detectSymbol({
    screenshot: screenshot,
    symbol: _objectSpread2(_objectSpread2({}, Symbols.矿枪), {}, {
      area: area
    })
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
var stop = function stop() {
  var screenshot = getBinaryImage();
  var flying = detectSymbol({
    screenshot: screenshot,
    symbol: Symbols.速度100
  });
  image.recycle(screenshot);
  if (flying) click([Symbols.速度100.area[0], Symbols.速度100.area[1]], 2000);
};

var confirmCapacity = function confirmCapacity() {
  var probably = {};

  for (var i = 0; i < 10; i++) {
    var screenshot = getBinaryImage();
    sleep(20);
    var number = ocrNumber(screenshot, Symbols.库容);
    toast("检查库容:" + number);

    if (number !== null) {
      probably[number] = (probably[number] || 0) + 1;
      if (probably[number] > 1) return number;
    } else closeAllWindow();
  }

  return null;
}; // 检查当前地点

var detectEnv = function detectEnv() {
  var screenshot = getBinaryImage();
  if (!screenshot) return;
  var env = null;
  var bestSimilarity = null;
  var mine = false;

  for (var i = 0; i < EnvSymbols.length; i++) {
    var ret = detectSymbol({
      screenshot: screenshot,
      symbol: EnvSymbols[i],
      countOfExpect: 1
    });

    if (ret && EnvSymbols[i].location === "矿场") {
      mine = true;
    }

    if (ret && (bestSimilarity === null || ret[0].similarity > bestSimilarity.similarity)) {
      bestSimilarity = ret[0];
      env = EnvSymbols[i].location;
    }
  }

  image.recycle(screenshot);
  if (mine && env === "太空") env = "矿场";

  if (!env) {
    closeAllWindow();
    sleep(500);
    env = detectEnv();
  }

  return env;
};

var stones = null;
var scanAndDig = function scanAndDig() {
  ensureMenuPopup();
  var screenshot = getBinaryImage();
  if (!screenshot) return;
  sleep(100);
  var rst = detectSymbol({
    screenshot: screenshot,
    symbol: Symbols.菜单采矿标识
  });

  if (!rst) {
    click(Points.菜单开关, 1000);
    click(Points.菜单内采矿选项, 1000);
    click(Points.菜单右侧筛选器位置1, 500);
    swipe(Points.菜单向下滑动);
    swipe(Points.菜单向下滑动);
  } else {
    click(Points.菜单右侧筛选器位置1, 500);
  }

  image.recycle(screenshot);
  sleep(500);
  screenshot = getBinaryImage();
  if (!screenshot) return;
  sleep(100);
  rst = detectSymbol({
    screenshot: screenshot,
    symbol: Symbols.矿石图标,
    countOfExpect: 3
  });

  if (!rst) {
    return;
  }

  stones = rst.sort(function (a, b) {
    return a.point.y - b.point.y;
  });

  for (var i = 0; i < stones.length; i++) {
    var succ = fire(stones[i].point);

    if (succ && i === 0) {
      moveTo(stones[i].point);
    } else if (!succ) {
      stop();
      break;
    }
  } // let area = [
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


  image.recycle(screenshot); //   lockIfICan();
}; // 不准确

var MainProcess = [{
  condition: {
    location: '空间站',
    capacity: '>= 10'
  },
  should: discharge,
  desc: '清空货仓'
}, {
  condition: {
    location: '空间站',
    capacity: '< 10'
  },
  should: leaveStation,
  desc: '出站'
}, {
  condition: {
    location: '太空',
    capacity: '< 90'
  },
  should: gotoWork,
  desc: '跃迁到矿场'
}, {
  condition: {
    location: '矿场',
    capacity: '< 90'
  },
  should: scanAndDig,
  desc: '挖挖挖'
}, {
  condition: {
    location: '空间站 !',
    capacity: '>= 90'
  },
  should: backToStation,
  desc: '回站'
}];

var main = function main() {
  prepareEnv(); //   backToStation();return;
  // image.saveTo(getBinaryImage(), '/sdcard/bbbb.png'); return

  var checkCondition = function checkCondition(status, condition) {
    var keys = Object.keys(condition);

    for (var i = 0; i < keys.length; i++) {
      var val = condition[keys[i]];

      if (keys[i] === 'location') {
        var valArr = val.split(' ');
        var result = valArr[0] === status.location;
        if (valArr[1] === '!') result = !result;
        if (!result) return false;
      } else if (keys[i] === 'capacity') {
        var _valArr = val.split(' ');

        var _result = void 0;

        if (_valArr[0] === '=') _result = status.capacity === _valArr[1];else if (_valArr[0] === '>=') _result = status.capacity >= _valArr[1];else if (_valArr[0] === '>') _result = status.capacity > _valArr[1];else if (_valArr[0] === '<=') _result = status.capacity <= _valArr[1];else if (_valArr[0] === '<') _result = status.capacity < _valArr[1];
        if (!_result) return false;
      }
    }

    return true;
  };

  while (true) {
    var status = {
      location: detectEnv(),
      capacity: confirmCapacity()
    };
    logd('当前状态：', JSON.stringify(status));

    for (var i = 0; i < MainProcess.length; i++) {
      var process = MainProcess[i];

      if (checkCondition(status, process.condition)) {
        if (process.should) {
          toast(process.desc);
          process.should();
        }
      }
    }

    sleep(8000);
  }
};

main();
