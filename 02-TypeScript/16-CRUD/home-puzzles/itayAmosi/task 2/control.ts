const popUpBalloons = function(){
    const density = 7;
    const balloons = [];
    const color = [`yellow`, `green`, `blue`, `gold`]

    const stringElement = document.createElement(`div`);
    stringElement.classList.add(`string`);

    for(let i = 0; i < density; i++) {
        const element = document.createElement(`div`);
        element.classList.add(`balloon`);
        element.classList.add(randomColor());

        element.append(stringElement.cloneNode())
        document.body.append(element);

        setTimeout(() => {
            releaseBalloon(balloons);
        }, (i*200) * randomColor(500, 1000));
        
    }
    function randomColor(){
        return color[random(0, color.length - 1)];
    }
    
    function random(min, max){
        return Math.floor(Math.random() * (max - min) + min);
        
    }
    function releaseBalloon (balloon){
        const delay = random(100, 1000);
        const x = random(-99, -30);
        const y = random(-99, -30);

        const order = [{outside:0, transform: `rotateZ(45deg) translate(0,0)`}];
        if(random(0,1)=== 0){
            balloon.style.left = `${-1*x}vw`

            order.push({outside: x/-200, transform: `rotateZ(45deg) translate(${y}vw,0)` });
            order.push({outside: (x+y)/-200, transform: `rotateZ(45deg) translate(${x}vw, ${y}vh)` });
            order.push({outside: (-100+y)/-200, transform: `rotateZ(45deg) translate(-100vw, ${y}vw)` });
        }else{
            order.push({outside: y/-200, transform: `rotateZ(45deg) translate(${x}vh)` });
            order.push({outside: (x+y)/-200, transform: `rotateZ(45deg) translate(${x}vw, ${y}vh)` });
            order.push({outside: (-100+x)/-200, transform: `rotateZ(45deg) translate(${x}vw), -100vh` });
        }
            order.push({outside: 1, transform: `rotateZ(45deg) translate(-100vh, -100vh)` });

    const balloonAnimation = balloon.animate(order, {duration:15000, delay})
    balloonAnimation.onfinish = () => {
        { releaseBalloon(balloons); };
    };
    };
    

}