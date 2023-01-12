//create a business card. get user address, name email and photo, and render to DOM
var card = document.querySelector(".card");
var userName = prompt('Enter your name:');
var adress = prompt('Enter your adress:');
var email = prompt('Enter your email:');
var image = prompt('Enter the image url:');
if (userName && adress && image && email) {
    card.innerHTML = "<h3 class=\"details\" id=\"userName\">" + userName + "</h3>\n    <h5 class=\"details\" id=\"adress\">" + adress + "</h5>\n    <h6 class=\"details\" id=\"email\">" + email + "</h6>\n    <img id=\"image\" src='" + image + "' alt=\"image\"/>";
}
