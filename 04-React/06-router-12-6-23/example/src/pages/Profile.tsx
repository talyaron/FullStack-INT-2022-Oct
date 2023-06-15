import { useEffect } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get(`/api/users/get-user?userId=${userId}`);
  //     console.log(data)
  //   })();
  // }, []);

  useEffect(() => {
    //data arrives
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <div>
      <h1>User profile: {userId}</h1>
      <Outlet />
      <div className="button">
        <Link to={`/profile/${userId}/about`}>About</Link>
      </div>
      <div className="button">
        <Link to={`/profile/${userId}/contact`}>Contact</Link>
      </div>
      <div className="button">
        <Link to={`/profile/${userId}/testemonails`}>Testemonails</Link>
      </div>
    </div>
  );
};

export default Profile;
