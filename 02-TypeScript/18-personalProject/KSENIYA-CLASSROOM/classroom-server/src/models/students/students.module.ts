import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { StudentRepository } from './students.repository';
import { studentProviders } from './students.providers';
import { ClassesService } from '../classes/classes.service';
import { ClassRepository } from '../classes/classes.repository';
import { classProviders } from '../classes/class.providers';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService, StudentRepository, ...studentProviders,
    ClassesService,
    ClassRepository,
    ...classProviders,],
})
export class StudentsModule {}
