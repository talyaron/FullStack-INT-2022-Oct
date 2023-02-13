// Constraint
import { Class } from './entities/class.entity';

// External libraries
import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';

import { ModelStatic, Op } from 'sequelize';
import { Student } from '../students/entities/student.entity';
import { CLASS } from 'src/common/constants';

@Injectable()
export class ClassRepository {
  constructor(@Inject(CLASS) public classModel: ModelStatic<Class>) {}

  async findAll() {
    return this.classModel.findAll({
      include: [
        {
          model: Student,
        },
      ],
    });
  }

  async findOne(classId: number) {
    return this.classModel.findByPk(classId);
  }

  incrementSeats(classId: number){
    Class.increment('availableSeats', {
      by: 1,
      where: {classId}
    })
  }

  decrementSeats(classId: number){
    Class.decrement('availableSeats', {
      by: 1,
      where: {classId}
    })
  }

  availableClasses() {
    return this.classModel.findAll({
      where: {
        availableSeats: { [Op.gt]: 0 },
      },
    });
  }

  removeOne(classId: number) {
    return this.classModel.destroy({
      where: {
        classId,
      },
    });
  }
}
