import axios from "axios";
import  { useEffect } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { userId } = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/users/get-user?userId=${userId}`);
      console.log(data)
    })();
  }, []);

  return <div>User profile: {userId}</div>;
};

export default Profile;
