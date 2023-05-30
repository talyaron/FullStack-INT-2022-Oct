import "./post.scss";
import { Avatar } from "@mui/material";

interface Post{
  username: string
  imageUrl:string;
} 



function post(post:Post) {
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
        src="https://images.unsplash.com/photo-1615963244664-5b845b2025ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
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
