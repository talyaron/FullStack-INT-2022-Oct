import { readFileSync, writeFile } from "fs";
import { json } from "stream/consumers";
// import util from "util";
import { uuid } from "uuidv4";

class Student {
  public uuid: string;
  constructor(public name: string, public grades: number[]) {
    this.uuid = uuid();
  }
  addGrade(grade: number) {
    this.grades.push(grade);
  }
}

const students = readFileSync('studentList.json', 'utf-8')

console.log(json(students));
