import { TextField, Button, Autocomplete, Checkbox } from "@mui/material";
import { FC, useEffect, useState } from "react";
import "./AddStudent.css";
import { IStudent } from "../Students/IStudent";
import { ICourse } from "../Courses/ICourse";
import axios from "axios";

const AddStudent: FC = () => {
  const [coursesToDisplay, setCoursesToDisplay] = useState<ICourse[]>(
    [] as ICourse[]
  );

  const [student, setStudent] = useState<IStudent>({
    name: "",
    courses: [],
  });

  useEffect(() => {
    axios
      .get<ICourse[]>("http://localhost:3001/courses/all")
      .then(({ data }) => {
        setCoursesToDisplay(data);
      });
  }, []);

  const handleNameChange = (value: string) => {
    setStudent({
      ...student,
      name: value,
    });
  };

  const handleCourseChange = (value: ICourse[]) => {
    setStudent({
      ...student,
      courses: value,
    });
  };

  const addStudent = () => {
    axios
      .post<IStudent>("http://localhost:3001/students/add", {
        student,
      })
      .then(() => {
        console.log(student)
        setStudent({ name: "", courses: [] });
      })
      .catch((error) => {
        alert("student name is already in use");
      });
  };

  return (
    <div className="addStudentWrapper">
      <div>
        <div className="pageTitle">Add A Student</div>
        <div className="field">
          <TextField
            id="standard-basic"
            label="name"
            variant="standard"
            value={student.name}
            onChange={(e) => {
              handleNameChange(e.target.value);
            }}
          />
        </div>
        <div className="">
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={coursesToDisplay}
            disableCloseOnSelect
            onChange={(event, value) => handleCourseChange(value)} // prints the selected value
            getOptionLabel={(option) => option.name}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox style={{ marginRight: 8 }} checked={selected} />
                {option.name}
              </li>
            )}
            style={{ width: "18rem" }}
            renderInput={(params) => (
              <TextField {...params} label="" placeholder="Courses" />
            )}
          />
        </div>
        <Button
          variant="contained"
          sx={{ backgroundColor: "darkcyan", marginTop: "2rem" }}
          onClick={() => {
            addStudent();
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddStudent;
