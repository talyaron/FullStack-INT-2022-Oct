fetchRadomUser();
setTimeout(() => {
  renderUsers(userList);
}, 300);

form.addEventListener("submit", handleSubmit);

inputs.forEach((input) =>
  input.addEventListener("keydown", () => (errMsg.style.display = "none"))
);
