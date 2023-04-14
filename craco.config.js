module.exports = {
	webpack: {
		configure: (webpackConfig, { env, paths }) => {
			return webpackConfig;
		},
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
