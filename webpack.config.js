var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: "./src/multi-selector.js",
	output: {
		path: __dirname + '/build',
		filename: 'multi-selector.js',
		library: 'cpr-multiselect',
		libraryTarget: 'amd',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[path][name]__[local]',
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins() {
								return [
									require('autoprefixer')
								];
							},
						},
					},
				],
			},
		]
	},
	resolve: {
		modules: [
			__dirname,
			'node_modules',
		],
	},
	devtool: 'source-map',
	externals: [
		/^lodash$/,
		/^react$/,
	],
};
