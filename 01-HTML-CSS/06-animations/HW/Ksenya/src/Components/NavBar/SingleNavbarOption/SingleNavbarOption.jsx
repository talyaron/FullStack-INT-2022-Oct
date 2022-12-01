import React from 'react';
import "./SingleNavbarOption.css"
import { useHistory } from "react-router-dom";


const SingleNavbarOption = ({ singleTitle, singlePath, isActive, optionIndex, changeIndex, changeDrawer}) => {

    let history = useHistory();

    const optionClicked = () => {
        changeIndex(optionIndex)
        history.push(singlePath)
        changeDrawer(false)
    }
   

    return (
        <span className={isActive ? 'NavBarTitles activeTitle' : 'NavBarTitles'}
            onClick={() => { optionClicked() }} >
            {singleTitle}
        </span>
    );
};

export default SingleNavbarOption;