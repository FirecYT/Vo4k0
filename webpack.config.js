const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: './src/index.js',
	devtool: 'inline-source-map',
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	plugins: [new MiniCssExtractPlugin({
		filename: "style.css"
	})],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
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