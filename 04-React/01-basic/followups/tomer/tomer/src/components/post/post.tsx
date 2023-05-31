import { FC  } from "react";
import "./post.scss";
interface PostProps {
  img: string;
  text: string;
  authorName: string;
}

const posts: FC<PostProps> = ({ text , img, authorName}) => {
  return (
    <>
    <div className="box">
      <div className="navbar">
        <div className="avatar">
          <img src="avatar-image-url" alt="Avatar" />
        </div>
        <div>
        <p>{authorName}</p>
        </div>
      </div>
      <img src={img} alt="" />
      <div className="buttons">
        <button className="like-button">
          <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="" />
        </button>
        <button className="comment-button">
          <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/instagram-comment-icon.png" alt="" />
        </button>
        <button className="share-button">
          <img src="https://cdn-icons-png.flaticon.com/512/2907/2907795.png" alt="" />
        </button>
      </div>
      <h1>{text}</h1>
    </div>
  </>
  
  );
};

export default posts;