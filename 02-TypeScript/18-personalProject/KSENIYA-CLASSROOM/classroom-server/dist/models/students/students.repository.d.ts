import { ModelStatic } from 'sequelize';
import { Student } from '../students/entities/student.entity';
export declare class StudentRepository {
    studentModel: ModelStatic<Student>;
    constructor(studentModel: ModelStatic<Student>);
    findAll(): Promise<Student[]>;
    getAssignedStudents(classId: number): Promise<Student[]>;
    assignStudent(tz: number, classId: number): Promise<[affectedCount: number]>;
    unAssignStudent(tz: number, classId: number): Promise<[affectedCount: number]>;
    removeOne(tz: number): Promise<number>;
}
