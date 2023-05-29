import OrderModel from "./orderModel";
import ProductModel from "../products/productsModel";
import UserModel from "../users/usersModel";

export const getOrders = async (req: any, res: any) => {
  try {
    const orders = await OrderModel.find({});
    res.send({ orders });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const createOrder = async (req: any, res: any) => {
  try {
    const { userId, productId, quantity } = req.body;
    const user = await UserModel.findById(userId);
    if (!user) throw new Error("User not found");
    const product = await ProductModel.findById(productId);
    if (!product) throw new Error("Product not found");

    const orderDB = await OrderModel.create({
      userId,
      productId,
      quantity,
    });

    res.status(201).send({ order:orderDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const updateOrder = async (req: any, res: any) => {
  try {
    const { orderId, quantity } = req.body;

    const orderDB = await OrderModel.findOneAndUpdate(
      { _id: orderId },
      { quantity },
      { new: true }
    );
    if (!orderDB) throw new Error("Could not find order");

    res.send({ order: orderDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const deleteOrder = async (req: any, res: any) => {
  try {
    const { orderId } = req.body;

    const orderDB = await OrderModel.findOneAndDelete({ _id: orderId });
    if (!orderDB) throw new Error("Could not find order");

    res.send({ order: orderDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getOrderById = async (req: any, res: any) => {
    try {
      const { orderId } = req.body;
  
      const orderDB = await OrderModel.findById({_id:orderId});
  
      if (!orderDB) throw new Error('Order not found');
  
      res.send({ order:orderDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };