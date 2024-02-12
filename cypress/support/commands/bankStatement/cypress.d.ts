/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable {
		/**
		 * Custom command that get available balance and wrap in the global variable registerAvailableBalance
		 */
		getAvailableBalance(): Chainable<void>;
	}
}
