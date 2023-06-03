import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsChat, BsSend, BsBookmark } from "react-icons/bs";

type IconsProps = {
  setLikes: React.Dispatch<React.SetStateAction<number>>;
};

const Icons = ({ setLikes }: IconsProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    try {
      const likeIcon = document.querySelector(".likeIcon");
      if (!likeIcon) return;
      if (!isLiked) {
        likeIcon.classList.add("active");
        setIsLiked(!isLiked);
        setLikes((prev) => prev + 1);
      } else {
        likeIcon.classList.remove("active");
        setIsLiked(!isLiked);
        setLikes((prev) => prev - 1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="post__icons">
      <AiFillHeart className="likeIcon" onClick={handleLike} />
      <BsChat />
      <BsSend />
      <BsBookmark className="markIcon" />
    </div>
  );
};

export default Icons;
