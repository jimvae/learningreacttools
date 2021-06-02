// the one that transpile(one language to another) ES6 to common js
const path = require('path');
const webpack = require('webpack');


// now sepcify on how webpack should transform the code
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                // es6 to js
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"] }
            },
            {
                // for js to be able to use css
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        // output files
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    // allows to view in the application browser
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};