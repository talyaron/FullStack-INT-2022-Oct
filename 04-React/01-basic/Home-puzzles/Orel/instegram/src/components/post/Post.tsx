import "./post.scss"
import { FC } from "react"





export interface PostProps {
    title: string;
    text: string;
    authorName: string;
    image: string;
}

const Post: FC<PostProps> = ({ title, text, authorName, image }) => {
    return (
        <div className="container-post">
            <div className="container-post__header">
                
                <span className="container-post__header__profile-circle">
                    <img src="https://www.selectenglish.co.uk/wp-content/uploads/2022/11/no-user-image.gif" alt="" />
                </span>
                
                <span id="userName">
                    {authorName}
                </span>
                <span> •</span>
                <span id="postDate">
                    2d
                </span>
            </div>
        <div className="container-post__main">
            <img src={image} alt={title} />
        </div>
        <div className="container-post__footer">
        <div className="container-post__footer__icons">

        <img title="Like" src="/images/heart.png" alt="" />
        <img title="Message"  src="/images/chat.png" alt="" />
        <img title="Share"  src="/images/send.png" alt="" />
                </div>

        <span className="container-post__footer__title"> 
        <span className="bold">
        {authorName} 
        </span>
        {title}
        </span>
        <div className="container-post__footer__text">
            {text}
        </div>

        <hr />
        </div>
        </div>

    )
}

export default Post