    const passwordForm = document.querySelector("#passwordForm");
    const passwordInput = document.querySelector("#passwordInput");
    passwordForm.addEventListener("submit", (event) => {
   event.preventDefault();
   const password = passwordInput.value;

   if (password === "opensesame") {
     console.log("You got all the gold in the cave!");
     alert("You got all the gold in the cave!")
   } else {
     console.log("Wrong Password!");
     alert("Wrong Password!")
   }
 });