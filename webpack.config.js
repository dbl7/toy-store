const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: {
        polyfills: './src/polyfills.ts',
        vendor: './src/vendor.ts',
        app: './src/main.ts',
    },

    output: {
        path: path.join(__dirname, '/public/dist'),
        filename: '[name].bundle.js',
        publicPath: 'http://localhost:3000/',
    },

    resolve: {
        extensions: ['.js', '.ts'],
    },

    devtool: 'cheap-module-source-map',

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        compress: true,
        port: 3000,
        proxy: {
            '*': {
                target: 'http://localhost:3001',
            },
        },
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader'],
            },
            {
                test: /\.scss$/,
                exclude: [path.join(__dirname, 'src/app')],
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.scss$/,
                include: [path.join(__dirname, 'src/app')],
                use: ['raw-loader', 'sass-loader'], 
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'file-loader?name=assets/[name].[hash].[ext]',
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),

        new WebpackNotifierPlugin(),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills'],
        }),

        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.resolve(__dirname, 'doesnotexist/')
        ),
    ]
}