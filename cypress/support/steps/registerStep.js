const { default: InitialPage } = require("../pageobjects/initialPage");
const { default: RegisterPage } = require("../pageobjects/registerPage");

const initialPage = new InitialPage();
const registerPage = new RegisterPage();

Given("the user is on the bank website registration page", () => {
	initialPage.visitBaseUrl();
	initialPage.acessRegisterPage();
});

When(
	"the user fills out the registration form with valid information and submits the form",
	() => {
		registerPage.fillEmail("willian.cardoso@gmail.com");
		registerPage.fillPassword("Senha123@");
		registerPage.fillConfirmationPassword("Senha123@");
		registerPage.submit();
	}
);
Then("the user should receive a confirmation message", () => {
	initialPage.validateModalText("criada com sucesso");
});
