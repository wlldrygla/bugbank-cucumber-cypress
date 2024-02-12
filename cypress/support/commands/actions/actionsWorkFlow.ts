import ActionsPageElements from '../../elements/actionsPageElements';

const actionsPageElements = new ActionsPageElements();

Cypress.Commands.add('enterTransferMenu', () => {
	cy.get(actionsPageElements.transferButton()).click();
});

Cypress.Commands.add('enterBankStatement', () => {
	cy.get(actionsPageElements.bankStatementButton()).click();
});
