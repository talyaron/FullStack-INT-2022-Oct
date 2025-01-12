import StudentModel from "./studentsModel";

export const getStudents = async (req: any, res: any) => {
  try {
    const students = await StudentModel.find({});

    res.send(students);
    return students;
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const addStudent = async (req: any, res: any) => {
  try {
    const { student } = req.body;
    const students = await StudentModel.find({});

    let isExist = students?.find((elememt) => elememt._id == student._id);
    if (isExist !== undefined) {
      throw new Error("student already exists");
    }
    const studentDB = await StudentModel.create({
      name: student.name,
      courses: student.courses,
    });

    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const updateStudentName = async (req: any, res: any) => {
  try {
    const { _id, updatedName } = req.body;
    if (!_id) throw new Error("No _id in data");
    if (!updatedName) throw new Error("No updated Name in data");

    const student = await StudentModel.findById(_id);
    if (!student) throw new Error("no student found");

    const updatedNameDB = await StudentModel.updateOne(
      { _id },
      { name: updatedName }
    );

    await student.save();
    const students = await StudentModel.find({});

    res.send({ ok: true, students });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const deleteStudent = async (req: any, res: any) => {
  try {
    const { _id } = req.params;
    const deletedStudent = await StudentModel.deleteOne({ _id });
    const students = await StudentModel.find({});

    res.send({ ok: true, students });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

// export const getStudentGradesInCourse = async (req: any, res: any) => {
//     try {
//       //got from the client
//       const { courseId, studentId } = req.query;
//       //https://docs.oracle.com/en/cloud/saas/cx-commerce/21b/ccdev/rest-api-query-parameters.html

//       const grades = await GradeModel.find({
//         course: { _id: courseId },
//         user: { _id: studentId },
//       });
//       res.send({ grades });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send({ error: error.message });
//     }
//   };
