import Classes from "../pages/Classes/Classes";
import Students from "../pages/Students/Students";
import Create from "../pages/Create/Create";

import { CLASSES_PATH, CREATE_PATH, STUDENTS_PATH } from "../consts/routes";

const RouteMaster = [
  {
    path: CLASSES_PATH,
    component: Classes,
  },
  {
    path: CREATE_PATH,
    component: Create,
  },
  {
    path: STUDENTS_PATH,
    component: Students,
  },
];
export default RouteMaster;
