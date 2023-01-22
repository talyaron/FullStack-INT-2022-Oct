function didIWin() {
  try {
    if (
      !box1_1 ||
      !box1_2 ||
      !box1_3 ||
      !box2_1 ||
      !box2_2 ||
      !box2_3 ||
      !box3_1 ||
      !box3_2 ||
      !box3_3
    )
      throw new Error("Error");
    if (
      (box1_1.style.backgroundColor == `pink` &&
        box1_2.style.backgroundColor == `pink` &&
        box1_3.style.backgroundColor == `pink`) ||
      (box2_1.style.backgroundColor == `pink` &&
        box2_2.style.backgroundColor == `pink` &&
        box2_3.style.backgroundColor == `pink`) ||
      (box3_1.style.backgroundColor == `pink` &&
        box3_2.style.backgroundColor == `pink` &&
        box3_3.style.backgroundColor == `pink`) ||
      (box1_1.style.backgroundColor == `pink` &&
        box2_1.style.backgroundColor == `pink` &&
        box3_1.style.backgroundColor == `pink`) ||
      (box1_2.style.backgroundColor == `pink` &&
        box2_2.style.backgroundColor == `pink` &&
        box3_2.style.backgroundColor == `pink`) ||
      (box1_3.style.backgroundColor == `pink` &&
        box2_3.style.backgroundColor == `pink` &&
        box3_3.style.backgroundColor == `pink`) ||
      (box1_1.style.backgroundColor == `pink` &&
        box2_2.style.backgroundColor == `pink` &&
        box3_3.style.backgroundColor == `pink`) ||
      (box1_3.style.backgroundColor == `pink` &&
        box2_2.style.backgroundColor == `pink` &&
        box3_1.style.backgroundColor == `pink`)
    ) {
      winner.innerHTML += `<div class="player_0_win">
      <span class="closebtn" onclick="reset()">&times;</span>
      Player 0 win the game!!
      </div>`;
    } else if (
      (box1_1.style.backgroundColor == `blue` &&
        box1_2.style.backgroundColor == `blue` &&
        box1_3.style.backgroundColor == `blue`) ||
      (box2_1.style.backgroundColor == `blue` &&
        box2_2.style.backgroundColor == `blue` &&
        box2_3.style.backgroundColor == `blue`) ||
      (box3_1.style.backgroundColor == `blue` &&
        box3_2.style.backgroundColor == `blue` &&
        box3_3.style.backgroundColor == `blue`) ||
      (box1_1.style.backgroundColor == `blue` &&
        box2_1.style.backgroundColor == `blue` &&
        box3_1.style.backgroundColor == `blue`) ||
      (box1_2.style.backgroundColor == `blue` &&
        box2_2.style.backgroundColor == `blue` &&
        box3_2.style.backgroundColor == `blue`) ||
      (box1_3.style.backgroundColor == `blue` &&
        box2_3.style.backgroundColor == `blue` &&
        box3_3.style.backgroundColor == `blue`) ||
      (box1_1.style.backgroundColor == `blue` &&
        box2_2.style.backgroundColor == `blue` &&
        box3_3.style.backgroundColor == `blue`) ||
      (box1_3.style.backgroundColor == `blue` &&
        box2_2.style.backgroundColor == `blue` &&
        box3_1.style.backgroundColor == `blue`)
    ) {
      winner.innerHTML += `<div class="player_x_win">
      <span class="closebtn" onclick="reset()">&times;</span>
      Player X win the game!!
      </div>`;
    }
  } catch (error) {
    console.error(error);
  }
}
