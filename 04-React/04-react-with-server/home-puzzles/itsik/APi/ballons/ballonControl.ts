import BallonModel from "./ballonModel";



export const addBallons = async (req:any, res:any) =>{
try {
   const ballonSrc = req.body.ballonSrc
  
   const ballDB = await BallonModel.create(ballonSrc.map((src: any) =>({src} )))
   console.log(ballDB)
   res.status(201).json(ballDB)


} catch (error:any) {
   console.error(error) 
}


}