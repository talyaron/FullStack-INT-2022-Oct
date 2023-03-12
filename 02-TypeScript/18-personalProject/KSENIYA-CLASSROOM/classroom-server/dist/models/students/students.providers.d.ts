import { Student } from './entities/student.entity';
import { Class } from '../classes/entities/class.entity';
export declare const studentProviders: ({
    provide: string;
    useValue: typeof Student;
} | {
    provide: string;
    useValue: typeof Class;
})[];
