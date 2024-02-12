describe('e2e testing registry on BugBank', () => {
	beforeEach(() => {
		cy.visit('https://bugbank.netlify.app');
	});
	it('should create an account with balance and save', () => {
		cy.acessRegisterPage();

		cy.fillRegisterForm({
			email: 'willian.cardoso@automatedtests.com',
			name: 'Willian Tests',
			password: 'Senha123@',
			confirmPassword: 'Senha123@',
			balance: true,
		});
		cy.submitRegisterForm();
		cy.get('#modalText').should('contain', 'criada com sucesso');
	});
});
