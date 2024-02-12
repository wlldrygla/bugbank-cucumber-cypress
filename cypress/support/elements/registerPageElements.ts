class RegisterPageElements {
	emailInput = () => {
		return 'input[name="email"]';
	};
	nameInput = () => {
		return 'input[name="name"]';
	};
	passwordInput = () => {
		return 'input[name="password"]';
	};
	confirmPasswordInput = () => {
		return 'input[type="password"][name="passwordConfirmation"]';
	};
	submitButton = () => {
		return 'button[type="submit"]';
	};
}

export default RegisterPageElements;
