var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {

    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        publicPath: '/',
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        inline: true,
        port: 3333
    },

    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
});