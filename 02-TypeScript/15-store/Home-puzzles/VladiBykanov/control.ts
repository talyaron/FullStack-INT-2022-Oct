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
  const gender = e.target.elements.gender.value;
  const firstName = e.target.elements.firstName.value;
  const lastName = e.target.elements.lastName.value;
  const password = e.target.elements.password.value;
  const userName = e.target.elements.userName.value;
  const dob = e.target.elements.dob.value;
  const phone = e.target.elements.phone.value;
  const location = e.target.elements.location.value;
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
