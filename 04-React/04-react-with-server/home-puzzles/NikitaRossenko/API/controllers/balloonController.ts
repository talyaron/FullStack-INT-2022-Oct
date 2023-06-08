

export const getBalloons = (req, res) => {
    try {
        console.log("Trying to fetch ballons from DB!")

        res.status(201).send({ok:true})
    } catch (error) {
        console.log(error)
    }
}