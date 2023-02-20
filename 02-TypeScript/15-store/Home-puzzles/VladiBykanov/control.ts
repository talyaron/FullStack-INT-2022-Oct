function renderUsers(arr: User[]) {
  wrapper.replaceChildren();
  arr.forEach((user) => {
    const userCard = document.createElement("div") as HTMLDivElement;
    userCard.classList.add("cardsWrapper__userCard");
    userCard.innerHTML = `<img class="userImg" src="${user.getProfileImg()}"/>
      <ul>
      <li>Gender: ${user.getGender()}</li>
      <li>First Name: ${user.getFirstName()}</li>
      <li>Last Name: ${user.getLastName()}</li>
      <li>Password: ${user.getPassword()}</li>
      <li>UserName: ${user.getUserName()}</li>
      <li>Date Of Birth: ${user.getDOB()}</li>
      <li>Phone Number: ${user.getPhoneNum()}</li>
      <li>Location: ${user.getLocation()}</li>
      </ul>`;
    wrapper.appendChild(userCard);
  });
}

function handleSubmit(e) {
  e.preventDefault();
  e.stopPropagation();
  const gender = this.elements.gender.value;
  const firstName = this.elements.firstName.value;
  const lastName = this.elements.lastName.value;
  const password = this.elements.password.value;
  const userName = this.elements.userName.value;
  const dob = this.elements.dob.value;
  const phone = this.elements.phone.value;
  const location = this.elements.location.value;
  const image = imgSrc;
  const arr = [gender, firstName, lastName, password, userName, dob, phone, location, image];
  if(arr.some(ele => ele == '' )) return errMsg.style.display = 'flex'
  const newUser = new User(
    gender,
    firstName,
    lastName,
    password,
    userName,
    dob,
    phone,
    location,
    image
  );
  userList.unshift(newUser);

  // adding new user to the screen
  renderUsers(userList);
  // reinitializing img click
  setImgClick();
  //clearing form
  preview.src = "";
  e.target.reset();
}
