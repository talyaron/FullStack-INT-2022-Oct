import React, { FC } from "react";

//mui
import { Card, CardContent } from "@mui/material";

//interface
import { IGenericRecipe } from "./IGenericRecipe";

//style
import "./GenericRecipe.css";

const GenericRecipe: FC<IGenericRecipe> = ({
  img,
  ingredients,
  name,
  userName
}) => {
  return (
    <div className="cardWrapper">
      <Card sx={{ maxWidth: "50rem" }}>
        <CardContent>
          <div className="cardContainer">
            <div className="leftSide">
              <div className="title">{name}</div>
              <img src={img} className="image" />
              <div>Made by: {userName}</div>
            </div>
            <div className="rightSide">
              <div className="title">Ingredients:</div>
              <div>
                {ingredients.map((element, index) => (
                  <div key={index}>- {element}</div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="more"
            onClick={() => {
              console.log("ok");
            }}
          >
            for full recipe
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GenericRecipe;
