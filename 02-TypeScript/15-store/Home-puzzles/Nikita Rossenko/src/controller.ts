function newRegister(e) {
  try {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const address = e.target.elements.address.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    const password = e.target.elements.password.value;
    const color = e.target.elements.color.value;
    const image = e.target.elements.image.value;
    const id = usersInputArray.length;

    const newUserInput = new userInput(
      id,
      name,
      address,
      email,
      phone,
      password,
      color,
      image
    );

    usersInputArray.push(newUserInput);
    console.log(usersInputArray);
    renderUserInputs(usersInputArray[usersInputArray.length - 1]);
  } catch (error) {
    console.error(error);
  }
}

function renderUserInputs(addUserInput) {
  try {
    if (userInputContainer) {
      userInputContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="usersInputCard" id="userInput${addUserInput.id}">`
      );
      const userInputIndex = document.querySelector(
        `#userInput${addUserInput.id}`
      );
      if (userInputIndex) {
        userInputIndex.insertAdjacentHTML(
          "beforeend",
          `<p>name: ${addUserInput.name}</p>`
        );
        userInputIndex.insertAdjacentHTML(
          "beforeend",
          `<p>address: ${addUserInput.address}</p>`
        );
        userInputIndex.insertAdjacentHTML(
          "beforeend",
          `<p>email: ${addUserInput.email}</p>`
        );
        userInputIndex.insertAdjacentHTML(
          "beforeend",
          `<p>phone: ${addUserInput.phone}</p>`
        );
        userInputIndex.insertAdjacentHTML(
          "beforeend",
          `<p>password: ${addUserInput.password}</p>`
        );
        userInputIndex.insertAdjacentHTML(
          "beforeend",
          `<p>color: ${addUserInput.color}</p>`
        );
        userInputIndex.insertAdjacentHTML(
          "beforeend",
          `<img src="${addUserInput.image}">`
        );
      }
    }
  } catch (error) {
    console.error(error);
  }
}
