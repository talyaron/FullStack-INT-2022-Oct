
try {
    if (!btn) throw new Error("btn empty");
    btn.addEventListener("click", () => {
        const div = document.createElement("div");
        div.className = "card__text";
        const p = document.createElement("p");
        p.innerText = input.value;
        div.append(p);
        if (!input.value) throw new Error("input.value empty");

        try {
            if (!card) throw new Error("card empty");
            card.append(div);
        } catch (error) {
            console.error(error);
        }
        input.value = "";
    })
} catch (error) {
    console.error(error);
}

try {
    if(!time) throw new Error("time div not exist");
    const p = document.createElement("p");
    let html = currTime.getHours().toString() + ":" + currTime.getMinutes().toString();
    p.innerText = html;
    time.append(p);
} catch (error) {
    console.error(error);
}


