//react
import { FC, useEffect, useState } from "react";

//axios
import axios from "axios";

//react router
import { useHistory } from "react-router-dom";

//interfaces
import { ICourse } from "./ICourse";
import { IStudent } from "../Students/IStudent";

//consts
import { ADD_COURSE_ROUTE } from "../../consts/routes";

//mui
import { Button } from "@mui/material";

//css
import "./Courses.css";

const Courses: FC = () => {
  const history = useHistory();

  const [courses, setCourses] = useState<ICourse[]>([] as ICourse[]);

  const [students, setStudents] = useState<IStudent[]>([] as IStudent[]);

  const [isDoneLoading, setIsDoneLoading] = useState(false);

  useEffect(() => {
    const getAllCourses = async () => {
      return await axios.get<ICourse[]>("http://localhost:3001/courses/all");
    };

    const getAllStudents = async () => {
      return await axios.get<IStudent[]>("http://localhost:3001/students/all");
    };

    Promise.all([getAllCourses(), getAllStudents()]).then(
      ([courses, students]) => {
        setCourses(courses.data);
        setStudents(students.data);
        setIsDoneLoading(true);
      }
    );
  }, []);


  const deleteCourse = (_id: number) => {
    axios
    .delete<{ courses: ICourse[] }>(
      `http://localhost:3001/courses/delete/${_id}`
    )
    .then(({ data }) => {
      setCourses(data.courses);
      console.log(courses)
    });
  }

  return (
    <div>
      <div className="addCourseBtn">
        <div className="subTitle">Currently Ongoing Courses Are:</div>
        <Button
          variant="contained"
          sx={{ backgroundColor: "darkcyan" }}
          onClick={() => {
            history.push(ADD_COURSE_ROUTE);
          }}
        >
          Add a course
        </Button>
      </div>
      {isDoneLoading && (
        <div className="coursesWrapper">
          {courses.map((course, index) => (
            <div key={index} className="singleCourseWrapper">
              <div className="singleCourse"> - {course.name} </div>
              <Button
                variant="contained"
                sx={{ backgroundColor: "darkcyan" }}
                onClick={() => {
                  deleteCourse(course._id!)
                }}
              >
               delete
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
