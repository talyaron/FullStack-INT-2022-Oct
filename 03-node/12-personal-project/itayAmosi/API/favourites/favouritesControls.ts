import FavouriteModel from "./favouritesModel";



export const addFavourite = async (req:any, res:any) => {
    try {
      const { name, src, price } = req.body;
      const favouriteDB = await FavouriteModel.create({ name, src, price });
      
      res.status(201).send({ ok: true, favouriteDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };