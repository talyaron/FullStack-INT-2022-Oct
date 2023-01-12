
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}

const root: HTMLDivElement | null = document.querySelector("#root");
if (root) {
    root.style.backgroundColor = getRandomColor();
}

const box: HTMLDivElement | null = document.querySelector(".box");
if (box && root) {
    box.style.backgroundColor = root.style.backgroundColor;
    //   box.style.backgroundColor = getRandomColor();
}

function printToElement(element: HTMLElement | null) {
    if (element) {
        for (let i = 0; i < 10; i++) {
            element.innerText += i;
        }
    }
}

printToElement(box);