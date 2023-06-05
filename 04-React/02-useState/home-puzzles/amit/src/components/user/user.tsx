import { FC } from "react";
import "./user.scss";

interface UserProps {
  key: string;
  name: string;
  isWinner: boolean;
  backColor: string;
}

const User: FC<UserProps> = ({ name, isWinner, backColor }) => {
  try {
      
    return <div
      className = "user"
      style = {{ backgroundColor: backColor, border: isWinner ? "0.5rem solid black" : "none" }}>
      <span>{name}</span>
      </div>
  } catch (error) {
    console.error(error)
    return null
  }
}

export default User