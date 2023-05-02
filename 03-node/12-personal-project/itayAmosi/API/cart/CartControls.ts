import CartModel from "./CartModel";

export const addCrat = async (req: any, res: any) => {
  try {
    const { _id, userId } = req.query;

    const cartDB = await CartModel.findOneAndUpdate(
      { userId },
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

