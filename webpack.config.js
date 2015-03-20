var path = require('path');
var webpack = require('webpack');
var ngminPlugin = require('ngmin-webpack-plugin');

var version = require('./package.json').version;
var name = require('./package.json').name;

module.exports = {
	entry: "./src/index.js",
	output: {
		path: './build',
		filename: name + '.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.css$/,
			loader: "style-loader!css-loader!autoprefixer"
		}, {
			test: /\.html$/,
			loader: "html-loader"
		}]
	},
	externals: {
		"jquery": "$",
		"angular": "angular"
	},
	plugins: [
		new webpack.BannerPlugin("\
" + name + "\n\
author: Bret Little\n\
copyright: 2015\n\
license: MIT\n\
version: " + version)
	]
};
