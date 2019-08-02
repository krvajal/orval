const path = require('path')


const babelConfig = {
	plugins: [
		['transform-react-jsx'],
    	["babel-plugin-jsx-pragmatic", {
      		module: "react",
      		import: "React"
    	}],
	]

}

module.exports = {
	entry: {
		main: path.join(__dirname, 'src/index.js')
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /.js$/,
				use: {
					loader: 'babel-loader',
					options: babelConfig
				}
			},
			{
				test: /\.twig$/,
				use: [
					{
						loader: 'babel-loader',
						options: babelConfig
					},
					{
						loader: 'melody-loader',
						options: {
							plugins: ['jsx']
						}
					}]
			}
		]
	},
	mode: "development",
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		watchOptions: {
			ignored: /node_modules/,
		},
		overlay: false,
	}
};
