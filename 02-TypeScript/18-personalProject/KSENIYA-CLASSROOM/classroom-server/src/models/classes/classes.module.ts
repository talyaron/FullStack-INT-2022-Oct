import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';
import { ClassRepository } from './classes.repository';
import { classProviders } from './class.providers';
import { StudentsService } from '../students/students.service';
import { StudentRepository } from '../students/students.repository';
import { studentProviders } from '../students/students.providers';

@Module({
  controllers: [ClassesController],
  providers: [
    ClassesService,
    ClassRepository,
    ...classProviders,
  ],
})
export class ClassesModule {}
