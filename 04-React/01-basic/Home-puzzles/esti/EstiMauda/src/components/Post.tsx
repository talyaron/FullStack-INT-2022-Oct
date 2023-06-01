import { FC, useState } from "react";
import "./post.css"

interface PostProps{
    title:string,
    srcImage: string,
    text:string,
    authorName:string
}

const Post:FC<PostProps> = ({title, srcImage, text, authorName}) => {
    const [counterLike, setCounterLike] = useState(0);
    const [counterDisLike, setCounterDisLike] = useState(0);
    function handelClickLike(){
        setCounterLike(counterLike => counterLike + 1)
    }
    function handelClickDisLike(){
        setCounterDisLike(counterDisLike => counterDisLike + 1)
    }
    return( 
       
        <div className="post"> 
            <h1>{title}</h1>
            <h3>{authorName}</h3> 
            <img className="imagePost" src={srcImage} alt="src image" />
            <h3>{text} </h3> 
            <div className="image-container"  onClick={handelClickDisLike}>
                <img className="imageLike" src="https://www.freepnglogos.com/uploads/like-png/youtube-dislike-facebook-thumbs-down-not-like-png-36.png"  />
                <p className="text-overlay">{counterDisLike}</p>
            </div>

            <div className="image-container"  onClick={handelClickLike}>
                <img className="imageLike"  src="https://www.freepnglogos.com/uploads/like-png/youtube-like-transparent-png-pictures-icons-and-png-9.png" />
                <p className="text-overlay">{counterLike}</p>
            </div>
        </div>  
    );
}

export default Post;