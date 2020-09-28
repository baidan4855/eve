import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'idea/src/js/main.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
  ]
};
