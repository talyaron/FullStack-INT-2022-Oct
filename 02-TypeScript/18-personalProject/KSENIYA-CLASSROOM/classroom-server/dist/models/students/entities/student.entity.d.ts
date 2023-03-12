import { Model } from 'sequelize-typescript';
import { Class } from 'src/models/classes/entities/class.entity';
import { IStudent } from '../interfaces/student.interface';
export declare class Student extends Model<Student> implements IStudent {
    tz: number;
    firstName: string;
    lastName: string;
    profession: string;
    age: number;
    classId: number;
    Classes: Class[];
}
