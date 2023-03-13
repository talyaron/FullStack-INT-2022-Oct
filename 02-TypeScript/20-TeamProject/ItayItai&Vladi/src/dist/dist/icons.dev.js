"use strict";

// all windows event listener
window.addEventListener("click", function (e) {
  var target = e.target;

  if (target.classList.contains("profileIcon")) {
    displayProfile(currentUser);
  }

  if (target.classList.contains("notificationsIcon")) {
    // nothing yet...
    console.log("click");
    console.log(boardContainer);
    boardContainer.style.background = 'background: url("../../../img/blueBrickWall.jpg") no-repeat center / cover';
  }

  if (target.classList.contains("signOutbtn")) {
    localStorage.removeItem("currentUser");
    window.location.href = "entryPage.html";
  }

  if (target.classList.contains("exitProfilePage")) {
    profileWindow.style.display = "none";
  }

  if (target.classList.contains("backToMainIcon")) {
    localStorage.removeItem("currentBoard");
    window.location.href = "index.html";
  }

  if (target.classList.contains("editBoardIcon")) {
    editBoardWindow.style.display = "flex";
    nameInputEle.value = currentBoard.name;
    colorInputEle.value = currentBoard.backgroundColor;
  }
});