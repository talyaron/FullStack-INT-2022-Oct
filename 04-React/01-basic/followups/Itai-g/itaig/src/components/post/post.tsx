import { FC } from "react";
import "./post.scss";

interface PostProps {
    author: string;
    title: string;
    content: string;
}

const Post: FC<PostProps> = ({ title, content,author }) => {
    const avatar = author.charAt(0).toUpperCase();

    return (
        <div className="post">
        <div className="author">
          <div className="avatar">{avatar}</div>
          <h3>{author}</h3>
        </div>
        <h2>{title}</h2>
        <img src={content} alt={title} />
      </div>
    );
};

export default Post;