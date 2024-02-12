/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable {
		enterTransferMenu(): Chainable<void>;
		enterBankStatement(): Chainable<void>;
	}
}
