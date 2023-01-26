var speed = 0; // Speed Ballon Up
var balloonUpSpeed = 1000 - (speed * 100);
function currentTime() {
    setInterval(function () {
        var timeRN = new Date();
        var seconds = timeRN.getSeconds();
        var min = timeRN.getMinutes();
        var hours = timeRN.getHours();
        var time = document.querySelector('.time h2');
        if (seconds < 10) {
            time.innerHTML = hours + ":" + min + ":0" + seconds;
        }
        else if (min < 10) {
            time.innerHTML = hours + ":0" + min + ":" + seconds;
        }
        else {
            time.innerHTML = hours + ":" + min + ":" + seconds;
        }
    }, 1000);
}
function timer(parent, i) {
    (function render() {
        i++;
        parent.style.bottom = i + "% ";
        if (i < 99) {
            setTimeout(render, balloonUpSpeed);
        }
        else {
            parent.remove();
            return;
        }
    }());
}
