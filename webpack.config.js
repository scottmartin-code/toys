const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = (env, argv) => {
	return {
		entry: './src/svelte/index.js', 	
		resolve: {
			alias: {
				svelte: path.resolve('node_modules', 'svelte'),
			},
			extensions: [ '.mjs', '.js', '.svelte' ], // mjs needed in Svelte itself
			mainFields: [ 'svelte', 'browser', 'module', 'main' ],
		},
		output: {
			filename: 'app.js',
			path:     path.join(__dirname, '/web/js'),
		},
		mode: argv.mode,
		devtool: argv.mode === 'production' ? false : 'source-map',
		module: {
			rules: [
				{
					test: /\.css$/,
					use:  [
						// MiniCssExtractPlugin doesn't support HMR.
						// For developing, use 'style-loader' instead.
						argv.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
						'css-loader',
					],
				}, {
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
				}, {
					test: /\.svelte$/,
					use:  {
						loader:  'svelte-loader',
						options: {
							dev: argv.mode === 'development' ? true : false,
							emitCss:   true,
							hotReload: true,
						},
					},
				}
			],
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: '[name].css',
			}),
		],
	}
}
