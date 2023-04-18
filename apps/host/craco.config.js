const cracoModuleFederation = require('craco-mf');

module.exports = {
	plugins: [
		{
			plugin: cracoModuleFederation,
			options: { useNamedChunkIds:true } //THIS LINE IS OPTIONAL
		}
	],
	output: {
		publicPath: "auto",
	},
	// devServer: {
	// static: {
	//   directory: path.join(__dirname, "../dist"),
	// },
	// hot: true,
	// compress: false,
	// historyApiFallback: false,
	// 	proxy: [
	// 		{
	// 			path: '/footer',
	// 			target: 'https://ram3shyadav-silver-meme-75v9w9jpv7hwrpj-3001.preview.app.github.dev/',
	// 			pathRewrite: {
	// 				'^/footer': ''
	// 		 	},
	// 			changeOrigin: true,
	// 			secure: false
	// 		}
	// 	]
	// },
	webpack: {
	},
	"jest": {
		"setupFilesAfterEnv": ["<rootDir>/src/setupTests.js"],
		"coverageReporters": [
			"text",
			"lcov",
		],
		"coverageThreshold": {
			"global": {
				"branches": 90,
				"functions": 90,
				"lines": 90,
				"statements": 90
			}
		},
	},
	// style: {
	// 	postcss: {
	// 		plugins: [require('tailwindcss'), require('autoprefixer')],
	// 	},
	// },
};
