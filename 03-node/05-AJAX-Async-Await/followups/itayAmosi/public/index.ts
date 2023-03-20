const btn = document.querySelector(`#btn`);

if (btn) {
    btn.addEventListener('click',()=>{
try {
    const body = document.querySelector(`body`);

    fetch("/random-colors") //promise
    .then((response) => response.json())
    .then((data) => {
        const randomColors = data[`randomColors`];
        console.log(randomColors);
        if(!randomColors) throw new Error("No random colors");
        if(!body) throw new Error("No body");
        body.style.backgroundColor = `#${randomColors}`;
    });

} catch (error) {
    console.error(error);
}
});
}
