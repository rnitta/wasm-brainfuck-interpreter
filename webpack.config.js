const path = require('path');
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.wasm'],
  },
  entry: {
    js: './src/js/index.js',
    wasm: './src/wasm/index.js'
  },
  output: {
    filename: '[name]/[name].js',
    path: path.join(__dirname, 'public'),
  },
  plugins: [
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, './src/wasm'),
    }),
    new CopyPlugin([
      {
        from: 'src/wasm/optimized.wasm',
        to: 'wasm/',
        flatten: true,
      },
      {
        from: 'src/index.html',
        to: './',
        flatten: true,
      },
      {
        from: 'src/css/styles.css', //fixme: style-loader
        to: 'css/',
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { modules: false }]],
            },
          },
        ],
      },
      // {
      //   test: /\.(html)$/,
      //   use: {
      //     loader: 'html-loader',
      //     options: {
      //       attrs: [':data-src']
      //     }
      //   }
      // },
    ],
  },
};
