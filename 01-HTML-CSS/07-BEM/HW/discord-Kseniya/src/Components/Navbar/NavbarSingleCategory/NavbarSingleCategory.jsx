import React from "react";
import './dist/NavbarSingleCategory.css'

const NavbarSingleCategory = ({ category, icon }) => {
  return (
    <div className="singleCategoryWrapper">
      <span className="material-symbols-outlined singleCategoryWrapper__icon">{icon}</span>
      <div>{category}</div>
    </div>
  );
};

export default NavbarSingleCategory;
