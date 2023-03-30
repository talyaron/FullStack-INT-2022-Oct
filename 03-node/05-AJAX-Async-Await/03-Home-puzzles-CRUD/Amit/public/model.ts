class Student {
    public grades: Grade[] = [];
      constructor(
          public name: string,
          public uid?: string,
          ) {}
  
    getSimpleStudent() {
      return { uid: this.uid, name: this.name, grades: this.grades };
    }
  }
  
class Grade {
    constructor(
        public test: string,
        public value: number,
        public uid?: string,
        ) {}

    getSimpleGrade() {
    return { uid: this.uid, test: this.test, grades: this.value };
    }
}
  