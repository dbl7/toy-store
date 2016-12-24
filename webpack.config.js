var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: {
        polyfills: './src/polyfills.ts',
        vendor: './src/vendor.ts',
        app: './src/main.ts',
    },

    output: {
        path: path.join(__dirname, '/public/dist'),
        publicPath: 'http://localhost:3000/',
        filename: '[name].bundle.js',
    },

    resolve: {
        extensions: ['', '.js', '.ts'],
    },

    devtool: 'cheap-module-source-map',

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        port: 3000,
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript', 'angular2-template'],
            },
            {
                test: /\.scss$/,
                exclude: [path.join(__dirname, 'src/app')],
                loaders: ['style', 'css', 'sass'],
            },
            {
                test: /\.scss$/,
                include: [path.join(__dirname, 'src/app')],
                loaders: ["raw", "sass"], 
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new WebpackNotifierPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills'],
        }),
    ]
}