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

function toggleDisplay(listElement: HTMLElement, imgElement: HTMLElement) {
  if (listElement.style.display == "flex") {
    listElement.style.display = "none";
    imgElement.style.height = '20vw';
  } else {
     listElement.style.display = "flex";
     imgElement.style.height = '10vw';
     imgElement.style.transform = 'scale(1)';
  }
}

function setImgClick() {
  try {
    setTimeout(() => {
      const imgElements = wrapper.querySelectorAll(
        "img"
      ) as NodeListOf<HTMLElement>;
      imgElements.forEach((ele) =>
        ele.addEventListener("click", () => {
          const target = ele.parentElement;
          const ulEl = target?.querySelector("ul") as HTMLUListElement;
          const img = target?.querySelector("img") as HTMLImageElement;
          toggleDisplay(ulEl, img);
        })
      );
    }, 400);
  } catch (error) {
    console.log(error);
  }
}