var form = document.querySelector(".form");
var link = document.querySelector("#link_to_main");
var clubCards = document.querySelector(".club_cards");
function getUsersFromStorage() {
    try {
        var usersString = localStorage.getItem("users");
        if (!usersString)
            throw new Error("Couldn't find users in storage");
        var users = JSON.parse(usersString);
        return users;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
function getCardsFromStorage() {
    try {
        localStorage.setItem("cards", JSON.stringify(clubCardsList));
        var cardsString = localStorage.getItem("cards");
        if (!cardsString)
            throw new Error("Couldn't find cards in storage");
        var cards = JSON.parse(cardsString);
        return cards;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
