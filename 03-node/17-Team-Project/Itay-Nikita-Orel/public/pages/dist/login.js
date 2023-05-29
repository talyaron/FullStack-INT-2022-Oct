// Set Background Music 
var backgroundSound = new Audio();
backgroundSound.src = '../audio/backgroundMusicRegisterLogin.mp3';
function onLoad() {
    try {
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
function handleSubmitLoginForm(ev) {
    try {
        ev.preventDefault();
        var _a = ev.target.elements, userName = _a.userName, password = _a.password;
        console.log(userName.value, password.value);
    }
    catch (error) {
        console.error(error);
    }
}
