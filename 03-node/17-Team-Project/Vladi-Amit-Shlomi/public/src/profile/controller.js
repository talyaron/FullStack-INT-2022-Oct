"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function handleGetUserDetails() {
    try {
        fetch("/api/v1/users/getUser")
            .then((res) => res.json())
            .then(({ user }) => {
            renderPageHeader(user);
            renderPersonalDetailsBar(user);
            if (user.userRole === "admin") {
                renderAllUsersWrapper();
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleEditUserDetails() {
    try {
        const _personalDetailsPropertiesRoot = document.querySelectorAll(".personalDetailsWrapper__detailsBox__detail__property");
        if (!_personalDetailsPropertiesRoot)
            throw new Error("personalDetailsPropertiesRoot not found on DOM");
        const personalDetailsPropertiesRoot = Array.from(_personalDetailsPropertiesRoot);
        personalDetailsPropertiesRoot.map((prop) => {
            prop.contentEditable = "true";
            prop.style.color = "blue";
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleSaveEditUserDetails() {
    try {
        const firstNameRoot = document.querySelector("#firstNameRoot");
        if (!firstNameRoot)
            throw new Error("firstNameRoot not found on DOM");
        const lastNameRoot = document.querySelector("#lastNameRoot");
        if (!lastNameRoot)
            throw new Error("lastNameRoot not found on DOM");
        const genderRoot = document.querySelector("#genderRoot");
        if (!genderRoot)
            throw new Error("genderRoot not found on DOM");
        const userNameRoot = document.querySelector("#userNameRoot");
        if (!userNameRoot)
            throw new Error("userNameRoot not found on DOM");
        const emailRoot = document.querySelector("#emailRoot");
        if (!emailRoot)
            throw new Error("emailRoot not found on DOM");
        const personalDetailsPropertiesRoot = [];
        personalDetailsPropertiesRoot.push(firstNameRoot, lastNameRoot, genderRoot, userNameRoot, emailRoot);
        const firstName = firstNameRoot.innerText;
        const lastName = lastNameRoot.innerText;
        const gender = genderRoot.innerText;
        const userName = userNameRoot.innerText;
        const email = emailRoot.innerText;
        fetch("/api/v1/users/getUser")
            .then((res) => res.json())
            .then(({ user }) => {
            const userId = user._id;
            fetch("/api/v1/users/updateUser", {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId,
                    firstName,
                    lastName,
                    gender,
                    userName,
                    email,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                if (data.errorMessage) {
                    alert(data.errorMessage);
                }
                else {
                    personalDetailsPropertiesRoot.map((prop) => {
                        prop.contentEditable = "false";
                        prop.style.color = "black";
                    });
                }
            });
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleLogout() {
    try {
        fetch("/api/v1/users/userLogout")
            .then(() => (window.location.href = "/"))
            .catch((error) => console.error(error));
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetAllSimpleUsers() {
    try {
        fetch("/api/v1/users/getAllSimpleUsers")
            .then((res) => res.json())
            .then(({ users }) => {
            renderAllSimpleUsers(users);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleEditUserDetailsByAdmin(userId) {
    try {
        const editableUserDataRootArray = catchEditbaleUserDetailsRoots(userId);
        if (!editableUserDataRootArray)
            throw new Error("editableUserDataRootArray not found");
        editableUserDataRootArray.map((prop) => {
            prop.contentEditable = "true";
            prop.style.color = "gold";
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleSaveEditUserDetailsByAdmin(userId) {
    try {
        const editableUserDataRootArray = catchEditbaleUserDetailsRoots(userId);
        if (!editableUserDataRootArray)
            throw new Error("editableUserDataRootArray not found");
        const EmailInHeaderRoot = document.querySelector(`#emailInHeaderRoot-${userId}`);
        if (!EmailInHeaderRoot)
            throw new Error("EmailInHeaderRoot not found on DOM");
        const firstName = editableUserDataRootArray[0].innerText;
        const lastName = editableUserDataRootArray[1].innerText;
        const userName = editableUserDataRootArray[2].innerText;
        const gender = editableUserDataRootArray[3].innerText;
        const email = editableUserDataRootArray[4].innerText;
        fetch("/api/v1/users/updateUserByAdmin", {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId,
                firstName,
                lastName,
                gender,
                userName,
                email,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
            if (data.errorMessage) {
                alert(data.errorMessage);
            }
            else {
                editableUserDataRootArray.map((prop) => {
                    prop.contentEditable = "false";
                    prop.style.color = "black";
                    EmailInHeaderRoot.innerText = email;
                });
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteUserByAdmin(userId) {
    try {
        fetch("/api/v1/users/deleteUser", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId }),
        })
            .then((res) => res.json())
            .then(({ users }) => {
            renderAllSimpleUsers(users);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleSearchUsers() {
    try {
        const userInput = document.querySelector("#userSearchInput");
        if (!userInput)
            throw new Error("userInput not found on DOM");
        const noResultsRoot = document.querySelector("#noResultsRoot");
        if (!noResultsRoot)
            throw new Error("noResultsRoot not found on DOM");
        const userInputValue = userInput.value.toLocaleLowerCase();
        fetch("/api/v1/users/searchUser", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userInputValue }),
        })
            .then((res) => res.json())
            .then(({ users }) => {
            if (users.length !== 0) {
                renderAllSimpleUsers(users);
                noResultsRoot.innerHTML = "";
            }
            else {
                noResultsRoot.innerHTML = `<span> Sorry, <b>${userInputValue}</b> was not found on data base </span>`;
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function loadUserGames() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const gamesFromDB = yield fetch("api/v1/games/getUserGames")
                .then((res) => res.json())
                .then(({ games }) => games)
                .catch((err) => console.error(err));
            const middleImage = document.querySelector(".middleImage");
            const names = gamesFromDB.map((game) => `<div class="game" id="${game._id}">${game.players
                .map((player) => player.name)
                .join(", ")}</div>`);
            savedGamesBtn.addEventListener("click", () => {
                savedGamesWindow.innerHTML = names.join("");
                const divGames = savedGamesWindow.querySelectorAll(".game");
                divGames.forEach((game) => game.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                    const findGame = gamesFromDB.find((obj) => obj._id === game.id);
                    yield fetch("api/v1/games/saveGameCookie", {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ gameId: findGame._id }),
                    }).catch((error) => console.error(error));
                    location.href = "/game";
                })));
            });
        }
        catch (error) {
            console.error(error);
        }
    });
}
