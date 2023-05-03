import OrderModel from "./ordersModel";

export const createOrder = async (req:any, res:any) => {
    try {
      const { user, movieSeats } = req.body;
      const orderDB = await OrderModel.create({user, seatsInMovie: movieSeats});
      
      res.status(201).send({ ok: true, orderDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };
