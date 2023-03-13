import { ClassesService } from '../classes/classes.service';
import { Student } from './entities/student.entity';
import { StudentRepository } from './students.repository';
export declare class StudentsService {
    private readonly studentRepository;
    private readonly classService;
    constructor(studentRepository: StudentRepository, classService: ClassesService);
    findAll(): Promise<Student[]>;
    unAssignStudent(id: number, classId: number): Promise<[affectedCount: number]>;
    getAssignedStudents(classId: number): Promise<Student[]>;
    assignStudent(id: number, classId: number): Promise<[affectedCount: number]>;
    removeOne(id: number): Promise<number>;
}
