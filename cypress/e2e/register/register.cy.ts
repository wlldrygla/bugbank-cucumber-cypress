import { RegisterPageFlows } from '../../support/workFlows/registerFlows';

const registerFlows = new RegisterPageFlows();

describe('e2e testing registry on BugBank', () => {
	beforeEach(() => {
		cy.visit('https://bugbank.netlify.app');
	});
	it('should create an account with balance and save', () => {
		registerFlows.acessInitialPage();
		registerFlows.fillForm({
			email: 'willian.cardoso@automatedtests.com',
			name: 'Willian Tests',
			password: 'Senha123@',
			confirmPassword: 'Senha123@',
			balance: true,
		});
		registerFlows.submitForm();
		cy.get('#modalText').should('contain', 'criada com sucesso');
	});
});
