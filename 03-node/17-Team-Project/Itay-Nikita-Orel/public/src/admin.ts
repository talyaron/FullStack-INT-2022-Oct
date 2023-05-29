const totalGamesPlayedFill: HTMLElement = document.getElementById(
  "totalGamesPlayedFill"
)!; // Fill Total Games Number
const versionFill: HTMLElement = document.getElementById("versionFill")!; // Fill Version Number

const onLoad = () => {
  try {
    renderTowerList()
    renderEnemyList();
    renderUserList();
    FillAdminName();
    getTotalGamesPlayed();
    FillRegisteredUsers();
  } catch (error) {}
};

// View

function renderCreateTowerSection(): string {
  try {
    const html = `
    <div onclick="handleClickCloseCollapseContainer()" id="closeIcon" class="collapse-container__close">
    <i class="fa-solid fa-xmark"></i>
</div>
<h2 class="collapse-container__title">create Tower</h2>
<form class="collapse-container__form" onsubmit="handleSubmitCreateTower(event)">

    <div>
        <label for="name" >Name</label>
        <input type="text" name="name" id="name" >
    </div>
    <div>
        <label for="image" >Image</label>
        <input type="text" name="image" id="image">
    </div>
    <div>
        <label for="damage" >Damage</label>
        <input type="number" name="damage" id="damage" >
    </div>
    <div>
        <label for="radius" > Radius</label>
        <input type="number" name="radius" min="0" max="100" >
    </div>
    <div>
        <label for="cost" > Cost</label>
        <input type="number" name="cost" id="cost" >
    </div>
    <div>
        <label for="level" >Level</label>
        <input type="number" name="level" id="level" >
    </div>
    <button type="submit">Create Now</button>
</form>`;
    return html;
  } catch (error) {
    console.error(error);
    return "We Have A Problem Here";
  }
}
function renderCreateEnemySection(): string {
  try {
    const html = `
    <div onclick="handleClickCloseCollapseContainer()" id="closeIcon" class="collapse-container__close">
    <i class="fa-solid fa-xmark"></i>
</div>
<h2 class="collapse-container__title">Create Enemy</h2>
<form class="collapse-container__form" onsubmit="handleSubmitCreateEnemy(event)">

    <div>
        <label for="name" >Name</label>
        <input type="text" name="name" id="name">
    </div>
    <div>
    <label for="health" >Health</label>
    <input type="number" name="health" id="health">
    </div>
    <div>
        <label for="type" >Image</label>
        <input type="text" name="image" id="type">
    </div>
    <button type="submit">Create Now</button>
</form>`;
    return html;
  } catch (error) {
    console.error(error);
    return "We Have A Problem Here";
  }
}
function renderCreateUserSection(): string {
  try {
    const html = `
    <div onclick="handleClickCloseCollapseContainer()" id="closeIcon" class="collapse-container__close">
    <i class="fa-solid fa-xmark"></i>
</div>
<h2 class="collapse-container__title">Create User</h2>
<form class="collapse-container__form" onsubmit="handleSubmitCreateUser(event)">

    <div>
        <label for="firstName" >First Name</label>
        <input type="text" name="firstName" id="firstName">
    </div>
    <div>
        <label for="lastName" >Last Name</label>
        <input type="text" name="lastName" id="lastName">
    </div>
    <div>
        <label for="username" > Username</label>
        <input type="text" name="username" id="username">
    </div>
    <div>
        <label for="email" >Email</label>
        <input type="text" name="email" id="email">
    </div>
    <div>
        <label for="password" >Password</label>
        <input type="text" name="password" id="password">
    </div>
    <div>
        <label for="cPassword" >Confirm Password</label>
        <input type="text" name="cPassword" id="cPassword">
    </div>
    <div>
        <label for="role" >ROLE</label>
       <select id="role" name="role">
       <option value="public" >Public</option>
       <option value="admin" >Admin</option>
       </select>
    </div>
    <div id="adminNotificationRoot"></div>
    <button type="submit">Create Now</button>
</form>`;
    return html;
  } catch (error) {
    console.error(error);
    return "We Have A Problem Here";
  }
}

// RENDER USERS LIST
async function renderUserList() {
  try {
    const rootUsersDetail: HTMLElement =
      document.getElementById("rootUsersDetail")!;
    const dataJs = await fetch("/api/users/get-users");
    if (!dataJs) throw new Error("no found dataJs");
    const data = await dataJs.json();
    if (data.ok === false){
      rootUsersDetail.innerHTML = "N/A";
    } else {

      const { users } = data;
      const html = users
        .map((user) => {
          return `
              <li class="container__main__container-middle__list">
              <div>
                  <h5>Username</h5>
                  <span id="rootNameUser">${user.userName}</span>
              </div>
              <div>
                  <h5>Email</h5>
                  <span id="rootNameUser">${user.email}</span>
              </div>
              <div>
                  <h5>Role</h5>
                  <span id="rootNameUser">${user.ROLE}</span>
              </div>
              <div>
                  <button onclick="handleClickDelUser('${user._id}')">
                      <i class="fa-solid fa-trash-can"></i>
                  </button>
              </div>
          </li>
  
              `;
        })
        .join("");
      rootUsersDetail.innerHTML = html;
    }
  } catch (error) {
    console.error(error);
  }
}
//RENDER TOWER LISTS
async function renderTowerList() {
  try {
    const rootTowersDetail: HTMLElement =
      document.getElementById("rootTowersDetail")!;
    const dataJs = await fetch("/api/tower/get-towers");
    if (!dataJs) throw new Error("no found dataJs");
    const data = await dataJs.json();
    if (data.ok === false){
      rootTowersDetail.innerHTML = "N/A";
    } else {
      const { towerDB } = data;
      const html = towerDB
        .map((tower) => {
          return `
              <li class="container__main__container-middle__list">
              <div>
                  <h5>Name</h5>
                  <span id="rootTowerName">${tower.name}</span>
              </div>
              <div>
                  <h5>Image</h5>
                  <img id="towerImage" src="${tower.image}">
              </div>
              <div>
                  <h5>Damage</h5>
                  <span id="rootTowerDamage">${tower.damage}</span>
              </div>
              <div>
                  <h5>Radius</h5>
                  <span id="rootTowerRadius">${tower.radius}</span>
              </div>
              <div>
                  <h5>Cost</h5>
                  <span id="rootTowerCost">${tower.cost}</span>
              </div>
              <div>
                  <h5>Level</h5>
                  <span id="rootTowerLevel">${tower.level}</span>
              </div>
              <div>
                  <button onclick="handleClickDelTower('${tower._id}')">
                      <i class="fa-solid fa-trash-can"></i>
                  </button>
              </div>
          </li>
  
              `;
        })
        .join("");
        rootTowersDetail.innerHTML = html;
    }
  } catch (error) {
    console.error(error);
  }
}
//RENDER ENEMY LISTS
async function renderEnemyList() {
  try {
    const rootEnemiesDetail: HTMLElement =
      document.getElementById("rootEnemiesDetail")!;
    const dataJs = await fetch("/api/enemy/get-enemies");
    if (!dataJs) throw new Error("no found dataJs");
    const data = await dataJs.json();
    if (data.ok === false){
      rootEnemiesDetail.innerHTML = "N/A";
    }else {
      const { enemyDB } = data;
      const html = enemyDB
        .map((enemy) => {
          return `
              <li class="container__main__container-middle__list">
              <div>
                  <h5>Name</h5>
                  <span id="rootEnemyName">${enemy.name}</span>
              </div>
              <div>
                  <h5>Image</h5>
                  <img id="enemyImage" src="${enemy.image}">
              </div>
              <div>
                  <h5>Health</h5>
                  <span id="rootEnemyHealth">${enemy.health}</span>
              </div>
              <div>
                  <button onclick="handleClickDelEnemy('${enemy._id}')">
                      <i class="fa-solid fa-trash-can"></i>
                  </button>
              </div>
          </li>
  
              `;
        })
        .join("");
      rootEnemiesDetail.innerHTML = html;
    }
  } catch (error) {
    console.error(error);
  }
}

// Control

async function handleSubmitCreateTower(ev: any) {
  try {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const image = ev.target.elements.image.value;
    const damage = ev.target.elements.damage.value;
    const radius = ev.target.elements.radius.value;
    const cost = ev.target.elements.cost.value;
    const level = ev.target.elements.level.value;
    if (!name) throw new Error("No name");
    if (!image) throw new Error("No image");
    if (!damage) throw new Error("No damage");
    if (!radius) throw new Error("No radius");
    if (!cost) throw new Error("No cost");
    if (!level) throw new Error("No level");

    const newTower = { name, image, damage, radius, cost, level };
    fetch("/api/tower/create-tower", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTower),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          const collapse_container__form = document.querySelector(
            ".collapse-container__form"
          );
          const adminNotification =
            document.querySelector(".adminNotification");
          if (!collapse_container__form) throw new Error("DOM Error");

          if (!adminNotification) {
            collapse_container__form.insertAdjacentHTML(
              "afterend",
              '<p class="adminNotification">Tower already exist OR unauthorized<p>'
            );
          }

          throw new Error(data.error);
        }
        location.reload();
      });
  } catch (error) {
    console.error(error);
  }
}
async function handleSubmitCreateEnemy(ev: any) {
  try {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const image = ev.target.elements.image.value;
    const health = ev.target.elements.health.value;
    if (!name) throw new Error("No name");
    if (!image) throw new Error("No image");
    if (!health) throw new Error("No health");

    const newEnemy = { name, image, health };
    fetch("/api/enemy/create-enemy", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEnemy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          const collapse_container__form = document.querySelector(
            ".collapse-container__form"
          );
          const adminNotification =
            document.querySelector(".adminNotification");
          if (!collapse_container__form) throw new Error("DOM Error");

          if (!adminNotification) {
            collapse_container__form.insertAdjacentHTML(
              "afterend",
              '<p class="adminNotification">Enemy already exist OR unauthorized<p>'
            );
          }

          throw new Error(data.error);
        }
        location.reload();
      });
  } catch (error) {
    console.error(error);
  }
}
async function handleSubmitCreateUser(ev: any) {
    try {
        ev.preventDefault()
        const firstName = ev.target.elements.firstName.value;
        const lastName = ev.target.elements.lastName.value;
        const userName = ev.target.elements.username.value;
        const email = ev.target.elements.email.value;
        const password = ev.target.elements.password.value;
        const cPassword = ev.target.elements.cPassword.value;
        const role = ev.target.elements.role.value;
        if (!firstName) throw new Error("No firstName");
        if (!lastName) throw new Error("No lastName");
        if (!userName) throw new Error("No userName");
        if (!email) throw new Error("No email");
        if (!password) throw new Error("No password");
        if (!cPassword) throw new Error("No cPassword");
        if (!role) throw new Error("No role");
        const newUser = { firstName, lastName, email, userName, password, cPassword, role};
        if(password !== cPassword){
            alert("the Confirm Password isn't correct")
            return
        }
        fetch("/api/users/admin-create-user", {
            method: "POST",
            headers: {
                Accept: "application/json",
              "Content-Type": "application/json",
            },
                  body: JSON.stringify(newUser)
                })        
                .then((res) => res.json())
                .then((data) => {
                    if (data.error) {
                        const adminNotification = document.querySelector(".adminNotification")
                        const adminNotificationRoot = document.querySelector("#adminNotificationRoot")
                        if (!adminNotificationRoot) throw new Error("DOM Error")

                        if (!adminNotification){
                          adminNotificationRoot.insertAdjacentHTML('afterend', '<p class="adminNotification">Username or Email already exist OR unauthorized<p>')
                        }
                        throw new Error(data.error)
                    }
                    location.reload();
                })
                alert("The user  was created successfully")
                const collapseFormRoot: HTMLElement = document.getElementById("collapseFormRoot")!;
                collapseFormRoot.classList.remove("active");
                ev.target.reset()
                location.reload()

    } catch (error) {
        console.error(error)
    }
}

async function handleClickDelUser(userID: string) {
  try {
    if (confirm("Are you sure you want to delete the above user?")) {
      const deleteUser = await fetch("/api/users/delete-user", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        "Content-Type": "application/json",
      },
        body: JSON.stringify({
          uid: userID,
        }),
      }).then((data) => {
      });

      location.reload();
    }
  } catch (error) {
    console.error(error);
  }
}
async function handleClickDelTower(towerId:string) {
  try {
    if (confirm("Are you sure you want to delete the above tower?")) {
      const deleteTower = await fetch("/api/tower/delete-tower", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        "Content-Type": "application/json",
      },
        body: JSON.stringify({towerId}),
      }).then((data) => {
      });

      location.reload();
    }
  } catch (error) {
    console.error(error);
  }
}
async function handleClickDelEnemy(enemyId:string) {
  try {
    if (confirm("Are you sure you want to delete the above enemy?")) {
      const deleteenemy = await fetch("/api/enemy/delete-enemy", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        "Content-Type": "application/json",
      },
        body: JSON.stringify({enemyId}),
      }).then((data) => {
      });

      location.reload();
    }
  } catch (error) {
    console.error(error);
  }
}


// Click  return back button
function handleClickBack() {
  try {
    window.location.href = "/";
  } catch (error) {
    console.error(error);
  }
}
function handleClickCloseCollapseContainer() {
  try {
    const collapseFormRoot: HTMLElement =
      document.getElementById("collapseFormRoot")!;
    collapseFormRoot.classList.remove("active");
  } catch (error) {
    console.error(error);
  }
}

// bottom Buttons
function handleClickCreateTowerBtn() {
  try {
    const collapseFormRoot: HTMLElement =
      document.getElementById("collapseFormRoot")!;
    collapseFormRoot.classList.add("active");
    collapseFormRoot.innerHTML = renderCreateTowerSection();
  } catch (error) {
    console.error(error);
  }
}
function handleClickCreateEnemyBtn() {
  try {
    const collapseFormRoot: HTMLElement =
      document.getElementById("collapseFormRoot")!;
    collapseFormRoot.classList.add("active");
    collapseFormRoot.innerHTML = renderCreateEnemySection();
  } catch (error) {
    console.error(error);
  }
}
function handleClickCreateUserBtn() {
  try {
    const collapseFormRoot: HTMLElement =
      document.getElementById("collapseFormRoot")!;
    collapseFormRoot.classList.add("active");
    collapseFormRoot.innerHTML = renderCreateUserSection();
  } catch (error) {
    console.error(error);
  }
}

// FILL STATS

async function FillRegisteredUsers() {
  try {
    const registeredUserFill: HTMLElement =
      document.getElementById("registeredUserFill")!; // Fill Registered Users Number

    const dataJs = await fetch("/api/users/get-users");
    if (!dataJs) throw new Error("no found DataJsName");
    const data = await dataJs.json();
    if (data.ok === false){
      registeredUserFill.innerHTML = "N/A";
    } else {
      const userNumber = data.users.length.toString();
      registeredUserFill.innerHTML = userNumber;
    }
  } catch (error) {
    console.error();
  }
}

async function FillAdminName() {
  try {
    const nameAdminFill: HTMLElement =
      document.getElementById("nameAdminFill")!; // Fill Name Admin;
    const dataJs = await fetch("/api/users/get-user");
    if (!dataJs) throw new Error("no found DataJsName");
    const data = await dataJs.json();
    console.log(data);
    const name = data.user.firstName;
    console.log(name);
    nameAdminFill.innerHTML = name;
  } catch (error) {
    console.error();
  }
}

async function getTotalGamesPlayed() {
  try {
    const totalGamesPlayedFill:HTMLHtmlElement | null = document.querySelector("#totalGamesPlayedFill")
    const data = await fetch("/api/game/get-total-games-played");
    if (!data) throw new Error("Couldn't fetch total games played!");
    const {totalGamesPlayed} = await data.json();
    if (!totalGamesPlayedFill) throw new Error("Couldn't catch total games played h1!");

    if (totalGamesPlayed === undefined){
      totalGamesPlayedFill.innerText = "N/A"
    } else {
      totalGamesPlayedFill.innerText = totalGamesPlayed
    }

  } catch (error) {
    console.error();
  }
}


