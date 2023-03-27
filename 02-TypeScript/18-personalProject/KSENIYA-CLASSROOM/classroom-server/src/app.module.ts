import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassesModule } from './models/classes/classes.module';
import { StudentsModule } from './models/students/students.module';
import { DatabaseModule } from './providers/database';

@Module({
  imports: [ClassesModule, StudentsModule,DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
