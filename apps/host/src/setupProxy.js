const {
	createProxyMiddleware,
} = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		'/footer',
		createProxyMiddleware({
			target: 'https://ram3shyadav-silver-meme-75v9w9jpv7hwrpj-3001.preview.app.github.dev/',
			pathRewrite: {
				'^/footer': ''
			},
			changeOrigin: true,
			secure: false
		})
	);
};
