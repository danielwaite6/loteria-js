const webpack = require('webpack')

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/loteria-js/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8082,
        contentBase: './public'
    },
    module:{
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}