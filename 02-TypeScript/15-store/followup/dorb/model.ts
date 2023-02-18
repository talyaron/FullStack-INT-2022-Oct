class User {
    uID:string
    constructor(
        public name:string,
        public adress:string,
        public email:string,
        public phone:number,
        public password:number,
        public color:any,
        public img:any
         ){
        this.uID = uID();
    }
    
}

const users:User[] = [];
console.log(users);
