import { FC } from "react";

//interface
import { IGenericRecipe } from "../../components/GenericRecipe/IGenericRecipe";

//mui
import { Card, CardContent } from "@mui/material";

const Recipe: FC<IGenericRecipe> = ({
  name,
  ingredients,
  instructins,
  userName,
}) => {
  return (
    <div>
      <Card sx={{ width: "50rem" }}>
        <CardContent>
          <div>{name}</div>
          <div>
            ingredients:
            {ingredients.map((ingredient, index) => (
              <div key={index}>{ingredient}</div>
            ))}
          </div>
          <div>
        Instructions:
            {instructins.map((step, index) => (
              <div>
                {index + 1}. {step}
              </div>
            ))}
          </div>
          <div>Made by: {userName}</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Recipe;
