const baceObj = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

const config = {
    mode: 'development',
    entry: './src/client',
    devtool: 'source-map',
    output: {
        filename: 'js/[name].[hash:5].js',
        path: resolve('./public'),
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!*'],
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:5].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(jpg)|(png)|(gif)|(svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[hash:5].[ext]'
                    }
                }
            }
        ],
    }
}

module.exports = merge(baceObj, config);