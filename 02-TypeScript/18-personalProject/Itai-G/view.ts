const canvas =  <HTMLCanvasElement>document.getElementById('canvas');
const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");

canvas.width = window.innerWidth
canvas.height = window.innerHeight

document.onresize = ()=>{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}


