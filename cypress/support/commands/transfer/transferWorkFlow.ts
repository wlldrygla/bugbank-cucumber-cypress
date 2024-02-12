import TransferPageElements from '../../elements/transferPageElements';

const transferPageElements = new TransferPageElements();

Cypress.Commands.add(
	'fillTransferMoneyForm',
	(
		accountNumber: string,
		accountDigit: string,
		value: string,
		description?: string
	) => {
		cy.get(transferPageElements.inputAccountNumber()).type(accountNumber);
		cy.get(transferPageElements.inputAccountDigit()).type(accountDigit);
		cy.get(transferPageElements.inputValue()).type(value);

		description
			? cy.get(transferPageElements.inputDescription()).type(description)
			: undefined;
	}
);
Cypress.Commands.add('submitTransfer', () => {
	// eslint-disable-next-line cypress/unsafe-to-chain-command
	cy.get(transferPageElements.submitTransferButton()).click();
});
