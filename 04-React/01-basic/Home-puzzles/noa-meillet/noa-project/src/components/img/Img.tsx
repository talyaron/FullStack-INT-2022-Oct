import { FC } from "react";
import "./dist/Img.css";
import Like from "../like/Like";

interface ImgProps{
    text: string;
}

const Img:FC<ImgProps> = ({text}) => {
    return(
        
        <div className="img">
            <img src={text} alt="instagram-img-post" />
            <Like/>
        </div>
        
    )
}
export default Img;
