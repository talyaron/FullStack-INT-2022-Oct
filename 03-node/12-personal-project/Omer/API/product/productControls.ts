import productModel from "./productModel";

export const addProduct = async (req: any, res: any) => {
    try {
        const { name, type, price, img } = req.body;

        await productModel.create({ name, type, price, img });
        res.status(201).send(true);

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export const getAllProducts = async (req: any, res: any) => {
    try {
        const products = await productModel.find({});
        res.status(200).send(products)
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}