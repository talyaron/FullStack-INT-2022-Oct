// Shift
import { Class } from './entities/class.entity';

// Constants
import { CLASS, STUDENT } from '../../common/constants';
import { Student } from '../students/entities/student.entity';

export const classProviders = [
  {
    provide: CLASS,
    useValue: Class,
  },
  {
    provide: STUDENT,
    useValue: Student,
  },
];
