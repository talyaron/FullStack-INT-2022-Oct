import EnemyModel from "./enemyModel";

export const getEnemies = async (req: any, res: any) => {
  try {
    const enemyDB = await EnemyModel.find({});
    res.send({ ok: true, enemyDB });
  } catch (error) {
    res.status(500).send({ ok: false });
    console.error(error);
  }
};

export const createEnemy = async (req: any, res: any) => {
  try {
    const { name, image, health } = req.body;

    const existEnemy = await EnemyModel.findOne({
      name,
      image,
    });

    if (existEnemy) throw new Error("User already exist");

    const enemyDB = await EnemyModel.create({
        name,
        image,
        health,
    });

    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};


export const deleteEnemy = async (req: any, res: any) => {
  try {
    const {enemyId}  = req.body;
    if (!enemyId) throw new Error("uID no founded");
    const deleteEnemy = await EnemyModel.findByIdAndDelete(enemyId);
    console.log(deleteEnemy);
    if (!deleteEnemy) throw new Error("deleteEnemy no founded");
    res.status(201).send({ ok: true  , enemy:deleteEnemy});
  } catch (error) {
    res.status(500).send({ ok: false });

    console.error(error);
  }
};
