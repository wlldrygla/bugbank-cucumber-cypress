export default class TransferPageElements {
	inputAccountNumber = () => {
		return 'input[name="accountNumber"]';
	};

	inputAccountDigit = () => {
		return 'input[name="digit"]';
	};

	inputValue = () => {
		return 'input[name="transferValue"]';
	};

	inputDescription = () => {
		return 'input[name="description"]';
	};

	submitTransferButton = () => {
		return 'button[type="submit"]';
	};
}
