


function handleClickBTN(){
const resultNumber:HTMLElement = document.getElementById('randomNum')!;
    fetch("/random")
    .then(response => response.json())
    .then(data => resultNumber.innerText = `THE NUMBER ${data.number}`)
    
    
}