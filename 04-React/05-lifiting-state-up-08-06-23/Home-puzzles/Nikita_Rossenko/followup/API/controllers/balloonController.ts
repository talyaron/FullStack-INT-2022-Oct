

export const getBalloons = (req:any, res:any) => {
    try {
        console.log("Trying to fetch balloons from DB!")

        res.status(201).send({ok:true})
    } catch (error) {
        console.log(error)
    }
}

export const addBalloons = (req:any, res:any) => {
    try {
        console.log("Trying to add balloons to DB!")
        const {balloonImg} = req.body

        console.log(balloonImg)

        res.status(201).send({ok:true})
    } catch (error) {
        console.log(error)
    }
}