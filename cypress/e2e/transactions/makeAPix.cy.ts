const testEmail = 'willian.cardoso@automated-tests.com';
const testPassword = 'Senha123@';
const initialBalance = 100000;

describe('e2e testing transfer', () => {
	it('should make a basic transfer', () => {
		cy.visit('', {
			onBeforeLoad(win) {
				win.localStorage.setItem(
					testEmail,
					`{"name":"Will Test","email":"${testEmail}","password":"${testPassword}","accountNumber":"636-0","balance":${initialBalance},"logged":false}`
				);
			},
		});

		cy.fillLoginForm(testEmail, testPassword);

		cy.submitLoginForm();
	});
});
