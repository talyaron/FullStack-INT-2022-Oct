import { FC } from "react";

// interfaces
import { IGenericFeild } from "./IGenericFeild";

// css & mui
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./genericfield.css";
import { useColorUpdate } from "../../context/contextTheme";

const GenericFeild: FC<IGenericFeild> = ({
  formTitle,
  formFeilds,
  buttonTitle,
}) => {
  const { currColor } = useColorUpdate();
  return (
    <div className="formWrapper">
      <div className="formTitle">{formTitle}</div>

      {formFeilds.map((element,index) => (
        <div className="formField" key={index}>
          <TextField id="outlined-basic" label={element} variant="outlined" onChange={(value) => {
            console.log(value.target.value)
          }}/>
        </div>
      ))}

      <Button variant="contained" style={{ backgroundColor: currColor }}>
        {buttonTitle}
      </Button>
    </div>
  );
};

export default GenericFeild;
