import  { CartModel,CartStatus } from "./cartModel";

export const addItem = async (req: any, res: any) => {
    try {
      const { _id, userId } = req.query;
  
      const cartDB = await CartModel.findOneAndUpdate(
        { userId, status:CartStatus.Open },
        {
          $addToSet: { productIds: _id },
        },
        {
          upsert:true, new:true ,setDefaultsOnInsert: true
        }
      );
      console.log(cartDB);
      res.status(201).send({ ok: true, cartDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };

  export const getCartByUserId = async (req: any, res: any) => {
    try {
      const { userId } = req.query;
      const cart = await CartModel.findOne(
        { userId, status:CartStatus.Open }
      );
      res.send({ cart });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };
  export const removeProductFromCart = async (req: any, res: any) => {
    try {
      const { productId , userId } = req.query;
      console.log(productId)
      const cart = await CartModel.updateOne(
        { userId, status:CartStatus.Open },
        { $pull: { productIds: productId } }
        );
      res.send({ ok: true });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };

  export const successfulPurchase = async (req: any, res: any) => {
    try {
      const { _id, userId } = req.query;
  
      const cartDB = await CartModel.findOneAndUpdate(
        { userId, status:CartStatus.Open },
        {
          status: CartStatus.Closed
        }
      );
      res.status(201).send({ ok: true, cartDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };
  