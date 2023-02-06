showClubCards(clubCardsList);
const _cards = getCardsFromStorage();
if (_cards) {
    clubCardsList.push(..._cards);
}