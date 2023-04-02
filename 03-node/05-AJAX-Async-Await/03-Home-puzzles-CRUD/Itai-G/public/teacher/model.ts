
import { v4 as uuidv4 } from 'uuid';

export class Teacher {
    public uid: string = uuidv4();
    constructor(
      public name: string,
      public password: number,
    ) {}
  
    getSimple() {
      return {
        uid: this.uid,
        name: this.name,
        password: this.password
      };
    }
  }