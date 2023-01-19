createAccount();
console.log(user);


addEventListener("click", () => {
    try {
        friendsBtn.style.transform = "translateY(0)";
    } catch (error) {
      console.log(error);
    }
  });