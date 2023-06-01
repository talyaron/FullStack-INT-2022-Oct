import {FC, useState} from "react";
import "./dist/Like.css"


const Like:FC = () => {
    const [counter, setCounter]= useState(0);
    function handleClick(){
        setCounter((counter)=> counter +1);
    }
    return(
        <div className="like" onClick={handleClick}>
            <img src="https://www.iconpacks.net/icons/2/free-instagram-like-icon-3507-thumb.png" alt="like" />
            <h4>{counter}</h4>
        </div>
    );
};
export default Like;
