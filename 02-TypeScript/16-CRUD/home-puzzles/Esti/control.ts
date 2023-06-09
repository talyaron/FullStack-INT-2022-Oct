
const balloonCanvas = document.getElementById("balloon") as HTMLCanvasElement
const mainDiv = document.getElementById("main") as HTMLDivElement
const sorce = document.getElementById("sorce") as HTMLDivElement
const btn = document.getElementById("btn") as HTMLDivElement

const ctx = balloonCanvas.getContext('2d')

const widthScreen = window.innerWidth
const heightScreen = window.innerHeight
let hue = 0
let indexCatch = true
let pos = 0
let posR = 0
let builtDivTrue = false
let live = 0
let indexBalloon = 0
let moveImg:any = null
let playImg:any = null
let balloonPlay:any = null
let start = false
let timeOut:any = null;
// const audioElement = new Audio("/public/lib/song.mp3");


// גודל מסך

const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

mainDiv.addEventListener("click", () => {
        if(indexCatch){
            console.log(hue + " 1")
            hue += 200 
            

            builtDiv()
            indexCatch = false
        }else{
            console.log(hue + " 2")
            indexCatch = true
            mainDiv.hidden = true               
            indexBalloon ++
            sorceB()
        }
    })


function startGame(){
    cleanScreen()

    clearInterval(balloonPlay);
    balloonPlay = setInterval(ballonPlay, 3000);
}

    function builtDiv() {
        const balloon1 = new Balloon(30, 30, 30, "hsl(" + hue + ",100%, 50%)"); 
        balloon1.draw(0); 
        indexCatch = true
        
    }
    


    // balloon pop
    
    function ballonPlay() {
        mainDiv.hidden = false
        hue = Math.floor(Math.random() * 1000)
        builtDiv()

       
            let posB = windowHeight * -1 + 150;
            let posR =  (Math.random() * windowWidth)

            clearInterval(moveImg);

            moveImg = setInterval(moveBalloon, 10);
        
        function moveBalloon() {
            let balloonMove = document.getElementById("main") as HTMLElement;   
            
            if (posB == 1000) {
 
                clearInterval(moveImg);

            } else {
                posB++
                balloonMove!.style.bottom = `${posB}px`; 
                
                if(posR < windowWidth/2){
                    posR++             
                }else{
                    posR--
                }
                balloonMove!.style.left = `${posR}px`; 
            }
            
               } 
                   
    }

    
    function cleanScreen(){
        pos = 0
        posR = 0
        builtDivTrue = false
        live = 0
        moveImg = null
        playImg = null
        balloonPlay = null
        indexCatch = true

    }
   
    function sorceB(){
        sorce.innerHTML = indexBalloon.toString()
    }
    
    btn.addEventListener("click", () => {
        console.log("DDD")
        clearInterval(moveImg)   
        clearInterval(balloonPlay)   

    })