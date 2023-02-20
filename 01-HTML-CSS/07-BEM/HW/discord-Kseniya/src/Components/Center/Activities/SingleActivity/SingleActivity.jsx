import React from "react";
import "./dist/SingleActivity.css";

const SingleActivity = ({ pic, users, desc, server }) => {
  return (
    <div className="singleActivity">
      <img className="singleActivity__pic" src={pic} alt="activity picture" />
      <div className="singleActivity__info">
        <div className="singleActivity__userNames">{users}</div>
        <div className="singleActivity__desc">{desc}</div>
      </div>
    </div>
  );
};

export default SingleActivity;
