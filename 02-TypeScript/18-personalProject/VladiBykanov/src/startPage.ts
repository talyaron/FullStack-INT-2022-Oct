
const imgElements = document.querySelectorAll('img') as NodeListOf<HTMLImageElement>

window.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;


  if (target.nodeName == "IMG") {
    imgElements.forEach(img => img.style.boxShadow = '0 0 0 black')
    target.style.boxShadow = '0 0 50px black'
    localStorage.setItem("userChoice", target.id);
  }

  if (target.innerHTML === "START") {
    if(!localStorage.getItem('userChoice')) return
    window.location.href = "index.html";
  }
});
