const form = document.querySelector("form");
const q = document.querySelector("input[name='q']");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  let url = form.action + q.value;
  
  window.open(url);
});