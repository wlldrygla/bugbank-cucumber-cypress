import * as cucumber from 'cypress-cucumber-preprocessor';

module.exports = (on) => {
	on('file:preprocessor', cucumber());
};
