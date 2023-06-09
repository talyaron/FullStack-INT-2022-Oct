import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Class } from 'src/models/classes/entities/class.entity';
import { IStudent } from '../interfaces/student.interface';

@Table({ tableName: 'Students', updatedAt: false, createdAt: false })
export class Student extends Model<Student> implements IStudent {
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  public tz: number;

  @Column({ type: DataType.TEXT })
  public firstName: string;

  @Column({ type: DataType.TEXT })
  public lastName: string;

  @Column({ type: DataType.TEXT })
  public profession: string;

  @Column({ type: DataType.INTEGER })
  public age: number;

  @ForeignKey(() => Class)
  @Column({ type: DataType.INTEGER })
  public classId: number;

  @BelongsTo(() => Class)
  Classes: Class[];
}
