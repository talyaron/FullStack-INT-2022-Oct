import React from "react";
import "./dist/navbar.css";
import { NAVBAR_ELEMENTS } from "../../consts/Sidebar/SidebarElements";
import { DIRECT_MESSAGES } from "../../consts/Sidebar/SidebarDirectMessages";

import NavbarSingleCategory from "./NavbarSingleCategory/NavbarSingleCategory";
import TextField from "@mui/material/TextField";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <TextField
        placeholder="Find or start a conversation"
        icon="search"
        InputProps={{
          style: {
            color: "whitesmoke",
            background: "black",
            height: "1.5rem",
            fontSize: "0.7rem",
            borderRadius: "10px",
            marginTop: "1rem",
          },
        }}
      />
      {NAVBAR_ELEMENTS.map((element, index) => (
        <NavbarSingleCategory
          key={index}
          category={element.category}
          icon={element.icon}
        />
      ))}
      <div className="sidebarDirectMessageTitle">DIRECT MESSAGES</div>
      {DIRECT_MESSAGES.map((element,index) => (
        <div key={index} className="singleDirectMessage">
          <img
            className="directMessageImg"
            src={element.img}
            alt="activity picture"
          />
          <div>
            <div className="directMessageUserName">{element.name}</div>
            {element.secondaryTitle && <div className="directMessageSecondaryTitle">{element.secondaryTitle}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
