import "./post.scss";
import { Avatar } from "@mui/material";
import { FC } from "react";


interface Post{
  username: string;
  imageUrl:string;
  text: string;
} 



const UserPost: FC<Post> = ({ username , imageUrl , text }) =>  {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__header__avatar"
          alt="Reut"
          src="/static/images/avatar/1.jpg"
        />
        <h2>{username}</h2>
      </div>
      <img
        className="post__image"
        src={imageUrl}
        alt=""
      />
      <h4 className="post__text">
        <strong className="post__text__strong">{username}:</strong>{text}
      </h4>
    </div>
  );
}

export default UserPost;
