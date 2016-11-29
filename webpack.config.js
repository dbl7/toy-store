var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');
var WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
    entry: {
        app: './src/app/app.ts',
    },

    output: {
        path: path.join(__dirname, '/public/dist'),
        publicPath: 'http://localhost:3000/',
        filename: '[name].bundle.js',
    },

    resolve: {
        extensions: ['', '.js', '.ts'],
    },

    devtool: 'source-map',

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        port: 3000,
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new WebpackNotifierPlugin(),
        new WebpackBrowserPlugin()
    ]
}