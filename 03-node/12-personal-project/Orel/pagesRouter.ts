import { Router } from "express";
import path from 'path';

const routerPages = Router()

//  HOME 

routerPages.get('/' ,(req , res)=>{
    try {
  res.sendFile(path.join(__dirname+'/public/pages/index.html'));
    } catch (error) {
        console.error(error)
    }
})
routerPages.get('/dist/index.css' ,(req , res)=>{
    try {
        res.sendFile(path.join(__dirname+'/public/pages/dist/index.css'));
    } catch (error) {
        console.error(error)
    }
})
routerPages.get('/dist/index.js' ,(req , res)=>{
    try {
        res.sendFile(path.join(__dirname+'/public/pages/dist/index.js'));
    } catch (error) {
        console.error(error)
    }
})


// login
routerPages.get('/login' ,(req , res)=>{
    try {
  res.sendFile(path.join(__dirname+'/public/pages/login.html'));
    } catch (error) {
        console.error(error)
    }
})
routerPages.get('/dist/login.css' ,(req , res)=>{
    try {
        res.sendFile(path.join(__dirname+'/public/pages/dist/login.css'));
    } catch (error) {
        console.error(error)
    }
})
routerPages.get('/dist/login.js' ,(req , res)=>{
    try {
        res.sendFile(path.join(__dirname+'/public/pages/dist/login.js'));
    } catch (error) {
        console.error(error)
    }
})


// register
routerPages.get('/register' ,(req , res)=>{
    try {
  res.sendFile(path.join(__dirname+'/public/pages/register.html'));
    } catch (error) {
        console.error(error)
    }
})
routerPages.get('/dist/register.css' ,(req , res)=>{
    try {
        res.sendFile(path.join(__dirname+'/public/pages/dist/register.css'));
    } catch (error) {
        console.error(error)
    }
})
routerPages.get('/dist/register.js' ,(req , res)=>{
    try {
        res.sendFile(path.join(__dirname+'/public/pages/dist/register.js'));
    } catch (error) {
        console.error(error)
    }
})
// products
routerPages.get('/products' ,(req , res)=>{
    try {
  res.sendFile(path.join(__dirname+'/public/pages/product.html'));
    } catch (error) {
        console.error(error)
    }
})
routerPages.get('/dist/product.css' ,(req , res)=>{
    try {
        res.sendFile(path.join(__dirname+'/public/pages/dist/product.css'));
    } catch (error) {
        console.error(error)
    }
})
routerPages.get('/dist/product.js' ,(req , res)=>{
    try {
        res.sendFile(path.join(__dirname+'/public/pages/dist/product.js'));
    } catch (error) {
        console.error(error)
    }
})


// cart
routerPages.get('/myCart' ,(req , res)=>{
    try {
  res.sendFile(path.join(__dirname+'/public/pages/cart.html'));
    } catch (error) {
        console.error(error)
    }
})
routerPages.get('/dist/cart.css' ,(req , res)=>{
    try {
        res.sendFile(path.join(__dirname+'/public/pages/dist/cart.css'));
    } catch (error) {
        console.error(error)
    }
})
routerPages.get('/dist/cart.js' ,(req , res)=>{
    try {
        res.sendFile(path.join(__dirname+'/public/pages/dist/cart.js'));
    } catch (error) {
        console.error(error)
    }
})

// admin
routerPages.get('/ok-admin' ,(req , res)=>{
    try {
  res.sendFile(path.join(__dirname+'/public/pages/admin.html'));
    } catch (error) {
        console.error(error)
    }
})
routerPages.get('/dist/admin.css' ,(req , res)=>{
    try {
        res.sendFile(path.join(__dirname+'/public/pages/dist/admin.css'));
    } catch (error) {
        console.error(error)
    }
})
routerPages.get('/dist/admin.js' ,(req , res)=>{
    try {
        res.sendFile(path.join(__dirname+'/public/pages/dist/admin.js'));
    } catch (error) {
        console.error(error)
    }
})

export default routerPages