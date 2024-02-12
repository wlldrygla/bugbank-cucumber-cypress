import BankStatementPageElements from '../../elements/bankStatementElements';

const bankStatementElements = new BankStatementPageElements();

Cypress.Commands.add('getAvailableBalance', () => {
	// eslint-disable-next-line cypress/no-unnecessary-waiting
	cy.wait(100); // wait the balance load the value
	cy.get(bankStatementElements.balanceAvailable())
		.invoke('text')
		.then((text) => {
			const value = text.replace('R$', '').replace('.', '').replace(',', '.');
			cy.wrap(Number(value)).as('registerAvailableBalance');
		});
});
