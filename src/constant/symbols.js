export const DEFAULT_THRESHOLD = 90;

export const Symbols = Object.freeze({
  离站按钮: {
    file: readResAutoImage("离站.png"),
    area: [1310, 222, 1327, 258],
    similarity: 0.9,
  },
  仓库图标: {
    file: readResAutoImage("仓库图标.png"),
    area: [67, 86, 91, 113],
    similarity: 0.9,
  },
  库容: {
    area: [100, 94, 132, 106],
    similarity: 0.7,
    files: [
      readResAutoImage("库容数字0.png"),
      readResAutoImage("库容数字1.png"),
      readResAutoImage("库容数字2.png"),
      readResAutoImage("库容数字3.png"),
      readResAutoImage("库容数字4.png"),
      readResAutoImage("库容数字5.png"),
      readResAutoImage("库容数字6.png"),
      readResAutoImage("库容数字7.png"),
      readResAutoImage("库容数字8.png"),
      readResAutoImage("库容数字9.png"),
    ],
  },
  小眼睛: {
    file: readResAutoImage("小眼睛.png"),
    area: [1133, 395, 1600, 413],
    similarity: 0.3,
  },
  矿枪: {
    file: readResAutoImage("矿枪.png"),
    offset: [-344, -12, -290, 30],
    similarity: 0.8,
  },

  矿石图标: {
    file: readResAutoImage("矿石图标.png"),
    area: [1206, 84, 1216, 550],
    similarity: 0.4,
  },
  矿石距离: {
    offset: [46, -8, 75, 5],
    similarity: 0.3,
    files: [
      readResAutoImage("距离数字0.png"),
      readResAutoImage("距离数字1.png"),
      readResAutoImage("距离数字2.png"),
      readResAutoImage("距离数字3.png"),
      readResAutoImage("距离数字4.png"),
      readResAutoImage("距离数字5.png"),
      readResAutoImage("距离数字6.png"),
      readResAutoImage("距离数字7.png"),
      readResAutoImage("距离数字8.png"),
      readResAutoImage("距离数字9.png"),
    ],
  },
  锁定标识: {
    file: readResAutoImage("锁定标识.png"),
    offset: [13, 0, 18, 9],
    similarity: 0.3,
  },
  矿场图标: {
    file: readResAutoImage("矿场图标.png"),
    area: [1204, 83, 1219, 512],
    similarity: 0.7,
  },
  驻地空间站: {
    file: readResAutoImage("驻地空间站.png"),
    area: [1288, 70, 1329, 378],
    similarity: 0.6,
  },
  停靠标识: {
    file: readResAutoImage("停靠标识.png"),
    offset: [-316, -10, -275, 320],
    similarity: 0.7,
  },
  菜单空间站标识: {
    file: readResAutoImage('菜单空间站标识.png'),
    area: [1214,12,1243,41],
    similarity: 0.9,
  },
  菜单采矿标识: {
    file: readResAutoImage('菜单采矿标识.png'),
    area: [1214,12,1243,41],
    similarity: 0.9,
  },
  速度100: {
    file: readResAutoImage('速度100.png'),
    area: [566,626,613,641],
    similarity: 0.8,
  }
});

export const EnvSymbols = Object.freeze([
  {
    location: "空间站",
    ...Symbols.离站按钮,
  },
  {
    location: "矿场",
    ...Symbols.矿石图标,
  },
  {
    location: "太空",
    ...Symbols.小眼睛,
  },
]);
