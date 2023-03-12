import { ClassRepository } from './classes.repository';
import { Class } from './entities/class.entity';
export declare class ClassesService {
    private readonly classRepository;
    constructor(classRepository: ClassRepository);
    findAll(): Promise<Class[]>;
    incrementSeats(classId: number): void;
    decrementSeats(classId: number): void;
    findOne(classId: number): Promise<Class>;
    availableClasses(): Promise<Class[]>;
    removeOne(classId: number): Promise<number>;
}
