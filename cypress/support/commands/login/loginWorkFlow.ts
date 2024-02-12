import InitialPageElements from '../../elements/loginPageElements';

const initialPageElements = new InitialPageElements();

Cypress.Commands.add('fillLoginForm', (email: string, password: string) => {
	cy.get(initialPageElements.emailInput()).first().type(email, { force: true });
	cy.get(initialPageElements.passwordInput())
		.first()
		.type(password, { force: true });
});

Cypress.Commands.add('submitLoginForm', () => {
	cy.get(initialPageElements.submitButton()).first().click({ force: true });
});
