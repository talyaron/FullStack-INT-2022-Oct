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
        <div>
        <h1>Post By: {authorName}</h1>
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
      <p>{authorName}: {text}</p>
    </div>
  </>
  
  );
};

export default posts;