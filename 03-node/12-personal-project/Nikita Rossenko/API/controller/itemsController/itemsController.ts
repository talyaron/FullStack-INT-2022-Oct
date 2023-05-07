import { StarshipModel } from "../../models/starshipModel"

export const addStarship = async (req:any, res:any) => {
    try {
        const {starshipName, starshipModel, starshipPrice, starshipDescription} = req.body;
        if (!starshipName || !starshipModel || !starshipPrice || !starshipDescription) throw new Error("Missing Info")

        const createStarship = await StarshipModel.create({starshipName, starshipModel, starshipPrice, starshipDescription})

        if (createStarship) {
            console.log("added", createStarship)
            res.status(201).send({ok:true})

        } else {
            throw new Error("Couldn't add item")
        }


    } catch (error:any) {
        console.log(error)
        res.status(500).send({ok:false, error: error.message})
    }
}

export const getStarships = async (req:any, res:any) => {
    try {
        const starshipArray = await StarshipModel.find({})
        
        if (starshipArray.length > 0) {

            res.status(201).send({ok:true, starships:starshipArray})

        } else {
            throw new Error("Couldn't fetch items or shop is empty")
        }


    } catch (error:any) {
        console.log(error)
        res.status(500).send({ok:false, error: error.message})
    }
}
