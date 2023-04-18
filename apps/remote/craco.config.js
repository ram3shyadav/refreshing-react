const cracoModuleFederation = require('craco-mf');

module.exports = {
	plugins: [
		{
			plugin: cracoModuleFederation,
			options: { useNamedChunkIds:true } //THIS LINE IS OPTIONAL
		}
	],
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
