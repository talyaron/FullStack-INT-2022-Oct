const boxes:any = document.querySelectorAll('.box');
boxes?.forEach(box => {
    console.log("box")
    box?.addEventListener('click', (e) => {
        box.style.backgroundColor = 'black'
    })
});