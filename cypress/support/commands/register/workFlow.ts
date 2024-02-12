import InitialPage from '../../pageobjects/initialPage';
import RegisterPage from '../../pageobjects/registerPage';
import FormBasics from '../../types/form';

const initialPage = new InitialPage();
const registerPage = new RegisterPage();

Cypress.Commands.add('acessRegisterPage', () => {
	initialPage.acessRegisterPage();
});

Cypress.Commands.add('fillRegisterForm', (formBasics: FormBasics) => {
	registerPage.fillEmail(formBasics.email);
	registerPage.fillName(formBasics.name);
	registerPage.fillPassword(formBasics.password);
	registerPage.fillConfirmationPassword(formBasics.confirmPassword);

	formBasics.balance ? registerPage.toggleBalance() : undefined;
});

Cypress.Commands.add('submitRegisterForm', () => {
	registerPage.submit();
});
