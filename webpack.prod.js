const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: 'production',
	entry: {
		bundle: path.resolve(__dirname, './src/index.js'),
		style: path.resolve(__dirname, './src/style.js'),
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(scss|css)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
		]
	},
	resolve: {
		extensions: ['*', '.js']
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js',
		clean: true
	},
		optimization: {
		minimize: true
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}), new HtmlWebpackPlugin({
			title: 'Events Calendar - Events at UC Santa Cruz',
			// Load a custom template (lodash by default)
			template: './src/index.html'
		})
  ],

};