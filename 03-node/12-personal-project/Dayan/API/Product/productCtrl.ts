import BrandModel from "../Brand/brandModel"
import CategoryModel from "../Category/categoryModel"
import ProductModel from "./productModel"
import AsyncHandler from "express-async-handler"

//-----Create product (By Admin)
export const createProduct = AsyncHandler(async (req:any, res:any) => {
    const { name, description, brand, category, sizes, colors, price, totalQty} = req.body

    //Check if the product already exists in DB:
    const productFound = await ProductModel.findOne({ name })
    if(productFound){
        throw new Error("The product already exists")
    }

    //Find the category:
    const categoryFound = await CategoryModel.findOne({ name: category })
    if(!categoryFound){
        throw new Error("Category not found")
    }

    //Find the brand:
    const brandFound = await BrandModel.findOne({ name: brand })
    if(!brandFound){
        throw new Error("Brand not found")
    }

    //Create the product
    const product = await ProductModel.create(
        {
            name,
            description,
            brand,
            category,
            sizes,
            colors,
            price,
            totalQty
        }
    )

    //Push product into category:
    categoryFound.products.push(product)
    await categoryFound.save()

    //Push product into brande:
    brandFound.products.push(product)
    await brandFound.save()

    res.status(201).json({
        status: "success",
        message:"The product has successfully created",
        product
    })
    
})
//-------------------------------------------

//-----Get all products (By Admin)
export const getAllProducts = AsyncHandler(async (req:any, res:any) => {
    //Query
    let productQuery = ProductModel.find()

    //Search by name
    if(req.query.name){
        productQuery = productQuery.find({ name: {$regex: req.query.name, $options: "i"}})
    }
    //Search by category
    if(req.query.category){
        productQuery = productQuery.find({ category: {$regex: req.query.category, $options: "i"}})
    }
    //Search by brand
    if(req.query.brand){
        productQuery = productQuery.find({ brand: {$regex: req.query.brand, $options: "i"}})
    }
    //Search by color
    if(req.query.colors){
        productQuery = productQuery.find({ colors: {$regex: req.query.colors, $options: "i"}})
    }
    //Search by size
    if(req.query.sizes){
        productQuery = productQuery.find({ sizes: {$regex: req.query.sizes, $options: "i"}})
    }
    //Search by range of prices
    if(req.query.price){
        //פיצול טווח המחירים ויצירת מערך של שני מחירים
        const priceRange = req.query.price.split("-")
        /*
            מציאת המוצרים אשר נמצאים בטווח המחירים באמצעות השוואה
            לשני המחירים הנמצאים במערך המחירים
            טווח תחתון - בדיקה האם קיים מוצר שהמחיר שלו שווה או גבוה ממנו - gte
            טווח עליון - בדיקה האם קיים מוצר שהמחיר שלו שווה או נמוך ממנו - lte
        */
        productQuery = productQuery.find(
            { price: 
                {$gte: priceRange[0], $lte: priceRange[1]}
            }
        )
    }

    //Pagination - הצגת מוצרים בעמוד
    /*
        בדיקת ערך הפרמטר עמוד:
        הקוד ממיר את הערך בבקשה למספר שלם.
        אם הבקשה אינה כוללת מספר והפעולה מחזירה NaN
        אזי הקוד יחזיר 1 כברירת מחדל למשתנה עמוד.
        אם הפעולה תחזיר מספר שלם, הקוד ישתמש בערך שהוחזר כערך החדש של המשתנה עמוד.
    */
    const page : number = parseInt(req.query.page) ? parseInt(req.query.page) : 1
    //הגדרת משתנה המכיל את מספר המוצרים שיוצגו בעמוד
    const limit : number = parseInt(req.query.limit) ? parseInt(req.query.limit) : 10
    const startIndex : number = (page - 1) * limit
    const endIndex : number = page * limit
    const total : number = await ProductModel.countDocuments()

    productQuery = productQuery.skip(startIndex).limit(limit)

    const pagination: { [key: string]: { page: number, limit: number } } = {}
    if(endIndex < total){
        pagination.next = {
            page: page + 1,
            limit
        }
    }
    if(startIndex > 0){
        pagination.prev = {
            page: page - 1,
            limit
        }
    }

    const products = await productQuery

    res.status(200).json({
        status: "success",
        total,
        results: products.length,
        pagination,
        message: "All the products fetched succesfully",
        products
    })
})
//-------------------------------------------

//-----Get single product (By Admin)
export const getSingleProduct = AsyncHandler(async (req:any, res:any) => {
    //הצגת המוצר עם רשימת הביקורות המלאה שלו - populate()
    const product = await ProductModel.findById(req.params.productID).populate("reviews")
    if(!product){
        throw new Error("Product not found")
    }
    res.status(200).json({
        status: "success",
        message:"The product fetched succesfully",
        product
    })
})
//-------------------------------------------

//-----Update product (By Admin)
export const updateProduct = AsyncHandler(async (req:any, res:any) => {
    const { name, description, sizes, colors, price, totalQty} = req.body

    //If name exists
    const productFound = await ProductModel.findOne({ name })
    if(productFound){
        throw new Error("The product already exists")
    }

    //update
    const product = await ProductModel.findByIdAndUpdate(
        req.params.productID,
        {
            name,
            description,
            sizes,
            colors,
            price,
            totalQty
        },
        {
            new: true
        }
    )

    res.status(200).json({
        status: "success",
        message:"The product has been successfully updated",
        product
    })
})
//-------------------------------------------

//-----Delete product (By Admin)
export const deleteProduct = AsyncHandler(async (req:any, res:any) => {
    const productDeleted = await ProductModel.findByIdAndDelete(req.params.productID)

    //Delete product from category
    await CategoryModel.updateMany(
        {products: productDeleted._id}, 
        {$pull: {products: productDeleted._id}}
    )

    //Delete product from brand
    await BrandModel.updateMany(
        {products: productDeleted._id}, 
        {$pull: {products: productDeleted._id}}
    )

    res.status(200).json({
        status: "success",
        message:"The product has been successfully deleted"
    })
})
//-------------------------------------------