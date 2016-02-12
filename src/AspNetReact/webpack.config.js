var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


var nodeModulesPath = path.join(__dirname, 'node_modules');

module.exports = {
    devtool: 'eval-source-map',
    devServer: {
        contentBase: 'wwwroot'
    },
    entry: [
        'babel-polyfill',
        './src/main.jsx'
    ],
    output: {
        path: 'wwwroot',
        filename: 'app.[hash].js'
    },

    plugins: [
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
                loader: 'ts-loader',
                test: /\.tsx?$/,
                include: path.join(__dirname, 'src')                
            },
            {
              loader: 'babel-loader',
              test: /\.jsx?$/,
              include: path.join(__dirname, 'src'),
              query: {
                  plugins: ['transform-runtime'],
                  presets: ['es2015', 'stage-0', 'react']
              }
          }
        ]
    }
    ,
    resolve:{
        extensions : ['', '.js', '.jsx', '.ts', '.tsx'],
        alias: { 
            'react': path.join(nodeModulesPath, 'react', 'react.js'), 
            'react-dom': path.join(nodeModulesPath, 'react-dom', 'dist', 'react-dom.js')
        } 
    }
};
