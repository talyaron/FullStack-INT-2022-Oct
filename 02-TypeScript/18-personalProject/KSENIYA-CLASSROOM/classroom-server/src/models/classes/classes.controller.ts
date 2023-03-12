import { Controller, Get, Param, Delete, Post } from '@nestjs/common';
import { ClassesService } from './classes.service';


@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}


  @Get('/all')
  findAll() {
    return this.classesService.findAll();
  }

  @Get('available')
  availableClasses(){
    return this.classesService.availableClasses()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classesService.findOne(+id);
  }

 @Delete(':id')
 removeOne(@Param('id') id:string) {
  return this.classesService.removeOne(+id)
 }
}
