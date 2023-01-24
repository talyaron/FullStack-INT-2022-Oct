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
const getRndUser = (n: number) => {
  try {
    const fetchRadomUser = fetch(`https://randomuser.me/api/?results=${n}`);
    fetchRadomUser.then((data) => {
      data.json().then((randomUser) => {
        //   console.log(randomUser.results);
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
          console.log(userList);
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
};

// console.table(userList);

const wrapper = document.querySelector(".cardsWrapper") as HTMLDivElement;

function renderUsers(arr: User[]) {
  getRndUser(5);
  arr.forEach((user) => {
    const userCard = document.createElement("div") as HTMLDivElement;
    userCard.classList.add("cardsWrapper__userCard");
    userCard.innerHTML = `<img src="https://randomuser.me/api/portraits/men/75.jpg" alt="" />
    <ul>
    <li>Gender: <span>Male</span></li>
    <li>First Name: <span>Vladislav</span></li>
    <li>Last Name: <span>Bykanov</span></li>
    <li>
      Password: <span>************</span
      ><button id="passBtn">Show</button>
    </li>
    <li>User Name: <span>vladbyk89</span></li>
    <li>Date Of Birth: <span>19-11-1989</span></li>
    <li>Phone Number: <span>054-8155-232</span></li>
    <li>Location: <span>The Netherlands</span></li>
  </ul>
  `;
    wrapper.appendChild(userCard);
    // const img = new Image();
    // const ulEle = document.createElement("ul") as HTMLUListElement;
    // const li = document.createElement("li") as HTMLLIElement;
    // const span = document.createElement("span") as HTMLSpanElement;
    // li.textContent = user[0];
  });
}

console.log('End of TS');
