import { IGrade } from "../Grades/IGrade";
import { IStudent } from "../Students/IStudent";

export interface ICourse {
    name: string;
    students?: IStudent[]
    _id?: number
    grade: IGrade
}