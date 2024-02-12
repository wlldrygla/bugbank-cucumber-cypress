import InitialPage from '../pageobjects/initialPage';
import RegisterPage from '../pageobjects/registerPage';
import FormBasics from '../types/form';

const initialPage = new InitialPage();
const registerPage = new RegisterPage();

export class RegisterPageFlows {
	acessInitialPage() {
		initialPage.acessRegisterPage();
	}

	fillForm(formBasics: FormBasics) {
		registerPage.fillEmail(formBasics.email);
		registerPage.fillName(formBasics.name);
		registerPage.fillPassword(formBasics.password);
		registerPage.fillConfirmationPassword(formBasics.confirmPassword);

		formBasics.balance ? registerPage.toggleBalance() : undefined;
	}

	submitForm() {
		registerPage.submit();
	}
}
