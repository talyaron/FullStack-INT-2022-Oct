class User {
  constructor(
    private gender: string,
    private firstName: string,
    private lastName: string,
    private password: string,
    private userName: string,
    private dateOfBirth: Date,
    private phoneNumber: number,
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
async function fetchTenUsers() {
  try {
    const fetchRadomUser = await fetch(
      "https://randomuser.me/api/?results=10"
    ).then((data) => {
      data.json().then((randomUser) => {
          console.log(randomUser.results);
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
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
}
fetchTenUsers()

const wrapper = document.querySelector(".cardsWrapper") as HTMLDivElement;

function renderUsers(arr: User[]) {
  arr.forEach((user) => {
    const userCard = document.createElement("div") as HTMLDivElement;
    userCard.classList.add("cardsWrapper__userCard");
    userCard.innerHTML = `<img src="${user.getProfileImg()}"/>`;
    wrapper.appendChild(userCard);
    // const img = new Image();
    // const ulEle = document.createElement("ul") as HTMLUListElement;
    // const li = document.createElement("li") as HTMLLIElement;
    // const span = document.createElement("span") as HTMLSpanElement;
    // li.textContent = user[0];
  });
}

// console.log("End of TS");
const form = document.querySelector('.formSection') as HTMLFormElement;

form.addEventListener('submit', handleSubmit)

function handleSubmit(e:Event) {
    e.preventDefault();

    console.log('msg');
}