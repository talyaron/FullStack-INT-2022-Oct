import React from "react";
import "./dist/accounts.css";
import user1 from "../../assets/profile3.png";
import user2 from "../../assets/user1.png";
import user3 from "../../assets/user2.png";
import animeUser from "../../assets/animeUser.png";
import { USER_PROFILE_IMAGES } from "../../consts/Activities/users";
import { EXTRA_ICONS } from "../../consts/Activities/extreaIcons";

const Accounts = () => {
  return (
    <div className="accountsContainer">
      <img
        className="discordUser"
        src="data:image/png;base64,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"
        alt="discord user"
      />
      {
        USER_PROFILE_IMAGES.map((element,index) => (
          <img key={index} className="plainUser" src={element.img} alt={element.alt} />
        ))
      }
      {
        EXTRA_ICONS.map((element,index) => (
          <div key={index} className="sidebarExtraIcons">
            <span className="material-symbols-outlined ">{element.iconName}</span>
          </div>
        ))
      }
    </div>
  );
};

export default Accounts;
