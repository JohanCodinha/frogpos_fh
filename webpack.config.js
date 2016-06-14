var webpack = require('webpack');
module.exports = {
	entry: './js/app.js',
	output: {
		path: './build',
		filename: 'bundle.js'
	},
	module: {
		loaders:[{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	},
	plugins : [ new webpack.ProvidePlugin({
		$ : 'jquery',
		_ : "underscore",
		Backbone : "backbone",
		Backform : 'backform'
	}) ]
};