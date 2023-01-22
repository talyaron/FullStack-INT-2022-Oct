let change = -1;
let counter = 0;
let game = false;

for (let i = 0; i < boxes.length; i++) {
    if(mat[i] < 0) {
        const box = <HTMLDivElement>boxes[i];
        box.addEventListener("click", () => {
            const x = document.createElement("i");
            x.className = "fa-solid fa-x fa-2xl";
            const o = document.createElement("i");
            o.className = "fa-regular fa-circle fa-2xl";
            if (change == -1) {
                box.append(x);
                change *= -1;
                mat[i] = 1;
            } else {
                box.append(o);
                change *= -1;
                mat[i] = 0;
            }
            box.style.pointerEvents = "none";
            counter++;
            if(mat[0] == 0 && mat[1] == 0 && mat[2] == 0 || mat[3] == 0 && mat[4] == 0 && mat[5] == 0 || mat[6] == 0 && mat[7] == 0 && mat[8] == 0 || mat[0] == 0 && mat[4] == 0 && mat[8] == 0 || mat[2] == 0 && mat[4] == 0 && mat[6] == 0 || mat[0] == 0 && mat[3] == 0 && mat[6] == 0 || mat[1] == 0 && mat[4] == 0 && mat[7] == 0 || mat[2] == 0 && mat[5] == 0 && mat[8] == 0) {
                alert("O won!")
                stopGame(i);
            }
            if(mat[0] == 1 && mat[1] == 1 && mat[2] == 1 || mat[3] == 1 && mat[4] == 1 && mat[5] == 1 || mat[6] == 1 && mat[7] == 1 && mat[8] == 1 || mat[0] == 1 && mat[4] == 1 && mat[8] == 1 || mat[2] == 1 && mat[4] == 1 && mat[6] == 1 || mat[0] == 1 && mat[3] == 1 && mat[6] == 1 || mat[1] == 1 && mat[4] == 1 && mat[7] == 1 || mat[2] == 1 && mat[5] == 1 && mat[8] == 1) {
                alert("X won!")
                stopGame(i);
            }
            if(isEndGame() && counter == 9 && !game) {
                alert("Tie game...")
            }
        })
    }
}
function isEndGame():Boolean {
    for(let i = 0; i < mat.length; i++) {
        if(mat[i] < 0) 
            return false;
        }
    return true;
}

function stopGame(i) {
    for(let j = i ;j < boxes.length; j++) {
        const box = <HTMLDivElement>boxes[j];
        box.style.pointerEvents = "none";
    }
    game = true;
}



