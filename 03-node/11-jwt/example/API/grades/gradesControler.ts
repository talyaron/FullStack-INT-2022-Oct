import GradeModel from "./gradesModel";

export const getStudentGradesInCourse = async (req: any, res: any) => {
  try {
    //got from the client
    const { courseId, studentId } = req.query;
    //https://docs.oracle.com/en/cloud/saas/cx-commerce/21b/ccdev/rest-api-query-parameters.html

    const grades = await GradeModel.find({
      course: { _id: courseId },
      user: { _id: studentId },
    });
    res.send({ grades });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
