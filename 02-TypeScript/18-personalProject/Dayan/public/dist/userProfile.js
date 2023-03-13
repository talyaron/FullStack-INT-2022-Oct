var mainVideo = document.querySelector('#main-Video');
var musicList = document.querySelector('.music-list');
var playlist = document.querySelector('#playlist');
var AllLessons = document.querySelector('.AllLessons');
var videoTitle = document.querySelector('.title');
var ulTag = document.querySelector("ul");
AllLessons.innerHTML = videoLibrary.length + " Lessons";
var musicIndex = 1;
window.addEventListener('load', function () {
    loadMusic(musicIndex);
    playingNow();
});
function playMusic() {
    mainVideo.play();
    playlist.classList.add('active');
}
function loadMusic(indexNumb) {
    mainVideo.src = videoLibrary[indexNumb - 1].url + ".mp4";
    videoTitle.innerHTML = indexNumb + ". " + videoLibrary[indexNumb - 1].title;
}
var _loop_1 = function (i) {
    var liTag = "<li li-index=\"" + (i + 1) + "\">\n      <div class=\"row\">\n         <span>" + (i + 1) + ". " + videoLibrary[i].title + "</span>\n      </div>\n      <video class=\"" + videoLibrary[i].id + "\" src=\"" + videoLibrary[i].url + ".mp4\" style=\"display: none;\" title=\"" + videoLibrary[i].title + "\"></video>\n      <span id=\"" + videoLibrary[i].id + "\" class=\"duration\"></span>\n   </li>";
    playlist.insertAdjacentHTML('beforeend', liTag);
    var liVideoDuration = ulTag.querySelector("#" + videoLibrary[i].id);
    var liVideoTag = ulTag.querySelector("." + videoLibrary[i].id);
    liVideoTag.addEventListener("loadeddata", function () {
        var videoDuration = liVideoTag.duration;
        var totalMin = Math.floor(videoDuration / 60);
        var totalSec = Math.floor(videoDuration % 60);
        // if totalSec is less then 10 then add 0 at the beginging
        totalSec < 10 ? totalSec = "0" + totalSec : totalSec;
        liVideoDuration.textContent = totalMin + ":" + totalSec;
        // adding t duration attribe which we'll use below
        liVideoDuration.setAttribute("t-duration", totalMin + ":" + totalSec);
    });
};
for (var i = 0; i < videoLibrary.length; i++) {
    _loop_1(i);
}
// let's work on play particular song on click
var allLiTags = playlist.querySelectorAll('li');
function playingNow() {
    for (var j = 0; j < videoLibrary.length; j++) {
        if (allLiTags[j].classList.contains('playing')) {
            allLiTags[j].classList.remove("playing");
        }
        if (allLiTags[j].getAttribute('li-index') == musicIndex) {
            allLiTags[j].classList.add('playing');
        }
        // adding onclick attribute in all li tags
        allLiTags[j].setAttribute("onclick", "clicked(this)");
    }
}
function clicked(element) {
    // getting li index of particular clicked li tag
    var getIndex = element.getAttribute("li-index");
    musicIndex = getIndex;
    loadMusic(musicIndex);
    playMusic();
    playingNow();
}
