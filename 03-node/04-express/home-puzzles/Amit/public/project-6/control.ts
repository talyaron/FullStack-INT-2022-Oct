let score:number = 0;
function shoot(uid: string): void {
    try {
        const index = balloonsArray.findIndex((balloon) => balloon.uid === uid);
        if (index !== undefined && index > -1) {
            const balloon: HTMLDivElement | null = document.querySelector(`#${uid}`);
            if (balloon) {
                let clickCounter = 0;
                if (balloon.innerText === "2") clickCounter = 1;
                if (balloon.innerText === "1") clickCounter = 2;
                balloon.style.backgroundColor = "red";
                balloon.innerText = `${2 - clickCounter}`;
                if (balloon.innerText === "0") {
                    balloonsArray.splice(index, 1);
                    balloon.remove();
                    score+=10;
                    if(scoreOnScreen)scoreOnScreen.innerText = `SCORE: ${score}`;
                }
            }
        }
    } catch (error) {
        console.error(error);
    }
}


function endlessBaloonsCreator() {
    try {

        balloonsArray.push(new Balloon);
        document.querySelector("#wrapper")?.appendChild(renderNewBalloon());

        randomLocation();

    } catch (error) {
        console.error(error);
    }
}


function renderNewBalloon(): HTMLDivElement | any {
    try {
        for (let i = balloonsArray.length - 1; i < balloonsArray.length; i++) {
            const balloon = document.createElement("div");
            const balloonUid = balloonsArray[i].uid;
            balloon.id = balloonUid;
            balloon.className = "balloon";
            balloon.innerText = "2";
            balloon.addEventListener("click", function () { shoot(balloonUid); }); 
            balloon.addEventListener("animationstart", () => {
                balloon.animate(fly, flyTiming);
            });

            return balloon;
        }

    } catch (error) {
        console.error(error);
        return error;
    }
}


function randomLocation() {
    try {
        const wrapper = document.querySelector<HTMLDivElement>("#wrapper");
        let wrapperLastChild: any = wrapper?.lastElementChild;

        const xAxisWidth = 1000;
        let randomLeft: number;

        if (wrapperLastChild && wrapper) {
            randomLeft = getRandomNumber(0, xAxisWidth);
            wrapperLastChild.style.left = randomLeft + "px";
            wrapperLastChild.style.backgroundColor =  getRandomColor();
        };

    } catch (error) {
        console.error(error);
        return undefined;
    }

}


const fly = [
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-2000px)' },
]

const flyTiming = {
    duration: 10000,
    iterations: 1,
}


