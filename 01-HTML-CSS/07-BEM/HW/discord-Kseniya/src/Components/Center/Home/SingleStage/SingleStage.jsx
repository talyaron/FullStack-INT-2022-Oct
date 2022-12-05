import React from "react";
import "./dist/singleStage.css";
import Grid from "@mui/material/Grid";

const SingleStage = ({ picture, host, desc, name, users }) => {
  return (
    <div className="stageWrapper">
      <div className="stageHeader">
        <img className="stageWrapper__pic" src={picture} alt="stage picture" />
        <div className="stageHeader__nameDesc">
          <div className="stageWrapper__host">{host}</div>
          <div className="stageWrapper__desc">{desc}</div>
        </div>
      </div>
      <div className="stageWrapper__name">{name}</div>
      <Grid container className="stageUsers">
        {users.map((element, index) => (
          <Grid item xs={4} key={index} className="stageUsers__wraprer" >
            <img
              className="stageUsers__img"
              src={element.pic}
              alt="user picture"
            />
            
            {element.name}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SingleStage;
