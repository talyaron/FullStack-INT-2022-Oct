function createAccount(){
    try {
        const userName=prompt(`please enter your User Name`)
        const userPassword=prompt(`please enter your Password`)
        const userEmail=prompt(`please enter your Email Address`)
        if(!userName || !userPassword || !userEmail) throw new Error(`error`)
        user.push(new Users(userName, userPassword, userEmail))
    } catch (error) {
        console.error(error)
    }
}

friendsBtn.addEventListener("click", () => {
    try {
        friendsBtn.style.transform = "translateY(0)";
    } catch (error) {
      console.log(error);
    }
  });
  
  