import { ICourse } from "../Courses/ICourse";

export interface IStudent {
  name: string;
  _id?: number;
  courses?: ICourse[];
}
