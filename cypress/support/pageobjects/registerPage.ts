import RegisterPageElements from '../elements/registerPageElements';

const registerPageElements = new RegisterPageElements();
/**
 * TO DO:
 * - Remove the force in the types and click
 * - Because of the elemente rotation, cypress don't type on the element
 */
export default class RegisterPage {
	fillEmail = (email) => {
		cy.get(registerPageElements.emailInput())
			.last()
			.type(email, { force: true });
	};
	fillName = (name) => {
		cy.get(registerPageElements.nameInput()).last().type(name, { force: true });
	};
	fillPassword = (password) => {
		cy.get(registerPageElements.passwordInput())
			.last()
			.type(password, { force: true });
	};
	fillConfirmationPassword = (password) => {
		cy.get(registerPageElements.confirmPasswordInput())
			.first()
			.type(password, { force: true });
	};

	toggleBalance = () => {
		cy.get(registerPageElements.addBalanceSwitch()).click({ force: true });
	};
	submit = () => {
		cy.get(registerPageElements.submitButton()).last().click({ force: true });
	};
}
