//react
import { FC, useEffect, useState } from "react";

//react router
import { useHistory } from "react-router-dom";

//axios
import axios from "axios";

//interfaces
import { IStudent } from "./IStudent";

//consts
import { ADD_STUDENT_ROUTE } from "../../consts/routes";

//mui
import { Button } from "@mui/material";

//css
import "./Students.css";

const Students: FC = () => {
  const [students, setStudents] = useState<IStudent[]>([]);

  const history = useHistory();

  useEffect(() => {
    try {
      axios
        .get<IStudent[]>("http://localhost:3001/students/all")
        .then(({ data }) => {
          console.log(data);
          setStudents(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deleteStudent = (_id: number) => {
    axios
      .delete<{ students: IStudent[] }>(
        `http://localhost:3001/students/delete/${_id}`
      )
      .then(({ data }) => {
        setStudents(data.students);
      });
  };

  return (
    <div className="studentsWrapper">
      <div className="title">All Students</div>
      {students &&
        students.map((element, index) => (
          <div key={index}>
            <div className="studentWrapper">
              <div className="student" key={index}>
                name: {element.name}
              </div>
              <Button
                variant="contained"
                sx={{ backgroundColor: "darkcyan", marginLeft: "1rem" }}
                onClick={() => {
                  deleteStudent(element._id!);
                }}
              >
                delete
              </Button>
            </div>

            <div>
              {element.courses && (
                <div>
                  is assigned to courses:
                  {element.courses?.map((course, index) => (
                    <div key={index}> {course.name}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

      <Button
        variant="contained"
        sx={{ backgroundColor: "darkcyan", marginTop: "2rem" }}
        onClick={() => {
          history.push(ADD_STUDENT_ROUTE);
        }}
      >
        add student
      </Button>
    </div>
  );
};

export default Students;
