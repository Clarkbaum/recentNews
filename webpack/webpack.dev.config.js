var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
  entry: [
    path.join(parentDir, 'index.js')
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "stage-0", "react"],
          plugins: ["transform-object-rest-spread"]
        }
      },
      {
        test: /\.less$/,
        loaders: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  output: {
    path: parentDir + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true
  }
}