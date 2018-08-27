const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const webpack = require('webpack');
const path = require('path');

// merge combines the webpack files given. Keep it DRY
module.exports = merge(common, {
  // allows us to see errors that map to actual code
  devtool: 'inline-source-map',
  // allows us to use Webpack-dev-servere with hot loading
  devServer: {
    hot: true,
    // where are we serving files from
    contentBase: path.resolve(__dirname, 'public'),
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.jsx$/,
  //       use: 'react-hot-loader/webpack',
  //     },
  //   ],
  // },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
