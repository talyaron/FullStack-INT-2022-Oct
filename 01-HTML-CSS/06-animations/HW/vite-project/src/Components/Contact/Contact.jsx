import React from "react";
import house1 from "../../icons/house1.svg";
import house2 from "../../icons/house2.svg";
import house3 from "../../icons/house3.svg";
import house4 from "../../icons/house4.svg";
import cunstructionCar from "../../icons/trucking-truck-svgrepo-com.svg";
import "./dist/contact.css";

const Contact = () => {
  return (
    <div>
      <div className="constructionContainer">
        <div className="housesContainer">
          <img className="house" src={house1} alt="house" />
          <img className="house" src={house2} alt="house" />
          <img className="house" src={house3} alt="house" />
          <img className="house" src={house4} alt="house" />
        </div>
        <img className="house cunstructionCar" src={cunstructionCar} alt="truckCar" />
      </div>
      This part is still under construction
    </div>
  );
};

export default Contact;
