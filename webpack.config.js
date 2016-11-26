var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');
var WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
    entry: {
        app: './src/app/app.js',
    },

    resolve: ['.', '.js'],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new WebpackNotifierPlugin(),
        new WebpackBrowserPlugin()
    ]
}