let userLogin: User;
function goToUserProfile(event): void {
  try {
    event.preventDefault();
    const userId = event.target.elements.userId.value;
    const password = event.target.elements.userPassword.value;
    if (!usersList)
      throw new Error(
        `We don't have any users that have an account to our site`
      );
    const user: User | undefined = usersList.find(
      (user) => user.userId == userId
    );
    if (!user) {
      alert(
        `We can't find an account that match to your ID number... You can create an account :)`
      );
    } else if (password != user.userPassword) {
      alert(
        `${user.userFullName} the password don't match to your ID number... Try again`
      );
    } else {
      if (!link) throw new Error(`We don't have any element to add your user`);
      userLogin = user;
      link.click();
    }
  } catch (error) {
    console.error(`something don't work with the log in function`);
  }
}

function btnAdd() {
  try {
    if (!addUserDiv)
      throw new Error(`We don't have any element to add your user`);
    addUserDiv.innerHTML = `
      <input type="text" name="newUserId" class="input" placeholder="Enter your ID number" required/>
      <br />
      <input type="password" name="newUserPassword" class="input" placeholder="Enter your password" required/>
      <br />
      <input type="text" name="newUserFullName" class="input" placeholder="Enter your full name           " required/>
      <br />
      <lable>Enter your date of birth:</lable> 
      <br />
      <input type="date" name="newUserDateOfBirth" class="input" required/>
      <br />
      <input type="email" name="newUserEmail" class="input" placeholder="Enter your email" required/>
      <br />
      <input type="text" name="newUserphone" class="input" placeholder="Enter your phone number" required/>
      <br />
      <input type="submit" value="Sign in" />
  `;
  } catch (error) {
    console.error(`The form to add users hav a problem`);
  }
}

function addUser(event) {
  try {
    event.preventDefault();
    const newUserId = event.target.elements.newUserId.value;
    const newUserPassword = event.target.elements.newUserPassword.value;
    const newUserFullName = event.target.elements.newUserFullName.value;
    const newUserDateOfBirth = event.target.elements.newUserDateOfBirth.value;
    const newUserEmail = event.target.elements.newUserEmail.value;
    const newUserphone = event.target.elements.newUserphone.value;
    usersList.push(
      new User(
        newUserId,
        newUserPassword,
        newUserFullName,
        newUserDateOfBirth,
        newUserEmail,
        newUserphone
      )
    );
  } catch (error) {
    console.error(`we didnt succeed to add the new user`);
  }
}

function showClubCards() {
  try {
    if (!userLogin) throw new Error(`error loading club cards for user`);
    const userClubCards = clubCardsList.filter(
      (user) => user.userId == userLogin.userId
    );
    if (!clubCards)
      throw new Error(`We don't have a culb cards div to show you your cards`);
    userClubCards.forEach(
      (userCard) =>
        (clubCards.innerHTML += `
  <div class"club_cards_store">
    <h3>${userCard.store?.storeName}</h3>
    <h4>Amount of points ${getAmountOfPoints(
      userCard.store.amountOfPoints,
      userCard.amountOfPoints
    )}</h4>
    <h4>Birthday discount: ${getBirthdayDiscount(
      userCard.store.bdayDscntDuration,
      userLogin.dateOfBirth
    )}
  </div>
  `)
    );
  } catch (error) {
    console.error(`error loading club cards for user`);
  }
}
