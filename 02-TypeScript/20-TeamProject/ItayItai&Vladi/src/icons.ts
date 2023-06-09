// all windows event listener
window.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  if (target.classList.contains("profileIcon")) {
    displayProfile(currentUser);
  }
  if (target.classList.contains("notificationsIcon")) {
    displayNotifictions();
  }

  if (target.classList.contains("signOutbtn")) {
    localStorage.removeItem("currentUser");
    window.location.href = "entryPage.html";
  }

  if (target.classList.contains("exitProfilePage")) {
    profileWindow.style.display = "none";
  }
  if (target.classList.contains("exitNotifictionsPage")) {
    notifictionWindow.style.display = "none";
  }
  if (target.classList.contains("backToMainIcon")) {
    localStorage.removeItem("currentBoard");
    window.location.href = "index.html";
  }
  if (target.classList.contains("editBoardIcon")) {
    editBoardWindow.style.display = "flex";
    nameInputEle.value = currentBoard.name;
    imageDisplayedInEdit.src = currentBoard.backgroundImage;
  }
});
