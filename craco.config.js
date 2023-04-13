module.exports = {
	webpack: {
		configure: (webpackConfig, { env, paths }) => {
			return webpackConfig;
		},
	},
	// style: {
	// 	postcss: {
	// 		plugins: [require('tailwindcss'), require('autoprefixer')],
	// 	},
	// },
};
