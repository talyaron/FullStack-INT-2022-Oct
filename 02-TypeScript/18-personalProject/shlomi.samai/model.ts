class User {
    uid:string;
    
        constructor(
            public name: string,
            public nickName: string,
            public description: string,
            public pictureURL: string,
        ) {
         this.uid=uid();  
         }
        
    }
    
    const users: User[] = [];
    
    class Task {
    uid:string;
    
        constructor(
            public name: string,
            public category: string,
            public description: string,
            public dueDate: number,
        ) {
         this.uid=uid();  
         }
        
    }

    const tasks: Task[] = [];

    