var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        vendor: './src/vendor.js',
        app: './src/index.js'
    },

    resolve: {
        extensions: ['.js', '.json']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                use: 'json-loader'
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                use: 'file-loader?name=assets/[name].[hash].[ext]',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap' }),
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}