clearGameCookie();

const playNowBtn: HTMLButtonElement | null =
  document.querySelector("#playNowBtn");

const gameTypeWindow: HTMLDivElement | null =
  document.querySelector(".gameTypeWindow");

if (playNowBtn) {
  playNowBtn.addEventListener("click", async () => {
    const fetchUser = await fetch("api/v1/users/getUser")
      .then((res) => res.json())
      .then(({ user }) => user)
      .catch((error) => console.error(error));
    if (!fetchUser) {
      location.href = "/signIn";
    } else {
      if (gameTypeWindow) {
        gameTypeWindow.style.display = "flex";
      }
    }
  });
}

async function clearGameCookie() {
  await fetch("api/v1/games/removeGameCookie", { method: "DELETE" });
}
