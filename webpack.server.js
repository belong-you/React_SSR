const nodeExternals = require('webpack-node-externals');
const baceObj = require('./webpack.base');
const { merge } = require('webpack-merge');

const config = {
    entry: './server',
    target: 'node',
    output: {
        filename: 'server.js',
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['isomorphic-style-loader', 'css-loader']
            },
            {
                test: /\.(jpg)|(png)|(gif)|(svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[hash:5].[ext]',
                        emitFile: false
                    }
                }
            }
        ],
    }
}

module.exports = merge(baceObj, config);