import { FC } from "react";

//components
import Sidebar from "./Sidebar/Sidebar";

//hooks
import { useColorUpdate } from "../../context/contextTheme";

//css
import "./navbar.css";

const Navbar: FC = () => {
  const { currColor, toggleColor } = useColorUpdate();
  return (
    <div className="navbarWrapper" style={{ backgroundColor: currColor }}>
      <div className="leftSideWrapper">
        <Sidebar />
        <div>Shob Classes</div>
        <div>
          {" "}
          <span
            className="material-symbols-outlined themeButton"
            onClick={() => {
              toggleColor();
            }}
          >
            loyalty
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
