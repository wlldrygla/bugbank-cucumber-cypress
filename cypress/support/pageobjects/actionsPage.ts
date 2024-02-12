import ActionsPageElements from '../elements/actionsPageElements';

const actionsPageElements = new ActionsPageElements();

export default class ActionsPage {
	transferCash() {
		cy.get(actionsPageElements.transferButton()).click();
	}
}
