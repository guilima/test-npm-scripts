const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.js');

module.exports = merge(commonConfig, {
  devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      '_config' : {
        'url' : function() { return 'http://hml.bonmarketplace.back.b2w'; }
      }
    })
  ]
});
