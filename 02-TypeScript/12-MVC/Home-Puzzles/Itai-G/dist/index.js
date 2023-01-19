createAccount();
console.log(user);
addEventListener("click", function () {
    try {
        friendsBtn.style.transform = "translateY(0)";
    }
    catch (error) {
        console.log(error);
    }
});
