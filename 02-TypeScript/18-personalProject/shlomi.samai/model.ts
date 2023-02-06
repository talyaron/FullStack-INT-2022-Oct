class User {
    uid:string;
    //tasks:string[]=[];
    taskObjArr:Task[]=[];
        constructor(
            public name: string,
            public nickName: string,
            public pictureURL: string,
        ) {
         this.uid=uid();  
         }
    }
    
    class Task {
        uid:string;
            constructor(
                public name: string,
                public category: string,
                public description: string,
                //public dueDate: Date,
            ) {
             this.uid=uid();  
             }
        }
    
    const users: User[] = [];
    let availbleUsers: User[] = [];
    
    availbleUsers.push(new User('shlomi','gunchi','test'));
   // availbleUsers[0].tasks.push("firstTask")
    availbleUsers[0].taskObjArr.push(new Task("laundry","home","dirty clothes"))
    
    //reviews:UserReview[]=[];
    //availbleUsers[0]=new User('shlomi','gunchi','test',availbleUsers[0].tasksArr.push("jkjbjkb");
    //availbleUsers[0].tasksArr.push("jkjbjkb"
    

    // const tasksDad:Task[]=[];
    // const tasksMom:Task[]=[];
    // const tasksDanny:Task[]=[];
    // const tasksTommy:Task[]=[];
    // const tasksDudi:Task[]=[];



    