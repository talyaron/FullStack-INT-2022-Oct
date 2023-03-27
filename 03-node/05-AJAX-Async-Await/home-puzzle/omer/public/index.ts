const btn = document.getElementById("btn");
const display = document.getElementById("display");

try {
    if (!btn || !display) throw new Error("Could not find elements");
    btn.addEventListener("click", () => {
        let html;
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                html = `
            <img src="${data.message}" alt="Dog">
            `;
                display.innerHTML = html;
            });
    })

} catch (error) {
    console.error(error);
}