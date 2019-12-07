import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/game.js',
  cache: true,
  output: {
    file: 'public/js/game.js',
    name: 'ITS',
    format: 'iife'
  },
  plugins: [
    resolve()
  ]
};