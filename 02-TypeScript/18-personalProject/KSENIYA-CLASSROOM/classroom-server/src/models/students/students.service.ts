import { Injectable, NotFoundException } from '@nestjs/common';
import { ClassesService } from '../classes/classes.service';
import { Student } from './entities/student.entity';
import { StudentRepository } from './students.repository';

@Injectable()
export class StudentsService {
  constructor(
    private readonly studentRepository: StudentRepository,
    private readonly classService: ClassesService,
  ) {}

  async findAll() {
    const students: Student[] = await this.studentRepository.findAll();
    if (!students.length) throw new NotFoundException('Classes not found');
    return students;
  }

  unAssignStudent(id: number, classId: number) {
    return this.studentRepository.unAssignStudent(id, classId);
  }

  getAssignedStudents(classId: number) {
    return this.studentRepository.getAssignedStudents(classId);
  }

  assignStudent(id: number, classId: number) {
    this.classService.decrementSeats(classId);
    return this.studentRepository.assignStudent(id, classId);
  }

  removeOne(id: number) {
    return this.studentRepository.removeOne(id);
  }
}
