import express from "express";

const app = express();

app.use(express.json());

//todo
class User{
    name,
    password
}



const users: User[] = []

app.post('/login', (req, res) => {
    const { username, password } = req.body;


    if (username === 'myusername' && password === 'mypassword') {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});



app.use(express.static("./public"));

app.listen(3001, () => {
    console.log("server listen on port 3001");
});