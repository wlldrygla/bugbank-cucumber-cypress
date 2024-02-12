/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable {
		fillTransferMoneyForm(
			accountNumber,
			AccountDigit,
			value,
			description?
		): Chainable<void>;

		submitTransfer(): Chainable<void>;
	}
}
