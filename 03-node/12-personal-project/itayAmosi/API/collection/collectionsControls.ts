import ProductModel from "./collectionsModel";

export const getProducts = async (req:any, res:any) => {
    try {
      const productsDB = await ProductModel.find({});

      res.send({products: productsDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }


export const addProducts = async (req:any, res:any) => {
  try {
    const { name, src, price, description } = req.body;
    const productsDB = await ProductModel.create({ name, src, price, description });
    res.status(201).send({ ok: true, productsDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};



//   export const deleteItems = async (req:any, res:any) => {
//     try {
//       const { _id } = req.body;
  
//       const deleteUser = await UserModel.deleteOne({ _id });
//       const users = await UserModel.find({});
  
//       res.send({ ok: true, users });
//     } catch (error: any) {
//       console.error(error);
//       res.status(500).send({ error: error.message });
//     }
//   }
