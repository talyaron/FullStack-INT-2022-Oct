function timer(parent: HTMLSpanElement, i: number) {
    (function renderBySec() {
        i++;
        parent.style.bottom = `${i}% `
        if (i < 99) {
            setTimeout(renderBySec, speed);
            speedInput.innerText = `Speed : ${speed}`
        } else {
            parent.remove()
            return
        }
    }());
}

function giveScore(ballon: HTMLSpanElement, randomNumber: number) {
    if (randomNumber === 1) {
        ballon.setAttribute('score', "40");
    }
    if (randomNumber === 2) {
        ballon.setAttribute('score', "30");
    }
    if (randomNumber === 3) {
        ballon.setAttribute('score', "20");
    }

}

function difficulty() {
    if (score <= 100) {
        speed = 55
    } else if (score > 100 && score < 200) {
        speed = 50
    } else if (score >= 200 && score < 300) {
        speed = 45
    } else if (score >= 300 && score < 400) {
        speed = 40
    } else if (score >= 400 && score < 500) {
        speed = 35
    } else if (score >= 500 && score < 600) {
        speed = 30
    } else if (score >= 600 && score < 700) {
        speed = 25
    } else if (score >= 700 && score < 800) {
        speed = 20
    } else if (score >= 800 && score < 1000) {
        speed = 15
    } else if (score >= 1000 && score < 1100) {
        speed = 13
    } else if (score >= 1100 && score < 1200) {
        speed = 11
    } else {
        speed = 10
    }
}
function time() {
    setInterval(() => {
        let timeRN = new Date()
        let seconds = timeRN.getSeconds();
        let min = timeRN.getMinutes();
        let hours = timeRN.getHours();
        const time = document.querySelector('.time h2')! as HTMLElement;
        if (seconds < 10) {
            time.innerHTML = `${hours}:${min}:0${seconds}`

        } else
            if (min < 10) {
                time.innerHTML = `${hours}:0${min}:${seconds}`
            } else {
                time.innerHTML = `${hours}:${min}:${seconds}`
            }
    }, 1000)
}
time()
