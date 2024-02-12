import InitialPage from '../../pageobjects/loginPage';

const initialPage = new InitialPage();

Cypress.Commands.add('fillLoginForm', (email: string, password: string) => {
	initialPage.fillLoginForm(email, password);
});

Cypress.Commands.add('submitLoginForm', () => {
	initialPage.submitLoginForm();
});
