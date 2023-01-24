function saveSrc() {
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      // convert image file to base64 string
      preview.src = reader.result as string;
      imgSrc = reader.result as string;
    },
    false
  );

  if (file.files) {
    reader.readAsDataURL(file.files[0]);
  }
}

function fetchRadomUser() {
  fetch("https://randomuser.me/api/?results=8").then((data) => {
    data.json().then((randomUser) => {
      randomUser.results.forEach((user) => {
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

function toggleDisplay(listEle, imgEle) {
  if (listEle.style.display == "flex") {
    listEle.style.display = "none";
    imgEle.style.height = '20vw';
  } else {
     listEle.style.display = "flex";
     imgEle.style.height = '10vw';
     imgEle.style.tranform = 'scale(1)';
  }
}
