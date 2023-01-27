const canvas = document.querySelector(".playground") as HTMLCanvasElement;

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;

const seconds = document.querySelector(".timer__timeLeft") as HTMLSpanElement;

let time = 100;

let startTimer: number;
