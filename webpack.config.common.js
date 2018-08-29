const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },

  plugins: [
    new CleanWebpackPlugin(['app']),
    new HtmlWebpackPlugin({
      title: 'Pokedex',
      filename: 'index.html',
      template: './public/index.html',
    }),
  ],
  module: {
    // implemented during preprocessing, activated by the test field.
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'), // was 'app'
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
