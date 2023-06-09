import ProductModel from './productsModel'


export const getProducts = async(req:any , res:any) => {
    try {
        const products = await ProductModel.find({})
        if(!products) throw new Error("no found product in DB")
        res.status(201).send({ok:true ,products})
    } catch (error) {
        console.error(error)
        res.status(501).send({ok:false})
    }
} 
export const getProduct = async(req:any , res:any) => {
    try {
        const uid = req.body.uid
        if(!uid) throw new Error("no Found uId")
        const product = ProductModel.findById(uid)   
        if(!product) throw new Error("no found product DB")
            res.status(201).send({ok:true , product})
    } catch (error) {
        console.error(error)
    }
} 
export const addProducts = async(req:any , res:any) => {
    try {
        const {src , name , detail ,price } = req.body
        if(!name) throw new Error("no name")
        if(!src) throw new Error("no src")
        if(!detail) throw new Error("no detail")
        if(!price) throw new Error("no price")
        console.log(src);
        const newProduct = ProductModel.create({src , name ,detail , price:Number(price)})

        res.status(201).send({ok:true , product:newProduct})
    } catch (error) {
        console.error(error)
        res.status(501).send({ok:false })
    }
} 
export const removeProducts = async (req:any , res:any) => {
    try {
        const _id = req.body 
        if(!_id) throw new Error("no uid")
        const deleteProduct =  await ProductModel.findByIdAndDelete(_id.__id);
 
        if(!deleteProduct) throw new Error("no found product")
        console.log(deleteProduct);
        res.status(201).send({ok:true , product:deleteProduct})

    } catch (error) {
        console.error(error)
        res.status(501).send({ok:false })
    }
} 
export const updateProducts = async (req:any , res:any) => {
    try {
        const _id = req.body 
        const {pName , pDetail , pPrice} = req.body 
        if(!_id) throw new Error("no uid")
        const updateProduct =  await ProductModel.findByIdAndUpdate(_id.__id , {name:pName , detail:pDetail , price:pPrice} );
        console.log(updateProduct);
        if(!updateProduct) throw new Error("no found product")
        res.status(201).send({ok:true , product:updateProduct})

    } catch (error) {
        console.error(error)
        res.status(501).send({ok:false })
    }
} 
// export const setProduct = async(req:any , res:any) => {
//     try {

//     } catch (error) {
//         console.error(error)
//     }
// } 