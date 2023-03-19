const toSecond = document.getElementById("toSecond");
if(toSecond) {
    toSecond.addEventListener('click', () => {
        console.log("hi");
        
        window.location.href = '/second'
    })
}