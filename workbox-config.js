module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{png,zip,css,js,json,html,webmanifest,svg}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};