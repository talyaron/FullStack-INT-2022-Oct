import React from "react";
import "./dist/home.css";
import { LIVE_STAGES } from "../../../consts/Stages/stages";
import SingleStage from "./SingleStage/SingleStage";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeContainer__title">Home</div>
      <div className="liveStagesContainer">
        <div className="liveStagesContainer__title">Live Stages</div>
        {LIVE_STAGES.map((element, index) => (
          <SingleStage
            key={index}
            picture={element.stagePic}
            host={element.stageHost}
            desc={element.stageDesc}
            name={element.stageName}
            users={element.users}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
