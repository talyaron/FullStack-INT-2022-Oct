class User {
  constructor(
    private gender: string,
    private firstName: string,
    private lastName: string,
    private password: string,
    private userName: string,
    private dateOfBirth: string,
    private phoneNumber: string,
    private location: string,
    private profileImage: string
  ) {}
  getGender() {
    return this.gender;
  }
  getFirstName() {
    return this.firstName;
  }
  getLastName() {
    return this.lastName;
  }
  getPassword() {
    return this.password;
  }
  getUserName() {
    return this.userName;
  }
  getDOB() {
    return this.dateOfBirth;
  }
  getPhoneNum() {
    return this.phoneNumber;
  }
  getLocation() {
    return this.location;
  }
  getProfileImg() {
    return this.profileImage;
  }
}

const userList: User[] = [];
const fetchRadomUser = () =>
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

fetchRadomUser();
setTimeout(() => {
  renderUsers(userList);
}, 300);

const wrapper = document.querySelector(".cardsWrapper") as HTMLDivElement;

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

const form = document.querySelector(".addUserForm") as HTMLFormElement;

form.addEventListener("submit", handleSubmit);

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

  renderUsers(userList);
  preview.src = "";
}

const file = document.querySelector("input[type=file]") as HTMLInputElement;
let imgSrc = "";
const preview = document.querySelector(".preview") as HTMLImageElement;
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
