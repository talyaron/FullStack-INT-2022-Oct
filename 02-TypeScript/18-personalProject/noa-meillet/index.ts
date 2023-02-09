const _cards = getCardsFromStorage();
if (_cards) {
    clubCardsList.push(..._cards);
}
showClubCards(_cards);