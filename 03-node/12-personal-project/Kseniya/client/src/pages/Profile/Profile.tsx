import { FC, useEffect, useState } from "react";

//interface
import { IProfile } from "./IProfile";

//routing
import { useHistory } from "react-router-dom";

//components
import MiniRecipe from "../../components/MiniRecipe/MiniRecipe";

//css
import "./Profile.css";

//context
import { useUserInfoUpdate } from "../../context/contextTheme";
import { LOGIN_ROUTE } from "../../consts/routeConsts";

const Profile: FC = () => {
  const [user, setUser] = useState<IProfile>({} as IProfile);

  const history = useHistory();

  const { userInfo } = useUserInfoUpdate();

  useEffect(() => {
    const token = localStorage.getItem("userIdToken");
    if (token) {
      setUser(userInfo);
      console.log(userInfo);
    } else {
      history.push(LOGIN_ROUTE);
    }
  }, []);

  return (
    <div className="profileWrapper">
      <div>
        <img
          className="profilePic"
          src={
            user.img
              ? user.img
              : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
        />
        <div className="userName">
          {user.firstName} {user.lastName}
        </div>
        <div>{user.age} years old</div>
      </div>

      <div>
        <div className="recipesContainer"> Your Recipes Are:</div>
      </div>
    </div>
  );
};

export default Profile;
