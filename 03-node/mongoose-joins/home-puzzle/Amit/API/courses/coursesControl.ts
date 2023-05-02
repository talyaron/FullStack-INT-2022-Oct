import CourseModel, { CourseStudentModel } from "./coursesModel";
import StudentModel, {Student} from "../students/studentsModel";
import GradeModel, {Grade} from "../grades/gradesModel";
import { log } from "console";


export const addCourse = async (req: any, res: any) => {
  try {

    const { course, studentId } = req.body;

    const _student = await StudentModel.findById(studentId);
    if (!_student) throw new Error("no student found");
    if (!course) throw new Error("No course found");

    const courseDB = await CourseModel.create({ name: course });

    const courseStudentConnection = await CourseStudentModel.create({ student: _student  , course: courseDB });

    // await _student.save();
    // const students = await StudentModel.find({})

    console.log("courseStudentConnection", courseStudentConnection);

    // res.status(201).send({ ok: true, students });
    res.status(201).send({ ok: true });

  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};


export const updateCourse = async (req: any, res: any) => {
  try {
    // const { courseId, studentId, updatedCourse } = req.body;
    // if (!courseId) throw new Error("No course Id in data");
    // if (!studentId) throw new Error("No student Id in data");
    // if (!updatedCourse) throw new Error("No updated Course in data");

    // const student = await StudentModel.findById(studentId);
    // if (!student) throw new Error("no student found");

    // const course = await CourseModel.findById(courseId);
    // if (!course) throw new Error("no course found");

    // const updatedCourseDB = await CourseModel.updateOne({ courseId }, { name: updatedCourse });

    // const _course = student.courses.find((course) => course._id?.toString() === courseId.toString())
    // if (!_course) throw new Error("_course not found")
    // _course.name = updatedCourse;

    // await student.save();
    // const students = await StudentModel.find({})

    // res.send({ ok: true, students });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}



export const deleteCourse = async (req: any, res: any) => {
  try {
    // const { courseId, studentId } = req.body;

    // const student = await StudentModel.findById(studentId);
    // if (!student) throw new Error("no student found");

    // const course = await CourseModel.findById(courseId);
    // if (!course) throw new Error("no course found");

    // const courseIndex = student.courses.findIndex((course) => course._id?.toString() === courseId.toString());
    // if ((!courseIndex) && (courseIndex !== 0)) throw new Error("course Index not found");

    // student.courses.splice(courseIndex, 1);

    // await student.save();
    // const students = await StudentModel.find({})

    // res.send({ ok: true, students });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}


export const getStudentGradesInCourse = async (req: any, res: any) => {
  try {
    // const { name: courseName } = req.query;

    // const gradesInCourse: {student: Student, grades:Grade[]}[] = [];

    // for await (const student of StudentModel.find()) {
    //   console.log("student", student);
    //   const matchingCourse = student.courses.find((c) => c.name === courseName);
    //   console.log("matchingCourse", matchingCourse);
    //   console.log("courseName", courseName);

    //   if (!matchingCourse) continue
    //   gradesInCourse.push({
    //     student: student,
    //     grades: matchingCourse.grades,
    //   })
    // }
    // console.log("gradesInCourse", gradesInCourse);

    // res.send({ ok: true, gradesInCourse });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }
};


  //https://docs.oracle.com/en/cloud/saas/cx-commerce/21b/ccdev/rest-api-query-parameters.html