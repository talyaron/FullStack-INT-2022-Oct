// import express from "express";
// const app = express();
// import mongoose, { Schema } from "mongoose";
// import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();
// import cookieParser from 'cookie-parser';
// const uri: string | undefined = process.env.MONGO_URI;
// //to be able to get data from client add this line
// app.use(cookieParser())
// if (uri) {
//   mongoose
//     .connect(uri)
//     .then(() => {
//       console.log("DB connected!");
//     })
//     .catch((err) => console.log(err));
// } else {
//   console.log("No URI to DB");
// }
// app.use(express.json());
// app.use(express.static("./public"));
// import usersRouter from './API/users/usersRoute';
// app.use('/api/users', usersRouter);
// import courseRouter from './API/courses/courseRoutes';
// app.use('/api/courses', courseRouter);
// //static file
// app.listen(3000, () => {
//   console.log("server listen on port 3000");
// });
