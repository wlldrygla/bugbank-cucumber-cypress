/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable {
		acessRegisterPage(): Chainable<void>;

		fillRegisterForm: (formBasics) => Chainable<void>;

		submitRegisterForm: () => Chainable<void>;
	}
}
