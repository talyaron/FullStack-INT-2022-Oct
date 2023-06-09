import React from "react";
import { ACTIVITIES } from "../../../consts/Activities/activities";
import SingleActivity from "./SingleActivity/SingleActivity";
import './dist/activities.css'

const Activities = () => {
  return (
    <div className="activities">
      <div className="activities__title">Activities</div>
      {ACTIVITIES.map((element, index) => (
        <SingleActivity
        key={index}
        pic={element.pic}
        users={element.users}
        desc={element.desc}
        server={element.server}
        />
      )
      )}
    </div>
  );
};

export default Activities;
