var PROD = process.argv.indexOf('-p') >= 0;
var webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'typeof __DEV__': JSON.stringify('boolean'),
            __DEV__: PROD ? false : true
        })
    ],
    entry: {
        'echarts.common': __dirname + '/index.common.js'
    },
    output: {
        libraryTarget: 'umd',
        library: 'echarts',
        path: __dirname + '/example',
        filename: '[name].js'
    }
};