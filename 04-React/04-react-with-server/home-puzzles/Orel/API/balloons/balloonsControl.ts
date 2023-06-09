import BalloonModel from './balloonsModel'


export const getBalloons = async (req: any, res: any) => {
    try {
        const balloons = await BalloonModel.find({})
        if (!balloons) return res.status(401)
        res.status(201).send({ ok: true, balloons })

    } catch (error) {
        console.error(error)
        res.status(500).send({ ok: false })
    }
}
export const createBalloon = async (req: any, res: any) => {
    try {
        const { name, src } = req.body
        if (!name) throw new Error("no found name")
        if (!src) throw new Error("no found src")
        console.log(name, src);
        const newBalloon = await BalloonModel.create({name, src})
        if (!newBalloon) return res.status(401)
        res.status(201).send({ ok: true, newBalloon })
        console.log(newBalloon);

    } catch (error) {
        console.error(error)
        res.status(500).send({ ok: false })
    }
}
