var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/SearchBox.js',
    output: {
        path: path.resolve('lib'),
        filename: 'SearchBox.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
}