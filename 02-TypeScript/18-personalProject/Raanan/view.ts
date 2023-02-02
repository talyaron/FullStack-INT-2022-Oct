const toggleTheme = () => {
    const body: HTMLElement | null = document.querySelector("body");
    body.classList.toggle("darkTheme");
  };
  
  const themeToggle = document.createElement("button");
  themeToggle.innerText = "Toggle Dark/Light Theme";
  themeToggle.addEventListener("click", toggleTheme);
  
  document.querySelector("header").appendChild(themeToggle);
  displayMovies(latestMovies);