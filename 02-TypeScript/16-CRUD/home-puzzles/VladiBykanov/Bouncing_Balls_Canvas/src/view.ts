const canvas = document.querySelector(".playground") as HTMLCanvasElement;

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;

const seconds = document.querySelector(".timer__timeLeft") as HTMLSpanElement;

let time:number = 30;

let startTimer: number;

const tinkAudio = document.querySelector('#tinkSound') as HTMLAudioElement;
const clapAudio = document.querySelector('#clapSound') as HTMLAudioElement;

let score:number = 0;
const liveScore = document.querySelector('.liveScore') as HTMLSpanElement;