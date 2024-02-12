import FormBasics from '../../types/form';
import InitialPageElements from '../../elements/loginPageElements';
import RegisterPageElements from '../../elements/registerPageElements';

const initialPageElements = new InitialPageElements();
const registerPageElements = new RegisterPageElements();

Cypress.Commands.add('acessRegisterPage', () => {
	cy.get(initialPageElements.newAccountButton()).click();
});

Cypress.Commands.add('fillRegisterForm', (formBasics: FormBasics) => {
	cy.get(registerPageElements.emailInput())
		.last()
		.type(formBasics.email, { force: true });

	cy.get(registerPageElements.nameInput())
		.last()
		.type(formBasics.name, { force: true });

	cy.get(registerPageElements.passwordInput())
		.last()
		.type(formBasics.password, { force: true });

	cy.get(registerPageElements.confirmPasswordInput())
		.first()
		.type(formBasics.confirmPassword, { force: true });
	formBasics.balance
		? cy.get(registerPageElements.addBalanceSwitch()).click({ force: true })
		: undefined;
});

Cypress.Commands.add('submitRegisterForm', () => {
	cy.get(registerPageElements.submitButton()).last().click({ force: true });
});
