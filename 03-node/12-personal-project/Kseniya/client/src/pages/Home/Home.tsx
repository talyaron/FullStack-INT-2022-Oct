import { FC, useEffect, useState } from "react";

//components
import GenericRecipe from "../../components/GenericRecipe/GenericRecipe";

//consts
import { IGenericRecipe } from "../../components/GenericRecipe/IGenericRecipe";
import axios from "axios";

const Home: FC = () => {
  const [recipes, setRecipes] = useState<IGenericRecipe[]>([]);

  useEffect(() => {
    try {
      axios
        .get<IGenericRecipe[]>("http://localhost:4000/recipe/all")
        .then(({ data }) => {
          setRecipes(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="wrapper">
      {recipes.map((element, index) => (
        <GenericRecipe key={index} {...element} />
      ))}
    </div>
  );
};

export default Home;
