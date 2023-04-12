"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv"); // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
var uri = process.env.MONGODB_URI;
if (uri) {
    mongoose_1["default"]
        .connect(uri)
        .then(function () {
        console.log("DB connected!");
    })["catch"](function (err) { return console.log(err); });
}
else {
    console.log("No URI to DB");
}
//schema
// const UserSchema = new Schema({
//   name: String,
//   src: String,
// });
// const UserModel = mongoose.model("users", UserSchema);
// //to be able to get data from client add this line
// app.use(express.json());
// //data
// interface User {
//   // public uid: string = uuid();
//   name: string;
//   src: string;
// }
// //connect to DB;
// const users: User[] = [];
// //data route
// //get (from server)
// app.get("/api/get-users", async (req, res) => {
//   try {
//     const users = await UserModel.find({});
//     res.send({ users });
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });
// //add
// app.post("/api/add-user", async (req, res) => {
//   try {
//     const { name, src } = req.body;
//     console.log(name, src);
//     //add users to DB;
//     const userDB = await UserModel.create({ name, src });
//     console.log(userDB);
//     res.status(201).send({ ok: true });
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });
// //update
// //update whole entity
// app.put("/api/update-user", (req, res) => {
//   try {
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });
// // transodrm enetiy
// app.patch("/api/update-user-name", (req, res) => {
//   try {
//     const { name, uid } = req.body;
//     if (!name) throw new Error("No name in data");
//     if (!uid) throw new Error("No uid in data");
//     const user = users.find((user) => user.uid === uid);
//     if (!user) throw new Error("No user in array");
//     user.name = name;
//     res.send({ ok: true });
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });
// app.delete("/api/delete-user", async (req, res) => {
//   try {
//     const { _id } = req.body;
//     const deltedUser = await UserModel.deleteOne({_id})
//     const users = await UserModel.find({})
//     res.send({ ok: true, users });
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// });
//static file
app.use(express_1["default"].static("./client"));
app.listen(3001, function () {
    console.log("server listen on port 3001");
});
