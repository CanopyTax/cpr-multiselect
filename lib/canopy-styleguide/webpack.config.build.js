var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
	module: {
		loaders: [
			// Extract css files
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer")
			},
			// Optionally extract less files
			// or any other compile-to-css language
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer!less-loader")
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
			},
			{
				test: /\.ttf$/,
				loader: "file"
			},
			{
				test: /\.eot$/,
				loader: "file"
			},
			{
				test: /\.woff$/,
				loader: "file"
			},
			{
				test: /\.svg$/,
				loader: "file"
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("[name].css")
	]
}
