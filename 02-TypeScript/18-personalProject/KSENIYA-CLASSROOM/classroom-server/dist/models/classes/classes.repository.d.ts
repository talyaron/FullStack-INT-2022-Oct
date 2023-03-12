import { Class } from './entities/class.entity';
import { ModelStatic } from 'sequelize';
export declare class ClassRepository {
    classModel: ModelStatic<Class>;
    constructor(classModel: ModelStatic<Class>);
    findAll(): Promise<Class[]>;
    findOne(classId: number): Promise<Class>;
    incrementSeats(classId: number): void;
    decrementSeats(classId: number): void;
    availableClasses(): Promise<Class[]>;
    removeOne(classId: number): Promise<number>;
}
