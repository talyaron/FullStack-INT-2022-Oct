checkIfUserSignedIn();

const showOrHidePassword: HTMLSpanElement | null = document.querySelector(
  "#showOrHidePassword"
);
if (!showOrHidePassword) throw new Error("showOrHidePassword not found on DOM");

const password: HTMLInputElement | null =
  document.querySelector("#checkPassword");
if (!password) throw new Error("password not found on DOM");

showOrHidePassword.addEventListener("click", (e) => {
  try {
    if (password.type === "password") {
      password.type = "text";
      showOrHidePassword.classList.remove("fa-eye");
      showOrHidePassword.classList.add("fa-eye-slash");
    } else if (password.type === "text") {
      password.type = "password";
      showOrHidePassword.classList.remove("fa-eye-slash");
      showOrHidePassword.classList.add("fa-eye");
    }
  } catch (error) {
    console.error(error);
  }
});

async function checkIfUserSignedIn() {
  try {
    const fetchUser = await fetch("api/v1/users/getUser")
      .then((res) => res.json())
      .then(({ user }) => user ? true : false)
      .catch((error) => console.error(error));
    if (fetchUser) {
      location.href = "/profile";
    }
  } catch (error) {
    console.error(error);
  }
}
