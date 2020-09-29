export const DEFAULT_THRESHOLD = 90;

const NUMBERS = [
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
];
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
  库容数字: {
    files: NUMBERS,
    area: [100, 94, 132, 106],
    similarity: 0.8,
  },
  小眼睛: {
    file: readResAutoImage("小眼睛.png"),
    area: [1133, 395, 1600, 413],
    similarity: 0.3,
  },
  矿枪: {
    file: readResAutoImage("矿枪.png"),
    area: [1198, 551, 1408, 601],
    similarity: 0.7,
  },
  激活标识: {
    file: readResAutoImage("激活标识.png"),
    offset: [25, -12, 31, -2],
    similarity: 0.8,
  },

  矿石图标: {
    file: readResAutoImage("矿石图标.png"),
    area: [1206, 85, 1216, 550],
    similarity: 0.7,
  },
  矿石距离: {
    files: NUMBERS,
    offset: [58, -7, 73, 4],
    similarity: 0.8,
  },
  锁定标识: {
    file: readResAutoImage("锁定标识.png"),
    area: [-8, 0, 17, 8],
    similarity: 0.8,
  },
  卸货站: {
    file: readResAutoImage("卸货站.png"),
    area: [1291, 55, 1369, 390],
    similarity: 0.8,
  },
  矿场图标: {
    file: readResAutoImage("矿场图标.png"),
    area: [1204, 83, 1219, 512],
    similarity: 0.7,
  },
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
