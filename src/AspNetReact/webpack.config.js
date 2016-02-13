var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


var nodeModulesPath = path.join(__dirname, 'node_modules');
var srcPath = path.join(__dirname, 'src');

module.exports = {
    devtool: 'source-map',
    devServer: {
        contentBase: 'wwwroot',
        port: 3000
    },
    entry: [
        './src/main.tsx'
    ],
    output: {
        path: 'wwwroot',
        filename: 'app.[hash].js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            inject: 'body'
        })
    ],
    module: {
        preloaders : {
            loader: "tslint",
            test: /\.tsx?$/,
            include: srcPath                
        },
        loaders: [
            {
                loader: 'ts',
                test: /\.tsx?$/,
                include: srcPath                
            }
        ]
    }
    ,
    resolve:{
        extensions : ['', '.js', '.ts', '.tsx']
    }
};
