var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


var nodeModulesPath = path.join(__dirname, 'node_modules');

module.exports = {
    devtool: 'source-map',
    devServer: {
        contentBase: 'wwwroot',
        port: 3000
    },
    entry: [
        // 'babel-polyfill',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/main.tsx'
    ],
    output: {
        path: 'wwwroot',
        filename: 'app.[hash].js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/wwwroot/index.html'),
            inject: 'body'
        }),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin()
    ],
    module: {
        loaders: [
            {
                loader: 'react-hot!ts',
                test: /\.tsx?$/,
                include: path.join(__dirname, 'src')                
            },
        //     {
        //       loader: 'babel-loader',
        //       test: /\.jsx?$/,
        //       include: path.join(__dirname, 'src'),
        //       query: {
        //           plugins: ['transform-runtime'],
        //           presets: ['es2015', 'stage-0', 'react']
        //       }
        //   }
        ]
    }
    ,
    resolve:{
        extensions : ['', '.js', '.ts', '.tsx'],
        alias: { 
            'react': path.join(nodeModulesPath, 'react'), 
            'react-dom': path.join(nodeModulesPath, 'react-dom')
        } 
    }
};
console.log(module.exports.resolve.alias['react-dom']);