import EnemyModel from "../enemy/enemyModel";
import TowerModel from "../towers/towerModel";
import UserModel from "../users/userModel";
import GameModel from "./gameModel";
import jwt from "jwt-simple";


export const getGames = async (req: any, res: any) => {
  try {
    const gamesDB = await GameModel.find({})
      .populate(["enemies", "towers"])
      .populate({ path: "player", select: "-password" });
    res.send({ ok: true, gamesDB });
  } catch (error) {
    res.status(500).send({ ok: false });
    console.error(error);
  }
};
export const getTowers = async (req: any, res: any) => {
  try {
    const towersDB = await TowerModel.find({}).lean()

    res.send({ ok: true, towersDB });
  } catch (error) {
    res.status(500).send({ ok: false });
    console.error(error);
  }
};

export const increaseHighscore = async (req:any, res:any) => {
  try {
    const {currentUser} = req.cookies;
    const {score} = req.body;
    const secret = process.env.JWT_SECRET
    if (!secret) throw new Error("Server Error")

    const {userId} = jwt.decode(currentUser, secret)
    const user = await UserModel.findOne({_id:userId})
    if (!user) throw new Error("Server Error")
    if (user.highScore < score){
      const updatedHighscore = await UserModel.findOneAndUpdate({_id:userId}, {highScore:score})
    }

    res.status(200).send({ ok: true});

  } catch (error) {
    res.status(500).send({ ok: false });
    console.error(error);
  }
}

export const getGameCoins = async (req:any, res:any) => {
  try {
    const {currentGame} = req.cookies;
    const secret = process.env.JWT_SECRET
    if (!secret) throw new Error("Server Error")

    const {gameId} = jwt.decode(currentGame, secret)
    const game = await GameModel.findOne({_id:gameId}).lean()
    if (!game) throw new Error("Server Error")
    
    const coins = game.coins
    
    res.status(200).send({ ok: true, coins:coins});
    
  } catch (error) {
    res.status(500).send({ ok: false });
    console.error(error);
  }
}

export const getTotalGamesPlayed = async (req:any, res:any) => {
  try {
    let totalGamesPlayed = 0
    const allUsers = await UserModel.find({}).lean()

    for (let i = 0 ; i < allUsers.length ; i++){
      totalGamesPlayed += allUsers[i].gamesPlayed
    }

    res.status(200).send({ ok: true, totalGamesPlayed:totalGamesPlayed});
    
  } catch (error:any) {
    res.status(500).send({ ok: false, totalGamesPlayed:"N/A", error:error.message });
    console.error(error);
  }
}

export const getGameWaveCount = async (req:any, res:any) => {
  try {
    const {currentGame} = req.cookies;
    const secret = process.env.JWT_SECRET
    if (!secret) throw new Error("Server Error")

    const {gameId} = jwt.decode(currentGame, secret)
    const game = await GameModel.findOne({_id:gameId}).lean()
    if (!game) throw new Error("Server Error")
    
    const waveCount = game.waveCount
    
    res.status(200).send({ ok: true, waveCount:waveCount});
    
  } catch (error) {
    res.status(500).send({ ok: false });
    console.error(error);
  }
}

export const createGame = async (req: any, res: any) => {
  try {

    const {currentUser} = req.cookies;
    const secret = process.env.JWT_SECRET
    if (!secret) throw new Error("Server Error")
    
    const {userId} = await jwt.decode(currentUser, secret)
    const user = await UserModel.findOne({_id:userId}).lean()
    if (!user) throw new Error("Server Error")

    // Increase Users gamesPlayed +1
    const increasedGamePlayed = await UserModel.findOneAndUpdate({_id:userId}, {gamesPlayed:user.gamesPlayed+1})

    const enemies = await EnemyModel.find({}).lean()
    const towers = await TowerModel.find({}).lean()
    const gameDB = await GameModel.create({
    player:userId,
    enemies,
    towers,
    score:0,
    coins:100,
    waveCount:1,
    });

    const {_id} = gameDB
    const gameToken = await jwt.encode({gameId:_id}, secret)
    res.cookie("currentGame", gameToken, {maxAge:999*999*999 , httpOnly: true });

    res.status(201).send({ ok: true});
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
