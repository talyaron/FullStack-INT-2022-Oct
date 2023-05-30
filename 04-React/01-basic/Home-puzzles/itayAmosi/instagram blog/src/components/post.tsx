import "./post.scss";
import { Avatar } from "@mui/material";

function post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__header__avatar"
          alt="Reut"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>
      <img
        className="post__image"
        src="https://images.pexels.com/photos/2515420/pexels-photo-2515420.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <h4 className="post__text">
        <strong className="post__text__strong">username:</strong>I uploaded a
        picture for test
      </h4>
    </div>
  );
}

export default post;
