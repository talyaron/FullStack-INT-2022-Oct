import { Class } from './entities/class.entity';
import { Student } from '../students/entities/student.entity';
export declare const classProviders: ({
    provide: string;
    useValue: typeof Class;
} | {
    provide: string;
    useValue: typeof Student;
})[];
