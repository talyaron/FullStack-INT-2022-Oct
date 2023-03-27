import { Model } from 'sequelize-typescript';
import { Student } from 'src/models/students/entities/student.entity';
import { IClass } from '../interfaces/classes.interface';
export declare class Class extends Model<Class> implements IClass {
    classId: number;
    className: string;
    classSeats: number;
    availableSeats: number;
    students: Student[];
}
