class Post {
    uid:string;
    
        constructor(
            public name: string,
            public BigPictureURL: string,
            public smallPictureURL: string,
        ) {
         this.uid=uid();  
         }
        
    }


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
const posts: Post[] = [];
console.log(people)



