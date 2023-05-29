import { FC, useEffect, useState } from "react";

//mui
import { Button, TextField } from "@mui/material";

//css
import "./AddRecipe.css";

//axios
import axios from "axios";
import { IGenericRecipe } from "../../components/GenericRecipe/IGenericRecipe";
import { useHistory } from "react-router-dom";
import { LOGIN_ROUTE } from "../../consts/routeConsts";

import { useUserInfoUpdate } from "../../context/contextTheme";

const AddRecipe: FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ingredientFields, setIngredientFields] = useState<number[]>([]);
  const [instructions, setInstructions] = useState<string[]>([]);
  const [instructionsFields, setInstructionsFields] = useState<number[]>([]);

  const [newRecipe, setNewRecipe] = useState<IGenericRecipe>({
    userId: "",
    ingredients: [],
    instructions: [],
    name: "",
    img: "",
    userName: "",
  });

  const history = useHistory();

  const { userInfo } = useUserInfoUpdate();

  useEffect(() => {
    const token = localStorage.getItem("userIdToken");
    if (!token) {
      history.push(LOGIN_ROUTE);
    }
  }, []);

  const handleChange = (value: string, property: string) => {
    setNewRecipe((prev) => {
      return { ...prev, [property]: value };
    });
  };

  //axios - add recipe
  const addRecipe = () => {
    const tempNewRecipe = {
      ...newRecipe,
      userId: userInfo._id,
      userName: userInfo.firstName + " " + userInfo.lastName,
      ingredients: ingredients,
      instructions: instructions,
      
    };
    console.log(tempNewRecipe);
    axios.post("http://localhost:4000/recipe/add", tempNewRecipe).then(() => {
      console.log("Recipe added successfully!");
    });
  };

  const addNewIngredient = (index: number, value: string) => {
    setIngredients((prev) => {
      const newIngredients = [...prev];
      newIngredients[index] = value;
      return newIngredients;
    });
  };

  const addNewInstruction = (index: number, value: string) => {
    setInstructions((prev) => {
      const newInstructions = [...prev];
      newInstructions[index] = value;
      return newInstructions;
    });
  };

  return (
    <div className="AddWrapper">
      <TextField
        id="outlined-basic"
        onChange={(e) => {
          handleChange(e.target.value, "name");
        }}
        label="Recipe Name"
        variant="outlined"
      />

      <div className="photoField">
        <TextField
          id="outlined-basic"
          onChange={(e) => {
            handleChange(e.target.value, "img");
          }}
          label="photo URL"
          variant="outlined"
        />
      </div>

      <div className="semiTitle">ingredients</div>
      <div className="button">
        <Button
          variant="contained"
          onClick={() => {
            setIngredientFields((prev) => [...prev, 1]);
          }}
        >
          Add an ingredient
        </Button>
      </div>
      {ingredientFields.map((field, index) => (
        <div key={index} className="fields">
          <TextField
            id="outlined-basic"
            label="ingredient"
            variant="outlined"
            onChange={(e) => {
              addNewIngredient(index, e.target.value);
            }}
          />
        </div>
      ))}

      <div className="semiTitle">Instructions</div>
      <div className="button">
        <Button
          variant="contained"
          onClick={() => {
            setInstructionsFields((prev) => [...prev, 1]);
          }}
        >
          Add an instruction
        </Button>
      </div>
      {instructionsFields.map((field, index) => (
        <div key={index} className="fields">
          <TextField
            id="outlined-basic"
            label="ingredient"
            variant="outlined"
            onChange={(e) => {
              addNewInstruction(index, e.target.value);
            }}
          />
        </div>
      ))}

      <div className="button">
        <Button
          variant="contained"
          onClick={() => {
            addRecipe();
          }}
        >
          Publich Recipe
        </Button>
      </div>
    </div>
  );
};

export default AddRecipe;
