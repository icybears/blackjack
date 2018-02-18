const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/index.js', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
        { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  devServer: {
    historyApiFallback: true 
  },
 plugins:[
     new HtmlWebpackPlugin({
         template: './src/index.html'
     })
 ]
};

