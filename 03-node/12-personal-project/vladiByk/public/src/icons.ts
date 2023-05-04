// all windows event listener
window.addEventListener("click", async (e) => {
  const target = e.target as HTMLElement;

  if (target.classList.contains("profileIcon")) {
    displayProfile(currentUser);
  }

  if (target.classList.contains("notificationsIcon")) {
    if (!notificationDiv.style.display) {
      const userNotifications = await fetch(
        `${usersAPI}/getNotifications/${currentUser.id}`
      )
        .then((res) => res.json())
        .then(({ notifications }) => notifications)
        .catch((error) => console.error(error));
      notificationDiv.innerHTML = "";
      notificationDiv.append(renderNotifications(userNotifications));
      notificationDiv.style.display = "flex";
    } else {
      notificationDiv.style.display = "";
    }
  }

  if (target.classList.contains("signOutbtn")) {
    removeCookie(usersAPI);

    removeCookie(boardsAPI);

    window.location.href = "/";
  }

  if (target.classList.contains("exitProfilePage")) {
    profileWindow.style.display = "none";
  }

  if (target.classList.contains("backToMainIcon")) {
    removeCookie(boardsAPI);
    window.location.href = "/main";
  }

  if (target.classList.contains("editBoardIcon")) {
    editBoardWindow.style.display = "flex";
    nameInputEle.value = currentBoard.name;
    imageDisplayedInEdit.src = currentBoard.imageSrc;
  }
});
