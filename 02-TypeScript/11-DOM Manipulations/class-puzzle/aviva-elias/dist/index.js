var Card = document.querySelectorAll(".Card");
console.log(Card);
var userName = prompt("what is your name");
var userAddress = prompt("what is your address?");
var usrerMail = prompt("what is your email?");
var imagUrl = prompt("inter imag url");
debugger;
if (Card) {
    Card.innerHTML = "<h1> This is " + userName + "'s card</h1>\n    <img srs='" + imagUrl + "'/>\n    <h2> Addres: " + userAddress + "</h2>\n    <h2> mail:" + usrerMail + "<h2>";
}
