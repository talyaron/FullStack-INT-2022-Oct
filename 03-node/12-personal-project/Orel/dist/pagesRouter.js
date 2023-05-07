"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var routerPages = express_1.Router();
//  HOME 
routerPages.get('/', function (req, res) {
    try {
        res.sendFile(path_1["default"].join(__dirname + '/public/pages/index.html'));
    }
    catch (error) {
        console.error(error);
    }
});
routerPages.get('/dist/index.css', function (req, res) {
    try {
        res.sendFile(path_1["default"].join(__dirname + '/public/pages/dist/index.css'));
    }
    catch (error) {
        console.error(error);
    }
});
routerPages.get('/dist/index.js', function (req, res) {
    try {
        res.sendFile(path_1["default"].join(__dirname + '/public/pages/dist/index.js'));
    }
    catch (error) {
        console.error(error);
    }
});
// login
routerPages.get('/login', function (req, res) {
    try {
        res.sendFile(path_1["default"].join(__dirname + '/public/pages/login.html'));
    }
    catch (error) {
        console.error(error);
    }
});
routerPages.get('/dist/login.css', function (req, res) {
    try {
        res.sendFile(path_1["default"].join(__dirname + '/public/pages/dist/login.css'));
    }
    catch (error) {
        console.error(error);
    }
});
routerPages.get('/dist/login.js', function (req, res) {
    try {
        res.sendFile(path_1["default"].join(__dirname + '/public/pages/dist/login.js'));
    }
    catch (error) {
        console.error(error);
    }
});
// register
routerPages.get('/register', function (req, res) {
    try {
        res.sendFile(path_1["default"].join(__dirname + '/public/pages/register.html'));
    }
    catch (error) {
        console.error(error);
    }
});
routerPages.get('/dist/register.css', function (req, res) {
    try {
        res.sendFile(path_1["default"].join(__dirname + '/public/pages/dist/register.css'));
    }
    catch (error) {
        console.error(error);
    }
});
routerPages.get('/dist/register.js', function (req, res) {
    try {
        res.sendFile(path_1["default"].join(__dirname + '/public/pages/dist/register.js'));
    }
    catch (error) {
        console.error(error);
    }
});
// products
routerPages.get('/products', function (req, res) {
    try {
        res.sendFile(path_1["default"].join(__dirname + '/public/pages/product.html'));
    }
    catch (error) {
        console.error(error);
    }
});
routerPages.get('/dist/product.css', function (req, res) {
    try {
        res.sendFile(path_1["default"].join(__dirname + '/public/pages/dist/product.css'));
    }
    catch (error) {
        console.error(error);
    }
});
routerPages.get('/dist/product.js', function (req, res) {
    try {
        res.sendFile(path_1["default"].join(__dirname + '/public/pages/dist/product.js'));
    }
    catch (error) {
        console.error(error);
    }
});
// cart
routerPages.get('/myCart', function (req, res) {
    try {
        res.sendFile(path_1["default"].join(__dirname + '/public/pages/cart.html'));
    }
    catch (error) {
        console.error(error);
    }
});
routerPages.get('/dist/cart.css', function (req, res) {
    try {
        res.sendFile(path_1["default"].join(__dirname + '/public/pages/dist/cart.css'));
    }
    catch (error) {
        console.error(error);
    }
});
routerPages.get('/dist/cart.js', function (req, res) {
    try {
        res.sendFile(path_1["default"].join(__dirname + '/public/pages/dist/cart.js'));
    }
    catch (error) {
        console.error(error);
    }
});
// admin
routerPages.get('/ok-admin', function (req, res) {
    try {
        res.sendFile(path_1["default"].join(__dirname + '/public/pages/admin.html'));
    }
    catch (error) {
        console.error(error);
    }
});
routerPages.get('/dist/admin.css', function (req, res) {
    try {
        res.sendFile(path_1["default"].join(__dirname + '/public/pages/dist/admin.css'));
    }
    catch (error) {
        console.error(error);
    }
});
routerPages.get('/dist/admin.js', function (req, res) {
    try {
        res.sendFile(path_1["default"].join(__dirname + '/public/pages/dist/admin.js'));
    }
    catch (error) {
        console.error(error);
    }
});
exports["default"] = routerPages;
