try {
    if (!btn)
        throw new Error("btn empty");
    btn.addEventListener("click", function () {
        var div = document.createElement("div");
        div.className = "card__text";
        var p = document.createElement("p");
        p.innerText = input.value;
        div.append(p);
        try {
            if (!card)
                throw new Error("card empty");
            card.append(div);
        }
        catch (error) {
            console.error(error);
        }
        input.value = "";
    });
}
catch (error) {
    console.error(error);
}
