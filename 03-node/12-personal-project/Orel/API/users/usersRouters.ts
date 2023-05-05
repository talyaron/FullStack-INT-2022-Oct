import express from "express";
import { changeNameUser, createUser, getUsers, getUser, login , logout , createCartList , getCartUser} from "./userControl";
const routerUsers = express.Router();

routerUsers
  .get('/logout' , logout)
  .get('/get-user',  getUser)
  .get("/get-users", getUsers)
  .get("/get-cart-user", getCartUser)
  .post("/create-user", createUser)
  .post("/create-product-cart", createCartList)
  .post('/login', login)
  .put("/change-user-name", changeNameUser)


export default routerUsers;

