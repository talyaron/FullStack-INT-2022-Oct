//create a business card. get user address, name email and photo, and render to DOM

const card:HTMLHeadingElement | null = document.querySelector(".card");

const userName:string | null = prompt('Enter your name:')
const adress:string | null  = prompt('Enter your adress:')
const email:string | null  = prompt('Enter your email:')
const image:string | null  = prompt('Enter the image url:')




if(userName && adress && image && email){
    card.innerHTML = `<h3 class="details" id="userName">${userName}</h3>
    <h5 class="details" id="adress">${adress}</h5>
    <h6 class="details" id="email">${email}</h6>
    <img id="image" src='${image}' alt="image"/>`;
}