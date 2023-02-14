import { IStudent } from "../Students/IStudent"

export interface IClass {
    classId: number
    className: string
    classSeats: number
    availableSeats: number
    students: IStudent[]

}

export interface IClassCard extends IClass {
    classGotDeleted: (classId: number) => void
}