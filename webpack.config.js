const path = require('path');

module.exports = {
	entry: './src/index.js',
	devtool: 'source-map',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'web/dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: require.resolve('babel-loader'),
			}, {
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'eslint-loader',
				options: {
					fix: true,
				},
			},
		],
	},
};
