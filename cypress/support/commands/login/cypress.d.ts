/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable {
		fillLoginForm(email: string, password: string): Chainable<void>;

		submitLoginForm(): Chainable<void>;
	}
}
