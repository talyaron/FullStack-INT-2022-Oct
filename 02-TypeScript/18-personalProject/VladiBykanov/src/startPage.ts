window.onload = () => removeUserChoiceFromLocalStorage();

window.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;

  if (target.nodeName == "IMG") {
    mapImgElement.forEach((img) => (img.style.boxShadow = "0 0 0 black"));
    target.style.boxShadow = "0 0 50px black";
    localStorage.setItem("userChoice", target.id);
  }

  if (target.innerHTML === "START") {
    if (!localStorage.getItem("userChoice"))
      return alert("no map has been chosen");
    window.location.href = "index.html";
  }

  if (target.innerHTML === "SCOREBOARD") {
    if (!localStorage.getItem("users")) return alert("scoreboard is empty");
    window.location.href = "scoreBoard.html";
  }

  if (target.innerHTML === "Create New User") {
    addNewUserToLocalStorage();
  }

  if (target.innerHTML === "Login") {
    if (checkPassword()) {
      moveToWelcomePage();
    }
    else{
      alert('incorrect user name or password')
    }
  }
});

