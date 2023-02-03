const maze = document.querySelector(".maze") as HTMLDivElement;
const squareSize = maze.offsetHeight / 21;

const scoreEl = document.querySelector("#score") as HTMLSpanElement;

const chosenMap = localStorage.getItem("userChoice");
let palletsThisGame:number;


let glide: number; //pacman glide interval
let score = 0;
let palletsMapOne = 144;
let palletsMapTwo = 161;
let width = 21;
const winMessage = document.querySelector(".winMessage") as HTMLHeadElement;
const loseMessage = document.querySelector(".loseMessage") as HTMLHeadElement;



const eye = document.createElement("div") as HTMLDivElement;
eye.classList.add("eye");
const mouth = document.createElement("div") as HTMLDivElement;
mouth.classList.add("mouth");