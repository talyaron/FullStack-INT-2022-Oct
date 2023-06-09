function didIWin() {
    try {
        if (!box1_1 ||
            !box1_2 ||
            !box1_3 ||
            !box2_1 ||
            !box2_2 ||
            !box2_3 ||
            !box3_1 ||
            !box3_2 ||
            !box3_3)
            throw new Error("Error");
        if ((box1_1.style.backgroundColor == "pink" &&
            box1_2.style.backgroundColor == "pink" &&
            box1_3.style.backgroundColor == "pink") ||
            (box2_1.style.backgroundColor == "pink" &&
                box2_2.style.backgroundColor == "pink" &&
                box2_3.style.backgroundColor == "pink") ||
            (box3_1.style.backgroundColor == "pink" &&
                box3_2.style.backgroundColor == "pink" &&
                box3_3.style.backgroundColor == "pink") ||
            (box1_1.style.backgroundColor == "pink" &&
                box2_1.style.backgroundColor == "pink" &&
                box3_1.style.backgroundColor == "pink") ||
            (box1_2.style.backgroundColor == "pink" &&
                box2_2.style.backgroundColor == "pink" &&
                box3_2.style.backgroundColor == "pink") ||
            (box1_3.style.backgroundColor == "pink" &&
                box2_3.style.backgroundColor == "pink" &&
                box3_3.style.backgroundColor == "pink") ||
            (box1_1.style.backgroundColor == "pink" &&
                box2_2.style.backgroundColor == "pink" &&
                box3_3.style.backgroundColor == "pink") ||
            (box1_3.style.backgroundColor == "pink" &&
                box2_2.style.backgroundColor == "pink" &&
                box3_1.style.backgroundColor == "pink")) {
            winner.innerHTML = "The Winner is:\n      <div class=\"player_o_win\">\n      <span class=\"closebtn\" onclick=\"reset()\">&times;</span>\n      Player O win the game!!\n      </div>";
            boxes.forEach(function (box) { return box.style.pointerEvents = "none"; });
        }
        else if ((box1_1.style.backgroundColor == "blue" &&
            box1_2.style.backgroundColor == "blue" &&
            box1_3.style.backgroundColor == "blue") ||
            (box2_1.style.backgroundColor == "blue" &&
                box2_2.style.backgroundColor == "blue" &&
                box2_3.style.backgroundColor == "blue") ||
            (box3_1.style.backgroundColor == "blue" &&
                box3_2.style.backgroundColor == "blue" &&
                box3_3.style.backgroundColor == "blue") ||
            (box1_1.style.backgroundColor == "blue" &&
                box2_1.style.backgroundColor == "blue" &&
                box3_1.style.backgroundColor == "blue") ||
            (box1_2.style.backgroundColor == "blue" &&
                box2_2.style.backgroundColor == "blue" &&
                box3_2.style.backgroundColor == "blue") ||
            (box1_3.style.backgroundColor == "blue" &&
                box2_3.style.backgroundColor == "blue" &&
                box3_3.style.backgroundColor == "blue") ||
            (box1_1.style.backgroundColor == "blue" &&
                box2_2.style.backgroundColor == "blue" &&
                box3_3.style.backgroundColor == "blue") ||
            (box1_3.style.backgroundColor == "blue" &&
                box2_2.style.backgroundColor == "blue" &&
                box3_1.style.backgroundColor == "blue")) {
            winner.innerHTML = "The Winner is:\n      <div class=\"player_x_win\">\n      <span class=\"closebtn\" onclick=\"reset()\">&times;</span>\n      Player X win the game!!\n      </div>";
            boxes.forEach(function (box) { return box.style.pointerEvents = "none"; });
        }
        else {
            winner.innerHTML = "The Winner is:\n        <div class=\"no_one_win\">\n        <span class=\"closebtn\" onclick=\"reset()\">&times;</span>\n        No one win the game...\n        </div>";
        }
    }
    catch (error) {
        console.error(error);
    }
}
