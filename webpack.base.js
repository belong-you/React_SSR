const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    watch: true,
    resolve: {
        alias: {
            '@': resolve('./src'),
        },
        extensions: ['.js', '.jsx'],
    },
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                },
                exclude: /node_modules/,
            },
        ],
    }
}