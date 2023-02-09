var _cards = getCardsFromStorage();
if (_cards) {
    clubCardsList.push.apply(clubCardsList, _cards);
}
showClubCards(_cards);
