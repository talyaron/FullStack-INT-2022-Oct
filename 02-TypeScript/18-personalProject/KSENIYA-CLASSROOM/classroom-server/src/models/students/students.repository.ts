import { Inject, Injectable } from '@nestjs/common';
import { ModelStatic } from 'sequelize';
import { STUDENT } from 'src/common/constants';
import { Class } from '../classes/entities/class.entity';
import { Student } from '../students/entities/student.entity';

@Injectable()
export class StudentRepository {
  constructor(@Inject(STUDENT) public studentModel: ModelStatic<Student>) {}

  async findAll() {
    return this.studentModel.findAll({
      include: [
        {
          model: Class,
        },
      ],
    });
  }

  getAssignedStudents(classId: number) {
    return this.studentModel.findAll({ where: { classId } });
  }

  assignStudent(tz: number, classId: number) {
    return this.studentModel.update({ classId }, { where: { tz } });
  }

  unAssignStudent(tz: number, classId: number) {
    return this.studentModel.update({ classId: null }, { where: { tz } });
  }

  removeOne(tz: number) {
    return this.studentModel.destroy({
      where: {
        tz,
      },
    });
  }
}
