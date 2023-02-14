import { FC, useState } from "react";
import axios from "axios";

//components
import GenericPopup from "../GenericPopup/GenericPopup";

//hooks
import { useColorUpdate } from "../../context/contextTheme";

//interfaces
import { IClass, IClassCard } from "../../pages/Classes/IClass";
import { IStudent } from "../../pages/Students/IStudent";

//css & mui
import "./SingleClassCard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const SingleClassCard: FC<IClassCard> = ({
  availableSeats,
  classId,
  className,
  classSeats,
  students,
  classGotDeleted,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { currColor } = useColorUpdate();
  const [currStudents, setCurrStudents] = useState(students);

  const textDisplayHandler = (singleStudent: IStudent): string => {
    return singleStudent.firstName + " " + singleStudent.lastName;
  };

  const unAssignStudent = (student: IStudent) => {
    axios.post(`http://localhost:3000/students/tz/${student.tz}/classId/${classId}`).then(() => {
      setCurrStudents(
        currStudents.filter((stud) => {
          return stud.tz !== student.tz;
        })
      );
    });
  };

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  const deleteClass = () => {
    axios
      .delete(`http://localhost:3000/classes/${classId}`)
      .then(() => {
        classGotDeleted(classId);
      })
      .catch((error) => alert(error.response.data.message));
  };

  return (
    <div>
      <Card className="cardWrapper">
        <CardContent>
          <Typography id="title">{className}</Typography>
          <Typography>
            there are
            <span className="bold"> {availableSeats} </span>
            seats left
          </Typography>
          <Typography className="lightText">
            out of <span className="bold">{classSeats}</span>
          </Typography>
        </CardContent>
        <CardActions className="studentsButtonWarpper">
          <div
            onClick={() => {
              if (currStudents.length > 0) {
                setIsPopupOpen(true);
              } else {
                alert("There are no students assigned to the class");
              }
            }}
          >
            STUDENTS LIST
          </div>
          <span
            className="material-icons deleteButton"
            style={{ color: currColor }}
            onClick={() => {
              deleteClass();
            }}
          >
            delete
          </span>
        </CardActions>
      </Card>

      <GenericPopup
        objectsToDisplay={currStudents}
        textDisplayHandler={textDisplayHandler}
        leftIcon={"account_circle"}
        rightIcon={"delete"}
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={handleClose}
        rightIconFunc={unAssignStudent}
      />
    </div>
  );
};

export default SingleClassCard;
