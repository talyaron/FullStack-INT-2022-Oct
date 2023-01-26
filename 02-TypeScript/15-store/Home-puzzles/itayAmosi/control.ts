const registerForm =document.querySelector(`#form`)

function handleUser(event){
try {
    event.preventDefault();
    const gender = event.target.elements.gender.value;
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const email = event.target.elements.email.value;
    const theOfBirth = event.target.elements.theOfBirth.value;
    const country = event.target.elements.country.value;
    const profileImage = event.target.elements.profileImage.value;

    userList.push(new User(gender,username, password, email, theOfBirth,country, profileImage));
    console.log(userList);
    event.target.reset();
    renderCard(userList);
} catch (error) {
    console.error(error);
}
}



function renderCard(users:User[]):void {
try {
const divElement = document.querySelector(`.card`) as HTMLElement;
    users.forEach((user) => {
    const userCard = document.createElement("div") as HTMLElement;
    userCard.classList.add("newCard");
    userCard.innerHTML =` 
    <ul>
    <li>Gender: ${user.gender}</li>
    <li>Username: ${user.username}</li>
    <li>Password: ${user.password}</li>
    <li>Email: ${user.email}</li>
    <li>Date Of Birth: ${user.theOfBirth}</li>
    <li>country: ${user.country}</li>
    </ul> <img class="userImg" src="${user.profileImage}"/>`;
    divElement.appendChild(userCard);
});
} catch (error) {
console.error(error);
}
}
