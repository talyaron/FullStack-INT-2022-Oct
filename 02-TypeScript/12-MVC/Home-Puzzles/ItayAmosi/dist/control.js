function createAccount() {
    try {
        var userName = prompt("please enter your User Name");
        var userPassword = prompt("please enter your Password");
        var userEmail = prompt("please enter your Email Address");
        if (!userName || !userPassword || !userEmail)
            throw new Error("error");
        user.push(new Users(userName, userPassword, userEmail));
    }
    catch (error) {
        console.error(error);
    }
}
friendsBtn.addEventListener("click", function () {
    try {
        friendsBtn.style.transform = "translateY(0)";
    }
    catch (error) {
        console.log(error);
    }
});
