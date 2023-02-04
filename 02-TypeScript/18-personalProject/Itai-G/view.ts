const canvas =  <HTMLCanvasElement>document.getElementById('canvas');
const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");

canvas.width = window.innerWidth /1.2;
canvas.height = window.innerHeight /1.5;

document.onresize = ()=>{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}


