class User {
   
        uid: string;
        
        constructor(
          public name: string,
          public lastName: string,
          public email: number,
        ) {
          this.uid = uid();
        }
      }
      const users:User[] = [];
      
class Recipe {
    uid: string;
    constructor(
        public sort: string,
        public name: string,
        public ingredients: string,
        public preparation: string,
        public image: string,
        public user?: string,
      ) {
        this.uid = uid();
      }
    }
const recipes:Recipe[] = []
