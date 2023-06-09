import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { IStudent } from '../students/interfaces/student.interface';
import { StudentsService } from '../students/students.service';
import { ClassRepository } from './classes.repository';
import { Class } from './entities/class.entity';
import { IClass } from './interfaces/classes.interface';

@Injectable()
export class ClassesService {
  constructor(private readonly classRepository: ClassRepository) {}

  async findAll() {
    const classes: Class[] = await this.classRepository.findAll();
    if (!classes.length) throw new NotFoundException('Classes not found');
    return classes;
  }

  incrementSeats(classId: number) {
    this.classRepository.incrementSeats(classId);
  }

  decrementSeats(classId: number) {
    this.classRepository.incrementSeats(classId);
  }

  findOne(classId: number) {
    return this.classRepository.findOne(classId);
  }
  availableClasses() {
    return this.classRepository.availableClasses();
  }

  async removeOne(classId: number) {
    const currClass = await this.findOne(classId);
    if (currClass.availableSeats > 0)
      throw new Error('Class has assigned students');
    return this.classRepository.removeOne(classId);
  }
}
