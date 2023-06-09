import { IGenericRecipe } from "../../components/GenericRecipe/IGenericRecipe"

export interface IProfile{
    firstName: string
    lastName: string 
    age: number
    img?: string
    email: string
    password: string
    _id: string
}