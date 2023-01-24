const registerForm =document.querySelector(`#form`)

function handleUser(event){
try {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const email = event.target.elements.email.value;
    const theOfBirth = event.target.elements.theOfBirth.value;
    const country = event.target.elements.country.value;
    // const profileImage = imgSrc;

    userList.push(new User(username, password, email, theOfBirth,country));
    console.log(userList);
    event.target.reset();
} catch (error) {
    console.error(error);
}
}