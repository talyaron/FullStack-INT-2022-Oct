const array = document.querySelectorAll(".container");
array.forEach((container) => {
  const btn = container.querySelector(".slide");
  btn?.addEventListener("click", () => {
    container.scrollLeft += 40;
  });
});



const input = document.querySelector("#id_input");
const searchBtn = document.querySelector(".search_icon");

searchBtn?.addEventListener("click", () => {
  if (input) {
    input.style.display = input.style.display === "block" ? "none" : "block";
  }
});

