function startGame() {
    if (chosenMap) {
        console.log(chosenMap);
        if (chosenMap === "mapOne") {
            creatMaze(mapOne);
        }
        else
            creatMaze(mapTwo);
    }
    pacman.draw();
    // draw ghosts to grid
    ghosts.forEach(function (ghost) {
        ghost.draw();
        moveGhost(ghost);
    });
}
function creatMaze(map) {
    map.forEach(function (value, index) {
        var square = document.createElement("div");
        maze.appendChild(square);
        squares.push(square);
        switch (value) {
            case 0:
                squares[index].classList.add("wall");
                break;
            case 1:
                squares[index].classList.add("point");
                break;
            case 2:
                squares[index].classList.add("cherry");
                break;
            case 3:
                squares[index].classList.add("lair");
                break;
        }
    });
}
function movePacman(direction) {
    squares[pacman.currentIndex].classList.remove("pacman");
    switch (direction) {
        case "left":
            if (checkForWall(pacman.currentIndex, -1)) {
                clearInterval(glide);
                squares[pacman.currentIndex].removeAttribute("style"); //removing the style attribute from square that pacman leaves
                pacman.currentIndex -= 1;
                squares[pacman.currentIndex].style.transform = "scaleX(-1)";
                glide = setInterval(movePacman, pacman.velocity, "left");
            }
            else if (pacman.currentIndex == 210) {
                squares[pacman.currentIndex].removeAttribute("style");
                pacman.currentIndex = 230;
                squares[pacman.currentIndex].style.transform = "scaleX(1)";
            }
            break;
        case "right":
            if (checkForWall(pacman.currentIndex, 1)) {
                clearInterval(glide);
                squares[pacman.currentIndex].removeAttribute("style");
                pacman.currentIndex += 1;
                squares[pacman.currentIndex].style.transform = "scaleX(1)";
                glide = setInterval(movePacman, pacman.velocity, "right");
            }
            else if (pacman.currentIndex == 230) {
                squares[pacman.currentIndex].removeAttribute("style");
                pacman.currentIndex = 210;
                squares[pacman.currentIndex].style.transform = "scaleX(1)";
            }
            break;
        case "up":
            if (checkForWall(pacman.currentIndex, -width)) {
                clearInterval(glide);
                squares[pacman.currentIndex].removeAttribute("style");
                pacman.currentIndex -= width;
                squares[pacman.currentIndex].style.transform = "rotate(-90deg)";
                glide = setInterval(movePacman, pacman.velocity, "up");
            }
            break;
        case "down":
            if (checkForWall(pacman.currentIndex, width) &&
                !squares[pacman.currentIndex + width].classList.contains("lair")) {
                clearInterval(glide);
                squares[pacman.currentIndex].removeAttribute("style");
                pacman.currentIndex += width;
                squares[pacman.currentIndex].style.transform = "rotate(90deg)";
                glide = setInterval(movePacman, pacman.velocity, "down");
            }
            break;
    }
    pacman.draw();
    checkForPoint();
    checkForCherry();
    checkForGamneOver();
    checkForWin();
}
//move ghost function
function moveGhost(ghost) {
    var directions = [-1, 1, -width, width];
    var direction = directions[Math.floor(Math.random() * directions.length)];
    ghost.timerId = setInterval(function test() {
        // if the square in the direction the ghost is going not containing another ghost or a wall => then he can move here
        if (checkForWall(ghost.currentIndex, direction) &&
            !squares[ghost.currentIndex + direction].classList.contains("ghost")) {
            squares[ghost.currentIndex].innerHTML = "";
            squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scaredGhost");
            ghost.currentIndex += direction;
            squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
            squares[ghost.currentIndex].innerHTML =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M50.8 452.1L19.2 477.4c-2.1 1.7-4.7 2.6-7.4 2.6C5.3 480 0 474.7 0 468.2V192C0 86 86 0 192 0S384 86 384 192V468.2c0 6.5-5.3 11.8-11.8 11.8c-2.7 0-5.3-.9-7.4-2.6l-31.6-25.3c-3.3-2.7-7.5-4.1-11.8-4.1c-5.9 0-11.5 2.8-15 7.5l-37.6 50.1c-3 4-7.8 6.4-12.8 6.4s-9.8-2.4-12.8-6.4l-38.4-51.2c-3-4-7.8-6.4-12.8-6.4s-9.8 2.4-12.8 6.4l-38.4 51.2c-3 4-7.8 6.4-12.8 6.4s-9.8-2.4-12.8-6.4L77.6 455.5c-3.6-4.7-9.1-7.5-15-7.5c-4.3 0-8.4 1.5-11.7 4.1zM160 192c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm96 32c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"/></svg>';
        }
        //else => find another direction
        else {
            direction = directions[Math.floor(Math.random() * directions.length)];
            checkForGamneOver();
        }
        //Change ghost color if scared
        if (ghost.isScared) {
            squares[ghost.currentIndex].classList.add("scaredGhost");
        }
    }, ghost.speed);
}
