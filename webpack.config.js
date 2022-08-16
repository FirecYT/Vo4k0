const path = require('path');

module.exports = {
	entry: './src/index.js',
	devtool: 'inline-source-map',
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				]
			}
		]
	},
	output: {
		filename: 'script.js',
		path: path.resolve(__dirname, 'dist'),
	},
};