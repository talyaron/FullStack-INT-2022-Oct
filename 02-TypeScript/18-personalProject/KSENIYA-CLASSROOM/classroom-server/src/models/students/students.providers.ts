// Shift
import { Student } from './entities/student.entity';

// Constants
import {  CLASS, STUDENT } from '../../common/constants';
import { Class } from '../classes/entities/class.entity';

export const studentProviders = [
  {
    provide: STUDENT,
    useValue: Student,
  },
  {
    provide: CLASS,
    useValue: Class,
  },
];
