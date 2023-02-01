function getClubCardsForUser(id) {
    if (clubCardsList.length == 0) {
        console.error("there is no club cards at all");
        return undefined;
    }
    return clubCardsList.filter(function (user) { return user.userId == id; });
}
