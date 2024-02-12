import RegisterPageElements from '../elements/registerPageElements';

const registerPageElements = new RegisterPageElements();

export default class RegisterPage {
	fillEmail = (email) => {
		cy.get(registerPageElements.emailInput()).last().type(email);
	};
	fillPassword = (password) => {
		cy.get(registerPageElements.passwordInput()).type(password);
	};
	fillConfirmationPassword = (password) => {
		cy.get(registerPageElements.confirmPasswordInput()).type(password);
	};
	submit = () => {
		cy.get(registerPageElements.submitButton()).click();
	};
}
