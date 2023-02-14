import {
    Table,
    Model,
    Column,
    HasMany,
    DataType,
    PrimaryKey,
  } from 'sequelize-typescript';
import { Student } from 'src/models/students/entities/student.entity';
import { IClass } from '../interfaces/classes.interface';
  
  
  @Table({ tableName: 'Classes', updatedAt: false, createdAt: false })
  export class Class extends Model<Class> implements IClass {
    @PrimaryKey
    @Column({ type: DataType.INTEGER })
    public classId: number;
  
    @Column({ type: DataType.TEXT })
    public className: string;
  
    @Column({ type: DataType.INTEGER })
    public classSeats: number;
  
    @Column({ type: DataType.INTEGER })
    public availableSeats: number;
  
    @HasMany(() => Student)
    public students: Student[];
  }
  