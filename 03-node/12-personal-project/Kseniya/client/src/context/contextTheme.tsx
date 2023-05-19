import { createContext, useContext, useState, FC, useEffect } from "react";
import axios from "axios";

import { IProfile } from "../pages/Profile/IProfile";


interface IUserInfo {
  userInfo: IProfile;
  setUserInfo: React.Dispatch<React.SetStateAction<IProfile>>
}

const UserInfoContext = createContext<IUserInfo>({} as IUserInfo);

export const useUserInfoUpdate = () => useContext(UserInfoContext);

export const UserInfoProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState<IProfile>({} as IProfile);

  useEffect(() => {
    const codedId = localStorage.getItem("userIdToken");
    axios.defaults.headers.common["Authorization"] = `Bearer ${codedId}`;
    if (codedId) {
      axios.get<IProfile>("http://localhost:4000/user/get").then(({ data }) => {
        setUserInfo(data);
      });
    }
  }, []);

  const value: IUserInfo = {
    userInfo, setUserInfo
  };

  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>
  );
};
