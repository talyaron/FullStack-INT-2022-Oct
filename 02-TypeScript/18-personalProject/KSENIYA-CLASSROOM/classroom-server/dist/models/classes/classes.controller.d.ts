import { ClassesService } from './classes.service';
export declare class ClassesController {
    private readonly classesService;
    constructor(classesService: ClassesService);
    findAll(): Promise<import("./entities/class.entity").Class[]>;
    availableClasses(): Promise<import("./entities/class.entity").Class[]>;
    findOne(id: string): Promise<import("./entities/class.entity").Class>;
    removeOne(id: string): Promise<number>;
}
