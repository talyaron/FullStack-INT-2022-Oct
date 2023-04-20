//react
import { FC, useState } from "react";

//axios
import axios from "axios";

//interfaces
import { ICourse } from "../Courses/ICourse";

//mui
import { Button, TextField } from "@mui/material";

//css
import "./AddCourse.css";

const AddCourse: FC = () => {
  const [course, setCourse] = useState<ICourse>({
    name: "",
    students: [],
  });

  const handleNameChange = (value: string) => {
    setCourse({
      ...course,
      name: value,
    });
  };

  const addCourse = () => {
    axios
      .post("http://localhost:3001/courses/add", { course })
      .then(() => {
        setCourse({ name: "" });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="addCourseWrapper">
        <div className="title">Add A New Course</div>
        <TextField
          id="outlined-basic"
          label="course name"
          variant="outlined"
          value={course.name}
          onChange={(e) => {
            handleNameChange(e.target.value);
          }}
        />
      <div>
        <Button
          variant="contained"
          sx={{ backgroundColor: "darkcyan", marginTop: "2rem" }}
          onClick={() => {
            addCourse();
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default AddCourse;
