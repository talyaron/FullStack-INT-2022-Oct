const newBalls:any = new Balls();
let numOfBalls = 10;
newBalls.drawBalls(numOfBalls);
const balls:NodeListOf<HTMLButtonElement> = document.querySelectorAll('.ball');

balls.forEach(ball => {
    try {
        const containerWidth = ballsContainer?.offsetWidth;
        const containerHeight = ballsContainer?.offsetHeight;
        const getRandomWidth = (min, max) => Math.random()*max;
        const getRandomHeight = (min, max) => Math.random()*max;
        const randomNum = Math.floor(Math.random()*5 + 1);
        const randomSize = Math.random()*100 + 20;
        ball.style.width = `${randomSize.toString()}px`;
        ball.style.height = `${randomSize.toString()}px`;
        ball.style.backgroundColor = getRandomColor();

        if (containerWidth != undefined && containerHeight != undefined){
            ball.style.left= getRandomWidth(0, containerWidth - 600)+'px';
            ball.style.top = getRandomHeight(0, containerHeight - 300)+'px';
        }
        ball.innerText = randomNum.toString();
        ball.addEventListener("click", e => {
            const numOfLives = ball.innerText;
            ball.innerText = (parseInt(numOfLives)-1).toString();
            ball.style.backgroundColor = getRandomColor();

            if (parseInt(numOfLives) <= 1){
                ball.remove();
                numOfBalls -=1;
            }
        })

    } catch (error) {
        console.error(error)
    }
})




function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }