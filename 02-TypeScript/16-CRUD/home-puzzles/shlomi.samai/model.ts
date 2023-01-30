class Person {
uid:string;

    constructor(
        public name: string,
        public address: string,
        public email: string,
        public phone: number,
        public password: string,
        public preferedColor: string,
        public pictureURL: string,
    ) {
     this.uid=uid();  
     }
    
}

const people: Person[] = [];

console.log(people)