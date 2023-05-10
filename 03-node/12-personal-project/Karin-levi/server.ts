import express from "express";

const app = express();

app.use(express.json());

//todo





const users = new Map();
users.set("1", "1")

app.post('/login', (req, res) => {
    const { username, password } = req.body;


    if (users.has(username) && users.get(username) === password) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});



app.use(express.static("./public"));

app.listen(3001, () => {
    console.log("server listen on port 3001");
});