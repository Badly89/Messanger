const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.(scss|css)$/,
            use: ['css-loader', 'sass-loader'],
        },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
    ],
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './public'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
};