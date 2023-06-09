const toSecond = document.getElementById("toSecond");
if(toSecond) {
    console.log("hi");
    
    toSecond.addEventListener('click', () => {
        console.log("hi");
        
        window.location.href = '/second'
    })
}