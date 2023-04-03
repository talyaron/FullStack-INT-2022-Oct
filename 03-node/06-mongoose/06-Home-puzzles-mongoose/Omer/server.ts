import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = 3000;
const uri: string | undefined = process.env.MONGOOSE_URI;
const { Schema } = mongoose;

try {
    if (!uri) throw new Error("uri not defined");
    mongoose.connect((uri as string)).then(() => {
        console.log('Data base connected');
    }).catch((error) => {
        console.error(error);
    })
} catch (error) {
    console.error(error);
}

const UserSchema = new Schema({
    name: String,
    email: String
});

const UserModel = mongoose.model('Users', UserSchema);

app.use(express.static('./public'));

app.use(express.json());

app.post("/api-add-user", async (req, res) => {
    try {
        const { name, email } = req.body;
        console.log(name + " " + email);
        
        const user = await UserModel.create({ name, email });
        console.log(user);
        const allUsers = await UserModel.find({});
        res.status(201).send(allUsers)
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }

})

app.get("/api-get-users", async (req,res) => {
    try {
        const allUsers = await UserModel.find({});
        // console.log(allUsers);
    
        res.status(200).send(allUsers)
    } catch (error) {
        console.error(error);
    }

})

app.delete("/api-delete", async (req,res) => {
    try {
        const _id = req.body;        
        const deleteUser = await UserModel.deleteOne({_id});
        const allUsers = await UserModel.find({});
        res.status(200).send(allUsers);
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
})

app.patch("/api-update", async (req,res) => {
    try {
        console.log("SUCCESSSSS");
        const {name,email,_id} = req.body;
        const user = await UserModel.findById(_id)
        
        if(!user) throw new Error("user not found");
        user.name = name;
        user.email = email;
        await user.save();
        const allUsers = await UserModel.find({});
        
        res.status(200).send(allUsers);
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
})


app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));