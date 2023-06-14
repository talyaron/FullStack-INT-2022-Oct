import axios from "axios";
import "../style/register-login.scss";
import { useEffect, useState } from "react";

const Login = () => {

    const [isTrue, setIsTrue] = useState(false);
    useEffect(() => {
      (async () => {
        const { data } = await axios.get("/api/user/get-user");
  
        const { userDB } = data;
        if (userDB) {
          setIsTrue(userDB);
          console.log(userDB);
        }
      })();
    }, []);

  return (
    <>
      <div className="box">
        <div className="container">
          <div className="title">Login</div>
          <form>
            <div className="user_details">
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
                <span className="datails">Password</span>
                <input
                  name="password"
                  type="text"
                  placeholder="enter your Password"
                  required
                />
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
