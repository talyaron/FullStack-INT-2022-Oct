async function renderComponentsByRole() {
  try {
    const scoreboardBtn:HTMLElement = document.querySelector(".scoreboardBtnContainer")!
    if (scoreboardBtn){
      scoreboardBtn.style.display = "flex"
    }
    const response = await fetch("/api/users/get-user");
    const data = await response.json();
    const { user } = data;
    if(!user){
        return renderLoginComponent()
    }
    renderLoginComponent("Logout");
    renderProfileComponent()
    if (user.ROLE === `admin`) {
      return renderAdminComponents();
    }
  } catch (error) {
    console.error(error);
  }
}

function renderAdminComponents() {
  const html = `
    <div class="adminBtnContainer navIcon">
    <h1>Admin</h1>
    <a href="./admin.html"><img id="adminBtn" src="../images/buttons/20.png"></a>
</div>
    `;
  const navigationRoot = document.querySelector("#navigationTabs");
  if (!navigationRoot) throw new Error("navigationRoot not found");
  navigationRoot.innerHTML += html;
}


function renderLoginComponent(textNav: string = "Login") {
  const html = `
  <div class="loginBtnContainer navIcon">
  <h1>${textNav}</h1>
  <a href="./login.html"><img id="loginBtn" src="../images/buttons/20.png"></a>
  </div>
    `;
  const rightNavIconsContainerRoot = document.querySelector(".rightNavIconsContainer");
  if (!rightNavIconsContainerRoot) throw new Error("rightNavIconsContainerRoot not found");
  rightNavIconsContainerRoot.innerHTML += html;
}

function renderProfileComponent() {
    const html = `
    <div class="profileBtnContainer navIcon">
    <h1>Profile</h1>
    <a href="./profile.html"><img id="profileBtn" src="../images/buttons/20.png"></a>
</div>
      `;
    const navigationRoot = document.querySelector("#navigationTabs");
    if (!navigationRoot) throw new Error("navigationRoot not found");
    navigationRoot.innerHTML += html;
  }


async function handleClickPlayBtn(){
  try {
    const dataJs = await fetch(`api/users/get-user`)
    if(!dataJs) throw new Error("no found Data Js")
    const data = await dataJs.json()
   if(data.ok === true){
window.location.href = "/game.html"
   } else {
    window.location.href = "/login.html"
   }
  } catch (error) {
    console.error(error)
  }
}

