let userChoice: string;

window.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  if (target.nodeName == "IMG") {
    userChoice = target.className;
    localStorage.setItem("userChoice", userChoice);
  }

  if (target.innerHTML === "START") {
    window.location.href = "index.html";
  }

});
