const DEFAULT_THRESHOLD = 90;

export const Symbols = {
  离站按钮: {
    file: readResAutoImage("离站.png"),
    threshold: DEFAULT_THRESHOLD,
    search: [1376, 243, 1449, 279],
    similarity: 0.9,
  },
};
