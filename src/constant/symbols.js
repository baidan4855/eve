export const DEFAULT_THRESHOLD = 90;

export const Symbols = Object.freeze({
  离站按钮: {
    file: readResAutoImage("离站.png"),
    area: [1310, 222, 1327, 258],
    similarity: 0.9,
  },
  仓库图标: {
    file: readResAutoImage("仓库图标"),
    area: [67, 86, 91, 113],
    similarity: 0.9,
  },
  库容数字: {
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
    area: [100, 94, 132, 106],
    similarity: 0.8,
  },
  小眼睛: {
    file: readResAutoImage("小眼睛"),
    area: [1133, 395, 1583, 412],
    similarity: 0.7,
  },
  矿枪: {
    file: readResAutoImage("矿枪"),
    area: [1198, 551, 1408, 601],
  },
});

export const EnvSymbols = Object.freeze([
  {
    location: "空间站",
    ...Symbols.离站按钮,
  },
  {
    location: "太空",
    ...Symbols.小眼睛,
  },
  {},
]);
