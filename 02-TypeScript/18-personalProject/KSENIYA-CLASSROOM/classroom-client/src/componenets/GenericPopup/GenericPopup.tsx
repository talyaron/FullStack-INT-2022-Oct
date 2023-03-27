import { FC } from "react";

// hooks
import { useColorUpdate } from "../../context/contextTheme";

// interfaces
import { IGenericPopup } from "./IGenericPopup";

// css & mui
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import "./genericPopup.css";

const GenericPopup: FC<IGenericPopup> = ({
  leftIcon,
  rightIcon,
  objectsToDisplay,
  textDisplayHandler,
  setIsPopupOpen,
  isPopupOpen,
  rightIconFunc,
}) => {
  const { currColor } = useColorUpdate();
  return (
    <div>
      <Dialog open={isPopupOpen} onClose={setIsPopupOpen}>
        <DialogTitle>Class Students</DialogTitle>

        {objectsToDisplay.map((element, index) => (
          <DialogContent className="popupText" key={index}>
            <span
              className="material-icons deleteButton"
              style={{ color: currColor }}
            >
              {leftIcon}
            </span>
            <DialogContentText className="mainText">
              {textDisplayHandler(element)}
            </DialogContentText>
            <span
              className="material-icons deleteButton"
              style={{ color: currColor }}
              onClick={() => {
                rightIconFunc(element);
                setIsPopupOpen(false);
              }}
            >
              {rightIcon}
            </span>
          </DialogContent>
        ))}
      </Dialog>
    </div>
  );
};

export default GenericPopup;
