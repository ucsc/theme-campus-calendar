const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
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
	},
	devServer: {
		static: path.resolve(__dirname, './dist'),
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
}),
  ],
};