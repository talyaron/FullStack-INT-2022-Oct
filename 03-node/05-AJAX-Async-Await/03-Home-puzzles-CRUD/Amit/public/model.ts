class Student {
    public grades: Grade[] = [];
      constructor(
          public name: string,
          public _id?: string,
          ) {}
  
    getSimpleStudent() {
      return { _id: this._id, name: this.name, grades: this.grades };
    }
  }
  
class Grade {
    constructor(
        public test: string,
        public value: number,
        public _id?: string,
        ) {}

    getSimpleGrade() {
    return { _id: this._id, test: this.test, grades: this.value };
    }
}
  