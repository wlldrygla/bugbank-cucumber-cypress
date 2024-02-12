module.exports = {
	plugins: ['cypress'],
	rules: {
		'cypress/no-pause': 'error',
	},
	extends: ['plugin:cypress/recommended'],
};
