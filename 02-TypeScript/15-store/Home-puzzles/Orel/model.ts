class User {
    uID: string 
     constructor(
         public fullName:string , 
         public address:string ,
         public email: string, 
         public phone : string ,
         public password :string
         ){
         this.uID = uid();
     }
}

let users:User[] = [];

