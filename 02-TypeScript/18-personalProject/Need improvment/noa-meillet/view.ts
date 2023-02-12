const form: HTMLDivElement | null = document.querySelector(".form");
const link: HTMLAnchorElement | null = document.querySelector("#link_to_main");
const clubCards: HTMLDivElement | null = document.querySelector(".club_cards");

function getUsersFromStorage(): User[] | undefined {
  try {
    const usersString = localStorage.getItem("users");
    if (!usersString) throw new Error("Couldn't find users in storage");
    const users = JSON.parse(usersString);
    return users;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function getCardsFromStorage():ClubCards[] | undefined{
  try {
    localStorage.setItem("cards", JSON.stringify(clubCardsList));
    const cardsString = localStorage.getItem("cards");
    if (!cardsString) throw new Error("Couldn't find cards in storage");
    const cards = JSON.parse(cardsString);
    return cards;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
