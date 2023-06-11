import PlayerModel from "./playerModel";


export const createPlayer = async (req:any , res:any) =>{
try {
    const {name , srcHappy , srcAngry ,speed} = req.body
    if(!name) throw new Error("no name")
    if(!srcHappy) throw new Error("no srcHappy")
    if(!srcAngry) throw new Error("no srcAngry")
    if(!speed || !Number(speed)) throw new Error("no speed or speed not a number")
    const newPlayer = await PlayerModel.create({name , srcHappy , srcAngry ,speed})
    if(!newPlayer) throw new Error("no crete player good")
    res.status(200).send({ok:true , player:newPlayer})
} catch (error) {
    console.error(error)
    res.status(500).send({ok:false})
}
}