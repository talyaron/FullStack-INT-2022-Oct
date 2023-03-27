const Card:HTMLDivElement = document.querySelectorAll(".Card")
console.log(Card)


const userName: string | null = prompt("what is your name")
const userAddress: string | null = prompt("what is your address?")
const usrerMail: string | null = prompt("what is your email?")
const imagUrl: string | null = prompt("inter imag url")


if ( Card&& userName && userAddress && usrerMail && imagUrl) {

   Card.innerHTML = `<div class= "card "><h1> This is ${userName}'s card</h1>
    <img srs='${imagUrl}'/>
    <h2> Addres: ${userAddress}</h2>
    <h2> mail:${usrerMail}<h2></div>`;
}