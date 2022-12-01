import { useState, useEffect } from "react";
import { NAV_BAR_ELEMENTS } from "../../consts/navbarElements"
import "./NavBar.css";
import mainIcon from "../../icons/mainIcon.svg"
import { HOME_PATH } from "../../consts/routes";
import Drawer from '@mui/material/Drawer';
import SingleNavbarOption from "./SingleNavbarOption/SingleNavbarOption";
import { useHistory, useLocation } from "react-router-dom";

function NavBar() {
    const [activeIndex, setActiveIndex] = useState(0)
    const history = useHistory()
    const [drawerState, setDrawer] = useState(false)
    const location = useLocation()

    useEffect(() => {
        NAV_BAR_ELEMENTS.forEach((element,index) => {
            if (element.path === location.pathname) {
                setActiveIndex(index)
            }
        })
    }, [])
    return (

        <div id="NavBarBody">
            <div id="iconContainer" onClick={() => { history.push(HOME_PATH) }}>
                <img src={mainIcon} alt="my main icon" />
                <div id="iconTitle">That's Me</div>
            </div>
            <span id="menuButton" className="material-symbols-outlined" onClick={() => { setDrawer(true) }}>
                menu
            </span>
            <Drawer
                anchor='right'
                open={drawerState}
                onClose={() => { setDrawer(false) }}
                PaperProps={{
                    sx: {
                        paddingTop: '40px',
                        width: '200px'
                    }
                }}            >
                {NAV_BAR_ELEMENTS.map((element, index) => (
                    <SingleNavbarOption 
                        key={index}
                        singleTitle={element.titleName}
                        singlePath={element.path}
                        optionIndex={index}
                        isActive={index === activeIndex}
                        changeIndex={setActiveIndex}
                        changeDrawer={setDrawer}
                        />
                ))}
            </Drawer>
        </div>

    )
}

export default NavBar;