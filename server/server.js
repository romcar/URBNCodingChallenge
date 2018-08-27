const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');
const webpack = require('webpack');
const webpackDevMiddleWare = require('webpack-dev-middleware');
const config = require('../webpack.config.common');

const compiler = webpack(config);

const app = express();

/*
  Middlewares
*/

// webpack dev
app.use(webpackDevMiddleWare(compiler, {
  publicPath: config.output.publicPath,
}));

// body parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.all('/*', routes);

module.exports = app;
