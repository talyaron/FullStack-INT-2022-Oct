checkIfUserSavedInCookies();
loadUserGames();

savedGamesBtn.addEventListener("click", () => {
  if (
    savedGamesWindow.style.display === "" ||
    savedGamesWindow.style.display === "none"
  ) {
    savedGamesWindow.style.display = "flex";
  } else {
    savedGamesWindow.style.display = "none";
  }

  if (createGameWindow.style.display === "flex") {
    createGameWindow.style.display = "none";
  }
});

createGameBtn.addEventListener("click", () => {
  if (
    createGameWindow.style.display === "" ||
    createGameWindow.style.display === "none"
  ) {
    createGameWindow.style.display = "flex";
  } else {
    createGameWindow.style.display = "none";
  }

  if (savedGamesWindow.style.display === "flex") {
    savedGamesWindow.style.display = "none";
  }
});

function toggleWindows() { }

async function checkIfUserSavedInCookies() {
  try {
    const user = await fetch("api/v1/users/getUser")
      .then((res) => res.json())
      .then(({ user }) => user)
      .catch((error) => console.error(error));

    if (!user) {
      location.href = "/";
    }
  } catch (error) {
    console.error(error);
  }
}
