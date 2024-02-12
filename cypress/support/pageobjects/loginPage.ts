import InitialPageElements from '../elements/loginPageElements';

const initialPageElements = new InitialPageElements();

export default class InitialPage {
	acessRegisterPage() {
		cy.get(initialPageElements.newAccountButton()).click();
	}

	validateModalText(text) {
		cy.get(initialPageElements.modalText()).should('contain', text);
	}

	fillLoginForm(email: string, password: string) {
		cy.get(initialPageElements.emailInput())
			.first()
			.type(email, { force: true });
		cy.get(initialPageElements.passwordInput())
			.first()
			.type(password, { force: true });
	}

	submitLoginForm() {
		cy.get(initialPageElements.submitButton()).first().click({ force: true });
	}
}
