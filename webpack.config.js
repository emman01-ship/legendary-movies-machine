const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    /** html plugin that links  */
    
    entry: {main: './src/main/js/index.js'},
    cache: true,
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './target/classes/static/built'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }], 

            }, {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
              }
        ]
    },

};