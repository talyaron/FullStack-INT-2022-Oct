import { FC, useState } from "react";

//components
import SingleSidebarOption from "./SingleSidebarOption/SingleSidebarOption";

// consts
import { SIDEBAR_ELEMENTS } from "../../../consts/sidebarElements";

// css
import './sidebar.css'
import { Drawer } from "@mui/material";

const Sidebar: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <span className="material-symbols-outlined sidebarMenuIcon" onClick={() => {setIsSidebarOpen(true)}}>menu</span>
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={() => {
            setIsSidebarOpen(false);
        }}
        PaperProps={{
          sx: {
            paddingTop: "6vh",
            width: "25vh",
          },
        }}
      >
        {SIDEBAR_ELEMENTS.map((element, index) => (
          <SingleSidebarOption
            key={index}
            title={element.elementName}
            path={element.path}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        ))}
      </Drawer>
    </div>
  );
};

export default Sidebar;
