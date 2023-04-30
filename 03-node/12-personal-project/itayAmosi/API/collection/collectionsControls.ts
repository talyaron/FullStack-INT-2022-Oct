import CollectionModel from "./collectionsModel";

export const getCollection = async (req:any, res:any) => {
    try {
      const collectionsDB = await CollectionModel.find({});

      res.send({ collectionsDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }


export const addCollections = async (req:any, res:any) => {
  try {
    const { name, src, price, description } = req.body;
    const CollectionsDB = await CollectionModel.create({ name, src, price, description });
    res.status(201).send({ ok: true, CollectionsDB });
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
