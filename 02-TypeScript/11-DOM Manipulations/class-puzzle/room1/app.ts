const root:HTMLElement | null= document.querySelector("#root");
const userfName:string | null = prompt ('what is your name?');
const userAdress:string | null = prompt ('what is your address?');
const UserEmail: string | null = prompt ('what is your Email?');
const Userphoto: string | null = prompt ('what is your photo?');

if (userfName && userAdress && UserEmail && Userphoto && root) {
    root.innerHTML = `<div class="usercard"> 
    <h1> Name: ${userfName}</h1>
    <h1> Adress: ${userAdress}</h1>
    <h1> Email: ${UserEmail}</h1>
    <img src='${Userphoto}'/>
    `;
}