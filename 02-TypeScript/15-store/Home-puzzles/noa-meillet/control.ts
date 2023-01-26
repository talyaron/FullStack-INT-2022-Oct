function addUser(ev) {
  try {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const adress = ev.target.elements.adress.value;
    const email = ev.target.elements.email.value;
    const dateOfBirth = ev.target.elements.birthday.value;
    const phonePrefix = ev.target.elements.phonePrefix.valueAsNumber;
    const phoneNumber = ev.target.elements.phone.valueAsNumber;
    const color = ev.target.elements.preferedColor.value;
    const image = ev.target.elements.image.value;

    usersArr.push(
      new UserProfile(
        name,
        adress,
        email,
        dateOfBirth,
        phonePrefix,
        phoneNumber,
        color,
        image
      )
    );
    console.log (usersArr);
    showUsers(usersArr);
    ev.target.reset();
  } catch (error) {
    console.error(Error);
  }
}

function showUsers(usersArr){
    try {
        if (users && usersArr.length > 0) {
            users.innerHTML=``;
            for (let i = 0; i < usersArr.length; i++) {
              users.innerHTML += `<div class= "users__user">
                      <img class="users__user__detail" id="image" src='${usersArr[i].image}' alt="image"/>
                      <h2 class="users__user__detail" id="userName">${usersArr[i].name}</h2>
                      <h5 class="users__user__detail" id="userAdress">${usersArr[i].adress}</h5>
                      <h5 class="users__user__detail" id="userEmail">${usersArr[i].email}</h5>
                      <h5 class="users__user__detail" id="userDateOfBirth">${usersArr[i].dateOfBirth}</h5>
                      <h5 class="users__user__detail" id="userPhonePrefix">${usersArr[i].phonePrefix}</h5>
                      <h5 class="users__user__detail" id="userPhoneNumber">${usersArr[i].phoneNumber}</h5>
                      </div>`;
            }
          } else {
            throw new Error(`there are no users in the system`);
          }
        } catch (error) {
          console.error(error);
          return false;
        }
}
