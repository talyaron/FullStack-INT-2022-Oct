import axios from "axios";
import "../style/register-login.scss";
import ErrorPage from "./ErrorPage";
import { Link } from "react-router-dom";

const register = () => {
  async function handleRegistation(e: any) {
    e.preventDefault();
    const name = e.target.name.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    const cpassword = e.target.cpassword.value;
    const gender = e.target.elements.gender.value;

    if (password !== cpassword) {
      return alert("Password and password confirmation do not match");
    } else {
      const { data } = await axios.post("/api/user/add-user", {
        name,
        username,
        email,
        phone,
        password,
        cpassword,
        gender,
      });
    }
    console.log(gender);
    // console.log(data);
  }

  return (
    <>
      <div className="box">
        <div className="container">
          <div className="title">Registation</div>
          <form onSubmit={handleRegistation}>
            <div className="user_details">
              <div className="input_pox">
                <span className="datails">Full Name</span>
                <input
                  name="name"
                  type="text"
                  placeholder="enter your name"
                  required
                />
              </div>
              <div className="input_pox">
                <span className="datails">Username</span>
                <input
                  name="username"
                  type="text"
                  placeholder="enter your Username"
                  required
                />
              </div>
              <div className="input_pox">
                <span className="datails">Email</span>
                <input
                  name="email"
                  type="text"
                  placeholder="enter your Email"
                  required
                />
              </div>
              <div className="input_pox">
                <span className="datails">Phone Number</span>
                <input
                  name="phone"
                  type="text"
                  placeholder="enter your Phone"
                  required
                />
              </div>

              <div className="input_pox">
                <span className="datails">Password</span>
                <input
                  name="password"
                  type="text"
                  placeholder="enter your Password"
                  required
                />
              </div>

              <div className="input_pox">
                <span className="datails">Confirm Password</span>
                <input
                  name="cpassword"
                  type="text"
                  placeholder="Confirm your Password"
                  required
                />
              </div>
            </div>
            <div className="gender_details">
              <input type="radio" name="gender" id="dot-1" value="male" />
              <input type="radio" name="gender" id="dot-2" value="female" />
              <input
                type="radio"
                name="gender"
                id="dot-3"
                value="not-specified"
              />
              <span className="gender_title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Mail</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three"></span>
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="button">
                <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default register;
