import { StudentsService } from './students.service';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    findAll(): Promise<import("./entities/student.entity").Student[]>;
    unAssignStudent(id: string, classId: string): Promise<[affectedCount: number]>;
    assignStudent(id: string, classId: string): Promise<[affectedCount: number]>;
    removeOne(id: string): Promise<number>;
}
