import React, { FC, useState } from "react";
import { IProfile } from "../Profile/IProfile";
import { REGISTER_FIELDS } from "../../consts/registerFields";
import { Button, TextField } from "@mui/material";
import "./Register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { LOGIN_ROUTE } from "../../consts/routeConsts";
const Register: FC = () => {
  const [userInfo, setUserInfo] = useState<IProfile>({
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    password: "",
    img: "",
  });

  const history = useHistory();

  const handleChange = (value: string, property: string) => {
    setUserInfo((prev) => {
      return { ...prev, [property]: value };
    });
  };

  const registerUser = (user: IProfile) => {
    axios.post("http://localhost:4000/user/add", user).then(() => {
      history.push(LOGIN_ROUTE);
    });
  };

  return (
    <div className="registerWrapper">
      {REGISTER_FIELDS.map((field, index) => (
        <div className="singleField" key={index}>
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
      <div className="registerButton">
        <Button
          variant="contained"
          onClick={() => {
            registerUser(userInfo);
          }}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;
