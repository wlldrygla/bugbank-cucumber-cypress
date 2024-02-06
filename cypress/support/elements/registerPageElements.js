class RegisterPageElements {
	emailInput = () => {
		return 'input[type="email"][name="email"][class="input__default"]';
	};

	passwordInput = () => {
		return 'input[type="password"][name="password"]';
	};
	confirmPasswordInput = () => {
		return 'input[type="password"][name="passwordConfirmation"]';
	};
	submitButton = () => {
		return 'input[type="submit"]';
	};
}

export default RegisterPageElements;
