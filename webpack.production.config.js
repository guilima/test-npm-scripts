const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.js');

module.exports = merge(commonConfig, {
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      '_config' : {
        'url' : function() { return /localhost/.test(window.location.host) ? 'http://hml.bonmarketplace.back.b2w' : window.location.protocol + '//' + window.location.host; }
      }
    })
  ]
});
