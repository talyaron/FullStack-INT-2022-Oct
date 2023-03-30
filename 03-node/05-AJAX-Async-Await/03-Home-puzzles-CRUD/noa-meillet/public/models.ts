class Teacher {
    constructor(public name: string, public password:string, public subject: Subject, public uid?: string) {}
    }
  
  class Student {

      constructor(public name: string, public password: string, public grades?: Grade[], public uid?: string) {}
    }
  
    class Subject {

      constructor(public name: string, public uid?: string) {}
  }
  
  class Grade {

      constructor(public subject: Subject, public student:Student, public task?:string, public grade?:number, public uid?: string) {}
  
      getSimpleGrade() {
          return { uid: this.uid, subject: this.subject ,grade: this.grade, student: this.student };
        }
  }
  
  const subjects: Subject[] = [
      new Subject("Math"),
      new Subject("Biology"),
      new Subject("English")
    ];
  
  const teachers: Teacher[] = [
    new Teacher("Yariv Edri", "yariv", subjects[0]),
    new Teacher("Ruti Gabay", "ruti", subjects[1]),
    new Teacher("Ofra Zror", "ofra", subjects[2])
  ];
  
  const students:Student[] = [
      new Student("Noa Meillet", "noa"),
      new Student("Sagiv Kelly", "sagiv"),
      new Student("Amit Vaknin", "amit")
  ]
  
  const grades: Grade[] = [
      new Grade(subjects[0],students[0],"homework",94),
      new Grade(subjects[0],students[1],"homework",93),
      new Grade(subjects[0],students[2],"finals"),
      new Grade(subjects[1],students[0]),
      new Grade(subjects[1],students[1],"project"),
      new Grade(subjects[1],students[2],"project",83),
      new Grade(subjects[2],students[0]),
      new Grade(subjects[2],students[1],"project"),
      new Grade(subjects[2],students[2],"homework",89)
  ];
  
  
  function getGradesBySubject(subjectToGet:Subject){
      return grades.filter((subject)=> subject.subject==subjectToGet)
  }