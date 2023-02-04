let userChoice: string;
const imgElements = document.querySelectorAll('img') as NodeListOf<HTMLElement>
console.log(imgElements)
window.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  imgElements.forEach(img => {
    img.style.boxShadow = '0 0 0 black'
  })
  console.log(target.className);

  if (target.nodeName == "IMG") {
    target.style.boxShadow = '0 0 50px black'
    userChoice = target.className;
    localStorage.setItem("userChoice", userChoice);
  }

  if (target.innerHTML === "START") {
    window.location.href = "index.html";
  }
});
