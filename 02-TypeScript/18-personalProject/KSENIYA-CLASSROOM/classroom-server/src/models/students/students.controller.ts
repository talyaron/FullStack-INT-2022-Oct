import { Controller, Get, Param, Delete, Post } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get('/all')
  findAll() {
    return this.studentsService.findAll();
  }

  @Post('/tz/:id/classId/:classId')
  unAssignStudent(@Param('id') id: string, @Param('classId') classId: string) {
    return this.studentsService.unAssignStudent(+id, +classId) ;
  }

  @Post('/tz/:id/classId/:classId')
  assignStudent(@Param('id') id:string, @Param('classId') classId: string){
    return this.studentsService.assignStudent(+id, +classId)
  }

  @Delete(':id')
 removeOne(@Param('id') id:string) {
  return this.studentsService.removeOne(+id)
 }
}
