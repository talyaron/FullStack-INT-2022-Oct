const speed = 0 // Speed Ballon Up
const balloonUpSpeed = 1000 - (speed * 100);

function currentTime(){
    setInterval(()=>{
        let timeRN = new Date()
        let seconds = timeRN.getSeconds();
        let min = timeRN.getMinutes();
        let hours = timeRN.getHours();
        const time = document.querySelector('.time h2')! as HTMLElement;
        if(seconds < 10 ){
            time.innerHTML = `${hours}:${min}:0${seconds}`

        } else
        if(min < 10 ){
            time.innerHTML = `${hours}:0${min}:${seconds}`
        }else{
            time.innerHTML = `${hours}:${min}:${seconds}`
        }
    },1000)
}

function timer(parent: HTMLSpanElement, i: number) {
    (function render() {
        i++;
        parent.style.bottom = `${i}% `
        if (i < 99) {
            setTimeout(render, balloonUpSpeed);
        } else {
            parent.remove()
            return
        }
    }());
}