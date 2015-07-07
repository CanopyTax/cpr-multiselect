var path = require('path');

module.exports = {
	// The standard entry point and output config
	entry: {
		styleguide: "./src/components.less",
		variables:  "./src/external-variables.less",
		app:				"./src/app.jsx"
	},
	output: {
		path: './build',
		filename: "[name].js",
		chunkFilename: "[id].js"
	},
	devtool: "sourcemap",
	module: {
		loaders: [
			// Extract css files
			{
				test: /\.css$/,
				loader: "style-loader!css-loader!autoprefixer"
			},
			// Optionally extract less files
			// or any other compile-to-css language
			{
				test: /\.less$/,
				loader: "style-loader!css-loader!autoprefixer!less-loader"
			},
			{
				test: /\.jsx$/,
				loader: 'jsx-loader?insertPragma=React.DOM&harmony'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.woff$/,
				loader: "file"
				//loader: "url?limit=100&minetype=application/font-woff"
			},
			{
				test: /\.ttf$/,
				loader: "file"
				//loader: "url?limit=10000&minetype=application/octet-stream"
			},
			{
				test: /\.eot$/,
				loader: "file"
			},
			{
				test: /\.woff$/,
				loader: "file"
				//loader: "url?limit=100&minetype=application/font-woff"
			},
			{
				test: /\.svg$/,
				loader: "file"
				//loader: "url?limit=100&minetype=application/font-woff"
			}
		],
		noParse: [
		]
	},
	plugins: [
	]
}
