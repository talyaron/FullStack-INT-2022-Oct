// Set Background Music 
var backgroundSound = new Audio();
backgroundSound.src = '../audio/backgroundMusicRegisterLogin.mp3';
function onLoad() {
    try {
        logout();
    }
    catch (error) {
        console.error(error);
    }
}
// handle functions
function handleClickMusicBtn() {
    try {
        var btnPlay = document.querySelector('#btn-play-pause img');
        if (!btnPlay)
            throw new Error("Button Play element no exists ");
        btnPlay.classList.toggle("active");
        if (btnPlay.classList.contains('active'))
            backgroundSound.pause();
        else
            backgroundSound.play();
    }
    catch (error) {
        console.error(error);
    }
}
function handleLogin(ev) {
    try {
        ev.preventDefault();
        var userName = ev.target.elements.userName.value;
        var password = ev.target.elements.password.value;
        if (!userName)
            throw new Error("No userName");
        if (!password)
            throw new Error("No Password");
        var loginUser = { userName: userName, password: password };
        fetch("/api/users/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginUser)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            if (data.error) {
                var container__form = document.querySelector(".container__form");
                var userNotification = document.querySelector(".userNotification");
                if (!container__form)
                    throw new Error("DOM Error");
                if (!userNotification) {
                    container__form.insertAdjacentHTML('afterend', '<p class="userNotification">Wrong Username or Password<p>');
                }
                throw new Error(data.error);
            }
            window.location.href = "/";
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function logout() {
    fetch("/api/users/delete-cookie", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    });
}
