function start(){
    checkLoggedInStore()
    checkLoggedIn()
}

async function checkLoggedInStore() {
    try {
        const response = await fetch("/api/v1.0/users/check-logged-in")
        const data = await response.json()
        const locationName = `${location.href.split("/").slice(-1)}`
                if (data.ok === false){
                    location.href = "/login.html"
                } else if(locationName != "ship-store.html") {
                    location.href = "/ship-store.html"
                }
            // });
    } catch (error) {
        console.log(error);
    }
}

async function checkLoggedIn() {
    try {
        const response = await fetch("/api/v1.0/users/check-logged-in")
        const data = await response.json()

                if (data.ok === false){
                    const loginLogoutBtn:any = document.querySelector("#loginLogoutBtn")
                    if (loginLogoutBtn){
                        loginLogoutBtn.innerText = "Login"
                        loginLogoutBtn.setAttribute("onlick", "loginAccount()")
                        loginLogoutBtn.setAttribute("href", "login.html")
                    }
                } else {
                    const loginLogoutBtn:any = document.querySelector("#loginLogoutBtn")
                    const username:any = document.querySelector("#username")
                    if (loginLogoutBtn && username){
                        username.innerText = data.user
                        loginLogoutBtn.innerText = "Logout"
                        loginLogoutBtn.setAttribute("onclick", "logout()")
                    }
                }
            // });
    } catch (error) {
        console.log(error);
    }
}

async function logout() {
    console.log("logout")
    try {
        await fetch("/api/v1.0/users/logout")
            .then((res) => res.json())
            .then((data) => {
                if (data.ok === true){
                    location.href = "/"
                } else {
                    throw new Error("Something went wrong!")
                }
            });
    } catch (error) {
        console.log(error);
    }
}

function loginAccount() {
    console.log("login!!")
    location.href = "login.html"
}
let index = 0
function sentensesSlide() {
    const sentenses:any = document.querySelectorAll(".sentensesSlide")
    for (let i = 0 ; i<sentenses.length ; i++){
        sentenses[i].style.display = "none"
    }
    index++;

    if (index > sentenses.length) {index = 1}
    sentenses[index-1].style.display = "block"
    setTimeout(sentensesSlide, 9000)

}

sentensesSlide();