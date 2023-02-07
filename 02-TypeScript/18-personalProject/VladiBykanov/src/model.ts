const mapOne: number[] = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 1,
  0, 1, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1,
  0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  1, 0, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 9, 9, 9,
  9, 9, 9, 9, 9, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 9, 0, 0, 0, 0, 0, 0, 0,
  9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 9, 0, 9, 9, 9, 9, 9, 0, 9, 0, 1, 0, 0,
  0, 0, 9, 9, 9, 9, 1, 9, 9, 0, 9, 9, 9, 9, 9, 0, 9, 9, 1, 9, 9, 9, 9, 0, 0, 0,
  0, 1, 0, 9, 0, 9, 9, 9, 9, 9, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 9, 0,
  0, 0, 0, 0, 0, 0, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 9, 9, 9, 9, 5, 9, 9,
  9, 9, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 1, 0,
  0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1,
  0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1,
  0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

const mapTwo: number[] = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1,
  0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0,
  1, 0, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 9, 9, 9,
  9, 9, 9, 9, 9, 9, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 9, 9, 9, 9, 9, 9, 9, 9,
  9, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 9, 0, 0, 0, 0, 0, 0, 0, 9, 0, 1, 0, 0,
  1, 0, 0, 1, 0, 0, 1, 9, 9, 0, 9, 9, 9, 9, 9, 0, 9, 9, 1, 0, 0, 1, 0, 0, 1, 0,
  0, 1, 0, 9, 0, 0, 0, 0, 0, 0, 0, 9, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 9, 9,
  9, 9, 9, 9, 9, 9, 9, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 9, 9, 9, 9, 5, 9, 9,
  9, 9, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 1, 0,
  0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1,
  0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1,
  0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

// 0 = wall
// 1 = point
// 2 = cherry

// an array that wil hold all the divs and their classes
const squares = [] as Array<HTMLElement>;

class Pacman {
  public currentIndex: number;
  public velocity: number;
  constructor(
    private pacmanSpeed: number,
    public pacmanStrartingIndex: number
  ) {
    this.velocity = this.pacmanSpeed;
    this.currentIndex = this.pacmanStrartingIndex;
  }
  draw() {
    const eye = document.createElement("div") as HTMLDivElement;
    eye.classList.add("eye");
    const mouth = document.createElement("div") as HTMLDivElement;
    mouth.classList.add("mouth");
    squares[pacman.currentIndex].innerHTML = "";
    squares[this.currentIndex].classList.add("pacman", "square");
    squares[this.currentIndex].append(eye);
    squares[this.currentIndex].append(mouth);
  }
  update(direction: number) {
    squares[pacman.currentIndex].classList.remove("pacman");
    clearInterval(glide);
    squares[pacman.currentIndex].removeAttribute("style");
    if (pacman.currentIndex == 210) pacman.currentIndex = 229;
    else if (pacman.currentIndex == 230) pacman.currentIndex = 211;
    else pacman.currentIndex += direction;
    if (direction == 21) {
      squares[pacman.currentIndex].style.transform = "rotate(90deg)";
    } else if (direction == -21) {
      squares[pacman.currentIndex].style.transform = "rotate(-90deg)";
    } else {
      squares[pacman.currentIndex].style.transform = `scaleX(${direction})`;
    }
    glide = setInterval(this.move, pacman.velocity, direction);
    this.draw();
  }
  move(direction: number) {
    if (gameOver) return;
    switch (direction) {
      case directions.moveLeft:
        if (checkForWall(pacman.currentIndex, directions.moveLeft)) {
          pacman.update(direction);
        } else if (pacman.currentIndex == 210) {
          pacman.update(direction);
        }
        break;

      case directions.moveRight:
        if (checkForWall(pacman.currentIndex, directions.moveRight)) {
          pacman.update(direction);
        } else if (pacman.currentIndex == 230) {
          pacman.update(direction);
        }
        break;

      case directions.moveUp:
        if (checkForWall(pacman.currentIndex, directions.moveUp)) {
          pacman.update(direction);
        }
        break;

      case directions.movdeDown:
        if (checkForWall(pacman.currentIndex, directions.movdeDown)) {
          pacman.update(direction);
        }
        break;
    }
  }
}

class Ghost {
  public currentIndex: number;
  public isScared: boolean;
  public timerId: number;
  constructor(
    public className: string,
    public startIndex: number,
    public speed: number,
    public resetIndex: number
  ) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.isScared = false;
    this.resetIndex = resetIndex;
  }
  draw() {
    squares[this.currentIndex].classList.add(this.className, "ghost");
    squares[this.currentIndex].innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M50.8 452.1L19.2 477.4c-2.1 1.7-4.7 2.6-7.4 2.6C5.3 480 0 474.7 0 468.2V192C0 86 86 0 192 0S384 86 384 192V468.2c0 6.5-5.3 11.8-11.8 11.8c-2.7 0-5.3-.9-7.4-2.6l-31.6-25.3c-3.3-2.7-7.5-4.1-11.8-4.1c-5.9 0-11.5 2.8-15 7.5l-37.6 50.1c-3 4-7.8 6.4-12.8 6.4s-9.8-2.4-12.8-6.4l-38.4-51.2c-3-4-7.8-6.4-12.8-6.4s-9.8 2.4-12.8 6.4l-38.4 51.2c-3 4-7.8 6.4-12.8 6.4s-9.8-2.4-12.8-6.4L77.6 455.5c-3.6-4.7-9.1-7.5-15-7.5c-4.3 0-8.4 1.5-11.7 4.1zM160 192c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm96 32c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"/></svg>';
  }
  update(direction: number) {
    squares[this.currentIndex].innerHTML = "";
    squares[this.currentIndex].classList.remove(
      this.className,
      "ghost",
      "scaredGhost"
    );
    this.currentIndex += direction;
    this.draw();
    if (squares[this.currentIndex - direction].classList.contains("cherry")) {
      drawCherryOnIndex(this.currentIndex - direction);
    }
  }

  move() {
    if (gameOver) return;
    let direction = randomDirection();

    this.timerId = setInterval(() => {
      // if the square in the direction the ghost is going not containing another ghost or a wall => then he can move here
      if (
        checkForWall(this.currentIndex, direction) &&
        !squares[this.currentIndex + direction].classList.contains("ghost")
      ) {
        this.update(direction);
      }
      //else => find another direction
      else {
        direction = randomDirection();
      }

      //Change ghost color if scared
      if (this.isScared) {
        squares[this.currentIndex].classList.add("scaredGhost");
      }
    }, this.speed);
  }
}

const ghosts = [
  new Ghost("purple", 22, 250, 279),
  new Ghost("pink", 40, 400, 287),
  new Ghost("blue", 400, 300, 161),
  new Ghost("green", 418, 200, 153),
];

let glide: number; //pacman glide interval
let scaredGhostsTime: number; //scared ghosts timeout
let score: number;
let cherryIndex: number[] = [];

const directions = {
  moveLeft: -1,
  moveRight: 1,
  moveUp: -21,
  movdeDown: 21,
};

const randomDirection = () =>
  directions[
    Object.keys(directions)[
      Math.floor(Math.random() * Object.keys(directions).length)
    ]
  ];

const chosenMap = localStorage.getItem("userChoice");
const palletsMapOne = 144;
const palletsMapTwo = 161;
let palletsThisGame: number;

let gameOver: boolean;

class Maze {
  constructor(public maze: number[], public name: string) {}
  createMaze() {
    this.maze.forEach((value, index) => {
      const square = document.createElement("div") as HTMLDivElement;
      mazeDiv.appendChild(square);
      squares.push(square);

      switch (value) {
        case 0:
          squares[index].classList.add("wall", "square");
          break;
        case 1:
          squares[index].classList.add("point", "square");
          break;
        case 2:
          cherryIndex.push(index);
          squares[index].classList.add("cherry", "square");
          squares[index].innerHTML = `<svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512">
          <path d="M428.3 3c11.6-6.4 26.2-2.3 32.6 9.3l4.8 8.7c19.3 34.7 19.8 75.7 3.4 110C495.8 159.6 512 197.9 512 240c0 18.5-3.1 36.3-8.9 52.8c-6.1 17.3-28.5 16.3-36.8-.1l-11.7-23.4c-4.1-8.1-12.4-13.3-21.5-13.3H360c-13.3 0-24-10.7-24-24V152c0-13.3-10.7-24-24-24l-17.1 0c-21.3 0-30-23.9-10.8-32.9C304.7 85.4 327.7 80 352 80c28.3 0 54.8 7.3 77.8 20.2c5.5-18.2 3.7-38.4-6-55.8L419 35.7c-6.4-11.6-2.3-26.2 9.3-32.6zM171.2 345.5L264 160l40 0v80c0 26.5 21.5 48 48 48h76.2l23.9 47.8C372.3 443.9 244.3 512 103.2 512H44.4C19.9 512 0 492.1 0 467.6c0-20.8 14.5-38.8 34.8-43.3l49.8-11.1c37.6-8.4 69.5-33.2 86.7-67.7z"/>
          </svg>`;
          break;
        case 9:
          squares[index].classList.add("square");
          break;
      }
    });
  }
}

const mazeOne = new Maze(mapOne, "Map One");
const mazeTwo = new Maze(mapTwo, "Map Two");

class User {
  constructor(
    public userName: string,
    public password: string,
    public highScore: number = 0
  ) {}
  setHighScore(newScore: number) {
    this.highScore = newScore;
  }
}

const preMadeUserList: User[] = [
  new User("cruseder123", "12345678", 345),
  new User("johnny123", "87654321", 254),
  new User("vladb89", "vladislav1989", 984),
];

if (!localStorage.getItem('signedUpUsers'))
  localStorage.setItem('signedUpUsers', JSON.stringify(preMadeUserList));

let currentUser: User;
