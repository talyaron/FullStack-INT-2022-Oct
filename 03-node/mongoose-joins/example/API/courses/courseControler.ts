import StudentModel from "../../../../08-mongoose-design/HomePuzzle/itayAmosi/API/students/studentsModel";
import UserModel from "../users/usersModel";
import CourseModel, {ExamModel,GradeModel} from "./coursesModel";

export const createCourse = async (req:any, res:any) => {
  try {
    const {name} = req.body;
    const courseDB = await CourseModel.create({name});
    res.send({course:courseDB})
  } catch (error:any) {
    console.error(error);
      res.status(500).send({ error: error.message });
  }
};

export const createExam = async (req:any, res:any) => {
    try {
      const {name, topic, courseId} = req.body;

      const courseDB = await CourseModel.findById(courseId);
      if(!courseDB) throw new Error('Couldnt find course');

      const examDB = await ExamModel.create({name, topic, course:courseDB})

    
      res.send({exam:examDB})
    } catch (error:any) {
      console.error(error);
        res.status(500).send({ error: error.message });
    }
  };

  export const createGrade = async (req:any, res:any) => {
    try {
      const {grade, userId,courseId , examId} = req.body;

      const [courseDB,userDB,examDB ] = await Promise.all([CourseModel.findById(courseId),UserModel.findById(userId),ExamModel.findById(examId) ])

      if(!courseDB) throw new Error('Couldnt find course');
      if(!userDB) throw new Error('Couldnt find user');
      if(!examDB) throw new Error('Couldnt find exam');

      const GradeDB = await GradeModel.create({student:userDB, course:courseDB, exam:examDB, grade})

    
      res.send({grade:GradeDB})
    } catch (error:any) {
      console.error(error);
        res.status(500).send({ error: error.message });
    }
  };

  export const getStudentGradesInCourse = async (req:any, res:any) => {
    try {
      const { studentId,courseId} = req.query;
      
      const gradesDB = await StudentModel.find({student:studentId, course:courseId})
      console.log(gradesDB)
     //{student:{_id:userId}, course:{_id:courseId}

    console.log(gradesDB)
      res.send({grades:gradesDB})
    } catch (error:any) {
      console.error(error);
        res.status(500).send({ error: error.message });
    }
  };
