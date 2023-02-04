function registerHandler(e) {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const passwordConfirm = e.target.elements.passwordConfirm.value;
    const passwordConfirmInput = document.querySelector("#passwordConfirm");
    const usernameInput = document.querySelector("#username");
    const popMessage = document.querySelector('#regitserPopMessage');

    if (username && password && passwordConfirm){
        if (password != passwordConfirm) {

            if (passwordConfirmInput && !popMessage) {
                passwordConfirmInput.insertAdjacentHTML(
                    "afterend",
                    "<span id='popMessage'>Passwords don't match!</span>"
                );
                passwordConfirmInput.addEventListener("click", (e) => {
                    const popMessage = document.querySelector('#regitserPopMessage');
                    if (popMessage){
                        popMessage.remove();
                    }
                });

                const passwordInput = document.querySelector("#password");

                if (passwordInput) {
                    passwordInput.addEventListener("click", (e) => {
                        const popMessage = document.querySelector('#regitserPopMessage');
                        if (popMessage){
                            popMessage.remove();
                        }
                    });
                }
            }
            return false;
        } else {
            allUsersString = localStorage.getItem('allUsers');
            if (allUsersString){
                    if (allUsersString){
                        const allUsersArray:Array<User> = JSON.parse(allUsersString);
                    if (allUsersArray.length > 0){
                        let userExist = false
                        allUsersArray.forEach(user => {
                            if (user.username.toLowerCase() == username.toLowerCase()){
                                if (passwordConfirmInput && !popMessage && usernameInput) {
                                    passwordConfirmInput.insertAdjacentHTML(
                                        "afterend",
                                        "<span id='regitserPopMessage'>This Username is already exists!</span>"
                                    );
                                    usernameInput.addEventListener("click", (e) => {
                                        const popMessage = document.querySelector('#regitserPopMessage');
                                        if (popMessage){
                                            popMessage.remove();
                                        }
                                    });
                                }
                                userExist=true;
                                return;
                            }
                        });
                        if (!userExist){
                            const newUser = new User(username, password);
                            allUsersArray.push(newUser);
                            localStorage.setItem('allUsers', JSON.stringify(allUsersArray));
                            location.href = 'login.html'
                        }
                    } else {
                        const newUser = new User(username, password);
                        allUsersArray.push(newUser);
                        localStorage.setItem('allUsers', JSON.stringify(allUsersArray));
                        location.href = 'login.html'
                    }
            }
            }
        }

    }
        
}
