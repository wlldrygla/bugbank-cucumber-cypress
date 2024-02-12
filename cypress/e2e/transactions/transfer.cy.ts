const sender = {
	email: 'automated.sender@automated-tests.com',
	password: 'Senha123@sender',
	accountNumber: 666,
	accountDigit: 5,
	initialBalance: 100000,
};
const receiver = {
	email: 'automated.receiver@automated-tests.com',
	password: 'Senha123@receiver',
	accountNumber: 637,
	accountDigit: 0,
	initialBalance: 5000,
};

const transferValue = 100;

const expectedTotal = sender.initialBalance - transferValue;

describe('e2e testing transfer', () => {
	beforeEach(() => {
		cy.visit('', {
			onBeforeLoad(win) {
				win.localStorage.setItem(
					sender.email,
					`{"name":"Will Test","email":"${sender.email}","password":"${sender.password}","accountNumber":"${sender.accountNumber}-${sender.accountDigit}","balance":${sender.initialBalance},"logged":false}`
				);
				win.localStorage.setItem(
					receiver.email,
					`{"name":"Will Test","email":"${receiver.email}","password":"${receiver.password}","accountNumber":"${receiver.accountNumber}-${receiver.accountDigit}","balance":${receiver.initialBalance},"logged":false}`
				);
			},
		});
		cy.fillLoginForm(sender.email, sender.password);

		cy.submitLoginForm();
	});
	it('should make a basic transfer', () => {
		cy.enterTransferMenu();

		cy.fillTransferMoneyForm(
			receiver.accountNumber,
			receiver.accountDigit,
			transferValue
		);

		cy.submitTransfer();

		// cy.get('#modalText').should('contain', 'realizada com sucesso');

		cy.visit('/home');

		cy.enterBankStatement();

		cy.getAvailableBalance();

		cy.get('@registerAvailableBalance').should('be.eql', expectedTotal);
	});
});
