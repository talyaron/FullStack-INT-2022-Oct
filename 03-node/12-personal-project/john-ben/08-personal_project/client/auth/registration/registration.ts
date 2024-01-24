const handleRegistration = () => {
	const usernameInput = document.getElementById(
		"username-field"
	) as HTMLInputElement;

	const passwordInput = document.getElementById(
		"password-field"
	) as HTMLInputElement;

	if (!usernameInput || !passwordInput) return;

	const username = usernameInput.value;
	const password = passwordInput.value;

	if (!username || !password) return null;

	try {
		return fetch("http://localhost:3010/api/auth/register", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});
	} catch (error) {
		console.error(error);
	}
};
