var renderHeader = function () {
    var header = document.createElement("div");
    header.className = "header";
    var navbar = document.createElement("ul");
    navbar.className = "navbar";
    var homeItem = document.createElement("li");
    var homeLink = document.createElement("a");
    homeLink.href = "http://localhost:3010/";
    homeLink.textContent = "Home";
    homeItem.appendChild(homeLink);
    navbar.appendChild(homeItem);
    var loginItem = document.createElement("li");
    var loginLink = document.createElement("a");
    loginLink.href = "http://localhost:3010/auth/login/";
    loginLink.textContent = "Login";
    loginItem.appendChild(loginLink);
    navbar.appendChild(loginItem);
    var registrationItem = document.createElement("li");
    var registrationLink = document.createElement("a");
    registrationLink.href = "http://localhost:3010/auth/registration/";
    registrationLink.textContent = "Registration";
    registrationItem.appendChild(registrationLink);
    navbar.appendChild(registrationItem);
    var historyItem = document.createElement("li");
    var historyLink = document.createElement("a");
    historyLink.href = "http://localhost:3010/history/";
    historyLink.textContent = "History";
    historyItem.appendChild(historyLink);
    navbar.appendChild(historyItem);
    header.appendChild(navbar);
    var body = document.getElementsByTagName("body")[0];
    if (!body) {
        throw new Error("Could not find body element in the DOM");
    }
    var firstChild = body.firstChild;
    if (firstChild) {
        body.insertBefore(header, firstChild);
    }
    else {
        body.appendChild(header);
    }
};
renderHeader();
