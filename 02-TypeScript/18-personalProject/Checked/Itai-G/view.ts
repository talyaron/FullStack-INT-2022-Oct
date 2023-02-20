const canvas = <HTMLCanvasElement>document.getElementById("canvas");
const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
const bigAd = document.getElementById("bigAd") as HTMLDivElement;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.7;

document.onresize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.7;
};

