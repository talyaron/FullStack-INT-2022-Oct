import GradeModel from "./gradesModel";

export const getStudentGradesInCourse = async (req: any, res: any) => {
  try {
    //got from the client
    const { courseId, studentId } = req.query;

    const grades = await GradeModel.find({
      course: { _id: courseId },
      user: { _id: studentId },
    });
    res.send({ grades });
    console.log(grades);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};