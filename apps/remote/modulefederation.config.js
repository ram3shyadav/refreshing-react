const deps = require("./package.json").dependencies;

module.exports = {
	name: "Remote",
	filename: "remoteEntry.js",
	exposes: {
    "./Button": "./src/components/Button",
  },
	shared: {
		react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
	}
}
