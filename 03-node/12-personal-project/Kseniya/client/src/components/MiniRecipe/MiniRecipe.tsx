import { FC } from "react";

//interface
import { IGenericRecipe } from "../GenericRecipe/IGenericRecipe";

//mui
import { Card, CardContent } from "@mui/material";

//css 
import './MiniRecipe.css'
import { useHistory } from "react-router-dom";
import { RECIPE_ROUTE } from "../../consts/routeConsts";

const MiniRecipe: FC<IGenericRecipe> = ({ name, img, recipeId }) => {

    const history = useHistory()
  return (
    <div className="miniRecipeWrapper">
        
      <Card sx={{ width: '30rem', textAlign: 'start'}}>
        <CardContent>
            <div className="recipeTitle" onClick={() => {history.push(RECIPE_ROUTE)}}>{name}</div>
            <img src={img} className="miniImg"/>
        </CardContent>
      </Card>
    </div>
  );
};

export default MiniRecipe;
