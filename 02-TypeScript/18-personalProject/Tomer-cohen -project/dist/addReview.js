var rootSelect = document.querySelector("#rootSelect");
if (rootSelect) {
    rootSelect.innerHTML = renderBookOptions();
}
else {
    console.error("couldnt find rootSelect in dom");
}
