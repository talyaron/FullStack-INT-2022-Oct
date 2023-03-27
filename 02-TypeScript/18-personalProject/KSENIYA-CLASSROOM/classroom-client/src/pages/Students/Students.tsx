import { FC, useEffect, useState } from "react";
import axios from "axios";

// components
import GenericPopup from "../../componenets/GenericPopup/GenericPopup";

// hooks 
import { useColorUpdate } from "../../context/contextTheme";

// css & mui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./students.css";
import Button from "@mui/material/Button";

//consts
import { TABLE_HEADERS } from "../../consts/tableHeaders";

// interfaces
import { IStudent } from "./IStudent";
import { IClass } from "../Classes/IClass";

const Students: FC = () => {
  const { currColor } = useColorUpdate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [students, setStudents] = useState<IStudent[]>([]);
  const [availableClasses, setAvailableClasses] = useState<IClass[]>([]);
  const [isDoneLoading, setIsDoneLoading] = useState(false);
  const [currAssignedStudent, setCurrAssignedStudent] = useState<IStudent>(
    {} as IStudent
  );



  useEffect(() => {
    const getAllStudents = async () => {
      return await axios.get<IStudent[]>("http://localhost:3000/students/all");
    };
    
    const getAvailableClasses = async () => {
      return await axios.get<IClass[]>("http://localhost:3000/classes/available");
    };

    Promise.all([getAllStudents(), getAvailableClasses()]).then(
      ([students, availableClasses]) => {
        setStudents(students.data);
        setAvailableClasses(availableClasses.data);
        setIsDoneLoading(true);
      }
    );
  }, []);

  const textDisplayHandler = (singleClass: IClass): string => {
    return singleClass.className;
  };

  const assignToClass = (classId: number) => {
    classId
      ? alert("The student is already assigned to a class")
      : setIsPopupOpen(true);
  };

  const addStudentToClass = (singleClass: IClass) => {
    try {
      axios
        .post(
          `http://localhost:3000/students/tz/${currAssignedStudent.tz}/classId/${singleClass.classId}`
        )
        .then(() => {
          setStudents((prevStudents) => {
            const tempStudents = [...prevStudents];
            tempStudents.forEach((element) => {
              if (element.tz === currAssignedStudent.tz) {
                element.classId = singleClass.classId;
                return;
              }
            });
            return tempStudents;
          });
        });
    } catch (error) {
    }
  };

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  const deleteStudent = (tz: number) => {
    axios.delete(`http://localhost:3000/students/${tz}`).then((element) => {
      setStudents(
        students.filter((stud) => {
          return stud.tz !== tz;
        })
      );
    });
  };

  return (
    <>
      {isDoneLoading && (
        <div className="tableWrapper">
          <TableContainer sx={{ boxShadow: 4 }}>
            <Table
              sx={{ minWidth: 650, boxShadow: 1 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  {TABLE_HEADERS.map((element, index) => (
                    <TableCell align="center" key={index}>
                      {element}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((element, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{element.tz}</TableCell>
                    <TableCell align="center">{element.firstName}</TableCell>
                    <TableCell align="center">{element.lastName}</TableCell>
                    <TableCell align="center">{element.age}</TableCell>
                    <TableCell align="center">{element.profession}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        sx={{
                          color: currColor,
                          border: `1px solid ${currColor}`,
                        }}
                        onClick={() => {
                          setCurrAssignedStudent(element);
                          assignToClass(element.classId);
                        }}
                      >
                        ASSIGN TO CLASS
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        sx={{
                          color: currColor,
                          border: `1px solid ${currColor}`,
                        }}
                        variant="outlined"
                        onClick={() => {
                          deleteStudent(element.tz);
                        }}
                      >
                        DELETE
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <GenericPopup
            objectsToDisplay={availableClasses}
            textDisplayHandler={textDisplayHandler}
            leftIcon={"school"}
            rightIcon={"add"}
            isPopupOpen={isPopupOpen}
            setIsPopupOpen={handleClose}
            rightIconFunc={addStudentToClass}
          />
        </div>
      )}
    </>
  );
};

export default Students;
