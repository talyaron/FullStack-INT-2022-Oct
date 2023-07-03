import balloonModel from "./balloonsModel";

export async function addballoon(req:any,res:any) {
    try {
        const {image} = req.body;
        const balloonDB= await balloonModel.create({image});
        res.send({ok:true, balloon:balloonDB})
    } catch (error) {
        res.status(500).send({ ok: false, error });   
    }
    
};

export async function getBalloons(req:any,res:any){
    try {
    const balloonDB = await balloonModel.find({});
    res.send({ ok: true, balloons: balloonDB });    } catch (error) {
        res.status(500).send({ ok: false, error });   
   
    }
}