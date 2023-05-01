import ProductModel from "./productsModel";


export const getProducts = async (req: any, res: any) => {
    try {
      const productsDB = await ProductModel.find({});
      res.send({ products: productsDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };

  export const createProduct = async (req: any, res: any) => {
    try {
      const { name, description, price, imgUrl } = req.body;
  
      const productDB = await ProductModel.create({
        name,
        description,
        price,
        imgUrl,
      });
  
      res.status(201).send({ product: productDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };

export const updateProduct = async (req: any, res: any) => {
    try {
      const { productId } = req.body;
      const { name, description, price, imgUrl } = req.body;
  
      const productDB = await ProductModel.findOneAndUpdate(
        { _id: productId },
        { name, description, price, imgUrl },
        { new: true }
      );
      if (!productDB) throw new Error("Could not find product");
  
      res.send({ product: productDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };
  export const getProductById = async (req: any, res: any) => {
    try {
      const { productId } = req.body;
  
      const product = await ProductModel.findById(productId);
  
      if (!product) throw new Error("Product not found");
  
      res.send({ product });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };

  export const deleteProduct = async (req: any, res: any) => {
    try {
      const { productId } = req.body;
  
      const productDB = await ProductModel.findOneAndDelete({ productId });
      if (!productDB) throw new Error("Could not find product");
  
      res.send({ product: productDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };

