const renderHeader = () => {
	const header: HTMLDivElement = document.createElement("div");
	header.className = "header";

	const navbar: HTMLUListElement = document.createElement("ul");
	navbar.className = "navbar";

	const homeItem: HTMLLIElement = document.createElement("li");
	const homeLink: HTMLAnchorElement = document.createElement("a");
	homeLink.href = "http://localhost:3010/";
	homeLink.textContent = "Home";
	homeItem.appendChild(homeLink);
	navbar.appendChild(homeItem);

	const loginItem: HTMLLIElement = document.createElement("li");
	const loginLink: HTMLAnchorElement = document.createElement("a");
	loginLink.href = "http://localhost:3010/auth/login/";
	loginLink.textContent = "Login";
	loginItem.appendChild(loginLink);
	navbar.appendChild(loginItem);

	const registrationItem: HTMLLIElement = document.createElement("li");
	const registrationLink: HTMLAnchorElement = document.createElement("a");
	registrationLink.href = "http://localhost:3010/auth/registration/";
	registrationLink.textContent = "Registration";
	registrationItem.appendChild(registrationLink);
	navbar.appendChild(registrationItem);

	const historyItem: HTMLLIElement = document.createElement("li");
	const historyLink: HTMLAnchorElement = document.createElement("a");
	historyLink.href = "http://localhost:3010/history/";
	historyLink.textContent = "History";
	historyItem.appendChild(historyLink);
	navbar.appendChild(historyItem);

	header.appendChild(navbar);

	const body = document.getElementsByTagName("body")[0];
	if (!body) {
		throw new Error("Could not find body element in the DOM");
	}

	const firstChild = body.firstChild;

	if (firstChild) {
		body.insertBefore(header, firstChild);
	} else {
		body.appendChild(header);
	}
};

renderHeader();
