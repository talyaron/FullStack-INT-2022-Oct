import { NextFunction, Response, Request } from 'express';
import Student from '../models/studentModel';

const createStudent = (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;

    const student = new Student({ name });

    return student
        .save()
        .then((student) => res.status(201).json({ student }))
        .catch((error) => res.status(500).json({ error }));
};

const readStudent = (req: Request, res: Response, next: NextFunction) => {
    const studentID = req.params.studentId;

    return Student.findById(studentID)
        .then((student) => (student ? res.status(200).json({ student }) : res.status(404).json({ msg: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAll = (req: Request, res: Response, next: NextFunction) => {
    return Student.find()
        .then((students) => res.status(200).json({ students }))
        .catch((error) => res.status(500).json({ error }));
};

const updateStudent = (req: Request, res: Response, next: NextFunction) => {
    const studentID = req.params.studentId;

    return Student.findById(studentID)
        .then((student) => {
            if (student) {
                student.set(req.body);

                return student
                    .save()
                    .then((student) => res.status(201).json({ student }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                res.status(404).json({ msg: 'Not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

const deleteStudent = (req: Request, res: Response, next: NextFunction) => {
    const studentID = req.params.studentId;

    return Student.findByIdAndDelete(studentID)
        .then((student) => (student ? res.status(201).json({ msg: 'deleted' }) : res.status(404).json({ msg: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createStudent, readAll, readStudent, updateStudent, deleteStudent };
