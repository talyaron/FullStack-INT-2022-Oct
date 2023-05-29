import { Router } from "express";
import { getProduct , addProducts ,removeProducts, getProducts , updateProducts} from "./productsControl";

const routerProduct = Router()


routerProduct
.get('/get-products' , getProducts)
.post('/get-product' , getProduct)
.post('/add-product' , addProducts)
.patch('/update-product' , updateProducts)
.delete('/delete-product' , removeProducts)


export default routerProduct