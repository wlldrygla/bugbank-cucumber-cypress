import InitialPage from '../../support/pageobjects/initialPage';
import RegisterPage from '../../support/pageobjects/registerPage';

const registerPage = new RegisterPage();
const initialPage = new InitialPage();

describe('e2e testing registry on BugBank', () => {
	beforeEach(() => {
		cy.visit('https://bugbank.netlify.app');
	});
	it('should fill the form correctly and save', () => {
		initialPage.acessRegisterPage();
		registerPage.fillEmail('willian.cardoso@gmail.com');
		registerPage.fillName('Willian Drygla');

		registerPage.fillPassword('Senha123@');
		registerPage.fillConfirmationPassword('Senha123@');
		registerPage.submit();
		cy.get('#modalText').should('contain', 'criada com sucesso');	});
});
