function saveSrc() {
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // convert image file to base64 string
      preview.src = reader.result;
      imgSrc = reader.result;
    },
    false
  );

  if (file.files[0]) {
    reader.readAsDataURL(file.files[0]);
  }
}

function fetchRadomUser() {
  fetch("https://randomuser.me/api/?results=8").then((data) => {
    data.json().then((randomUser) => {
      randomUser.results.forEach((user) => {
        // const gender = user.gender;
        // const firstName = user.name.first;
        // const lastName = user.name.last;
        // const password = user.login.password;
        // const userName = user.login.username;
        // const dateOfBirth = user.dob.date.slice(0, 10);
        // const phoneNumber = user.cell;
        // const location = user.location.country;
        // const profileImage = user.picture.large;
        const randomUser = new User(
          user.gender,
          user.name.first,
          user.name.last,
          user.login.password,
          user.login.username,
          user.dob.date.slice(0, 10),
          user.cell,
          user.location.country,
          user.picture.large
        );
        userList.push(randomUser);
      });
    });
  });
}
