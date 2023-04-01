import  express  from "express";
import { uuid } from 'uuidv4';

const app = express();

//כדי לקבל נתונים מהלקוח הוסף שורה זו
app.use(express.json());

//data
class User{
    public uid:string =uuid();
    constructor(public name:string,public src:string){}
    getSimpleUser(){
    return {uid:this.uid, name: this.name, src: this.src};
    }
}

const users:User[] = [
new User("Joke","https://prod-progsite-s3.s3.eu-central-1.wasabisys.com/data/attachments/712/712140-89103713854801d8c2114901648649b6.jpg"),
new User("Joke","https://funny.yo-yoo.co.il/pics/images/uploads/94a688.jpg"),
];


//data rout
//לקבלget(from server)
app.get("/api/get-user",(rqe,res)=>{
    try {
        res.send({users});
    } catch (error:any) {
        console.error(error)
    res.status(500).send({error:error.messag});
    }
})

//add-להוסיף
app.post("/api/add-user",(rqe,res)=>{
    try {
       const {name, src} =rqe.body;
       console.log(name, src);
       users.push(new User(name, src));
       res.status(201).send({ok:true}); 
    } catch (error:any) {
        console.error(error);
        res.status(500).send({error:error.messag});
    }
})



//update
// update whole entity- להחליף את הכל -מעדכן את הכל
app.put("/api/update-user",(rqe ,res)=>{
    try {
        
    } catch (error:any) {
       console.error(error) 
       res.status(500).send({error:error.messag});
    }
});
//תיקון חלקי
app.patch("/api/update-user-name",(rqe, res)=>{
    try {
        const{name, uid} = rqe.body;
        if(!name)throw new Error("No name in data");
        if(!uid)throw new Error("No uid in data");
        const user = users.find((user)=> user.uid === uid);
        if(!user)throw new Error("No user in data");
        user.name = name;

        res.send({ok:true})
    } catch (error:any) {
        console.error(error);
        res.status(500).send({error:error.messag});
    }
});

app.delete("/api/delete-user",(rqe ,res)=>{
    try {
        const{uid}= rqe.body;
        if(!uid)throw new Error("no uid in data");
        const index = users.findIndex((user)=> user.uid === uid);
        if(index=== -1)throw new Error('couldnt find user in users, with ID ${uid}');
        users.splice(index, 1);
        const _users = users.map((user)=> user.getSimpleUser());
        res.send({ok:true,users:_users});
        
    } catch (error:any) {
        console.error(error);
        res.status(500).send({error:error.messag});
    }
});









app.use(express.static("./client"));

app.listen(3000,()=>{
    console.log("server listen on port 3000");
})
