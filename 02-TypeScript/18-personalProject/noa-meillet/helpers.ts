function getClubCardsForUser(id:string):ClubCards[] | undefined{
  if (clubCardsList.length==0){
    console.error("there is no club cards at all")
    return undefined;
  }
  return clubCardsList.filter(user => user.userId == id);
}