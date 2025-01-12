import CourseModel from "./coursesModel";
import StudentModel, {Student} from "../students/studentsModel";
import GradeModel, {Grade} from "../grades/gradesModel";


export const addCourse = async (req: any, res: any) => {
  try {

    const { course, studentId } = req.body;

    const student = await StudentModel.findById(studentId);
    if (!student) throw new Error("no student found");

    // const matchingNameCourses = await CourseModel.find({ name: course.name })
    // const courseDB = (matchingNameCourses.length > 0) ? matchingNameCourses[0] : await CourseModel.create({ name: course })

    const courseDB = await CourseModel.create({ name: course });

    student.courses.push(courseDB);
    await student.save();
    const students = await StudentModel.find({})

    res.status(201).send({ ok: true, students });

  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};


export const updateCourse = async (req: any, res: any) => {
  try {
    const { courseId, studentId, updatedCourse } = req.body;
    if (!courseId) throw new Error("No course Id in data");
    if (!studentId) throw new Error("No student Id in data");
    if (!updatedCourse) throw new Error("No updated Course in data");

    const student = await StudentModel.findById(studentId);
    if (!student) throw new Error("no student found");

    const course = await CourseModel.findById(courseId);
    if (!course) throw new Error("no course found");

    const updatedCourseDB = await CourseModel.updateOne({ courseId }, { name: updatedCourse });

    const _course = student.courses.find((course) => course._id?.toString() === courseId.toString())
    if (!_course) throw new Error("_course not found")
    _course.name = updatedCourse;

    await student.save();
    const students = await StudentModel.find({})

    res.send({ ok: true, students });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}



export const deleteCourse = async (req: any, res: any) => {
  try {
    const { courseId, studentId } = req.body;

    const student = await StudentModel.findById(studentId);
    if (!student) throw new Error("no student found");

    const course = await CourseModel.findById(courseId);
    if (!course) throw new Error("no course found");

    const courseIndex = student.courses.findIndex((course) => course._id?.toString() === courseId.toString());
    if ((!courseIndex) && (courseIndex !== 0)) throw new Error("course Index not found");

    student.courses.splice(courseIndex, 1);

    // const deletedCourse = await CourseModel.findOneAndDelete(courseId);

    await student.save();
    const students = await StudentModel.find({})

    res.send({ ok: true, students });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}


export const getStudentGradesInCourse = async (req: any, res: any) => {
  try {
    const { name: courseName } = req.query;

    const gradesInCourse: {student: Student, grades:Grade[]}[] = [];

    for await (const student of StudentModel.find()) {
      console.log("student", student);
      const matchingCourse = student.courses.find((c) => c.name === courseName);
      console.log("matchingCourse", matchingCourse);
      console.log("courseName", courseName);

      if (!matchingCourse) continue
      gradesInCourse.push({
        student: student,
        grades: matchingCourse.grades,
      })
    }
    console.log("gradesInCourse", gradesInCourse);

    res.send({ ok: true, gradesInCourse });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }
};


  //https://docs.oracle.com/en/cloud/saas/cx-commerce/21b/ccdev/rest-api-query-parameters.html