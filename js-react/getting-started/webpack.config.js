var path = require('path');

var SRC = path.resolve(__dirname, 'src');
var BUILD = path.resolve(__dirname, 'build');

var config = {
  entry: SRC + '/index.js',
  output: {
    filename: 'bundle.js',
    path: BUILD,
  },
  devServer: {
    contentBase: BUILD,
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /(node_modules|bower_components)/,
        include: SRC,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ]
  },
};

module.exports = config;
