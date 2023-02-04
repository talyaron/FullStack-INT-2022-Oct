class User {
    uid:string;
    
        constructor(
            public name: string,
            public nickName: string,
            public pictureURL: string,
            public tasksArr:string[],

            
        ) {
         this.uid=uid();  
         }
    }
    const users: User[] = [];
    let availbleUsers: User[] = [];

    availbleUsers[0]=new User('shlomi','gunchi','test',availbleUsers[0].tasksArr.push("jkjbjkb");
    //availbleUsers[0].tasksArr.push("jkjbjkb"
    
    class Task {
    uid:string;
        constructor(
            public name: string,
            public category: string,
            public description: string,
            public dueDate: Date,
        ) {
         this.uid=uid();  
         }
    }
    const tasksDad:Task[]=[];
    const tasksMom:Task[]=[];
    const tasksDanny:Task[]=[];
    const tasksTommy:Task[]=[];
    const tasksDudi:Task[]=[];



    