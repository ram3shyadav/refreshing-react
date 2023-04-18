const deps = require("./package.json").dependencies;

module.exports = {
	name: "Host",
	filename: "remoteEntry.js",
	remotes: {
		Remote: `Remote@/footer/remoteEntry.js`,
	},
	shared: {
		react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
			strc
      requiredVersion: deps["react-dom"],
    },
	}
}
