const path = require('path');

module.exports = {
	entry: [{
		bundle: path.resolve(__dirname, './src/index.js'),
		style: path.resolve(__dirname, './src/style.js')
}],
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader'],
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
};