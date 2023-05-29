//react
import { FC, useState } from "react";

// consts
import { LOGIN_FIELDS } from "../../consts/loginFields";

//mui
import { Button, TextField } from "@mui/material";

//axios
import axios from "axios";

// routing
import { useHistory } from "react-router-dom";
import { PROFILE_ROUTE, REGISTER_ROUTE } from "../../consts/routeConsts";

//css
import "./Login.css";

const Login: FC = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (value: string, property: string) => {
    setUserLogin((prev) => {
      return { ...prev, [property]: value };
    });
  };

  const loginUser = (user: {}) => {
    axios
      .post("http://localhost:4000/user/login", user)
      .then(({ data }) => {
        const { userId } = data;
        localStorage.setItem("userIdToken", userId);
        console.log("Login successful!");
        history.push(PROFILE_ROUTE);
      })
      .catch((error) => {
        console.error("API request failed:", error);
      });
  };

  return (
    <div className="loginFieldsWrapper">
      {LOGIN_FIELDS.map((field, index) => (
        <div key={index} className="field">
          <TextField
            id="outlined-basic"
            label={field.label}
            variant="outlined"
            onChange={(e) => {
              handleChange(e.target.value, field.property);
            }}
          />
        </div>
      ))}
      <div className="loginBtn">
        <Button
          variant="contained"
          onClick={() => {
            loginUser(userLogin);
          }}
        >
          Login
        </Button>
      </div>
      <div
        className="registerLink"
        onClick={() => {
          history.push(REGISTER_ROUTE);
        }}
      >
        Don't have an account yet? join now
      </div>
    </div>
  );
};

export default Login;
