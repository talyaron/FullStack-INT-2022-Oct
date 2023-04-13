import CourseModel from "../courses/coursesModel";
import StudentModel from "../students/studentsModel";
import GradeModel from "./gradesModel";

export const addGrade = async (req:any, res:any) => {
    try {
      const { courseId, studentId } = req.body;
      if (!courseId) throw new Error("No course Id in data");
      if (!studentId) throw new Error("No student Id in data");

      const student = await StudentModel.findById(studentId);
      if(!student) throw new Error("no student found");

      const course = await CourseModel.findById(courseId);
      if(!course) throw new Error("no course found"); 

      const courseIndex = student.courses.findIndex((course) => course._id?.toString() === courseId.toString());
      if(courseIndex !==0) throw new Error("no course index found");

      const gradeDB = await GradeModel.create({grade: undefined});
      student.courses[courseIndex].grades.push(gradeDB);

      await student.save();
      const students = await StudentModel.find({})
   
      res.status(201).send({ ok: true, students });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };

  
export const updateGrade = async (req:any, res:any) => {
    try {

      const { courseId, studentId, gradeId, updatedGrade } = req.body;
      if (!courseId) throw new Error("No course Id in data");
      if (!studentId) throw new Error("No student Id in data");
      if (!updatedGrade) throw new Error("No updated Course in data");

      const student = await StudentModel.findById(studentId);
      if(!student) throw new Error("no student found");

      const course = await CourseModel.findById(courseId);
      if(!course) throw new Error("no course found");

      const updatedGradeDB = await GradeModel.updateOne({gradeId}, {name: updatedGrade});

      const courseIndex = student.courses.findIndex((course) => course._id?.toString() === courseId.toString());
      if((!courseIndex) && (courseIndex!==0)) throw new Error ("course Index not found");

      const grade = student.courses[courseIndex].grades.find((grade)=> grade._id?.toString() === gradeId.toString());
      if(!grade) throw new Error ("grade not found");

      grade.grade = parseInt(updatedGrade);

      await student.save();
      const students = await StudentModel.find({});

      res.status(201).send({ ok: true, students });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }



  export const deleteGrade = async (req:any , res:any) => {
    try {
      const {courseId , studentId , gradeId} = req.body;

      console.log("studentId", studentId)
      
      const student = await StudentModel.findById(studentId);
      if(!student) throw new Error("no student found");

      const course = await CourseModel.findById(courseId);
      if(!course) throw new Error("no course found");

      const courseIndex = student.courses.findIndex((course) => course._id?.toString() === courseId.toString());
      if((!courseIndex) && (courseIndex!==0)) throw new Error ("course Index not found");

      const gradeIndex = student.courses[courseIndex].grades.findIndex((grade) => grade._id?.toString() === gradeId.toString());
      if((!gradeIndex) && (gradeIndex!==0)) throw new Error ("grade Index not found");
      student.courses[courseIndex].grades.splice(gradeIndex, 1);

      const deletedGrade = await GradeModel.findOneAndDelete(gradeId);
      
      await student.save();
      const students = await StudentModel.find({})
     
      res.send({ ok: true, students });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }