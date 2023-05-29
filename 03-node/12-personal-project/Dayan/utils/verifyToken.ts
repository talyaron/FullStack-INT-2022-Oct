import jwt from "jsonwebtoken"

/*
    הפונקציה מקבלת טוקן ומנסה לאמת אותו.
    אם האימות מתבצע בהצלחה, הפונקציה מחזירה את המידע המפוענח מתוך הטוקן.
    אם האימות נכשל, הפונקציה מחזירה אובייקט המיכל הודעת שגיאה.
*/
const verifyToken = (token: any) => {
    return jwt.verify(token, process.env.JWT_KEY, (err: any, decoded: any) => {
        if(err){
            return "Token expired/invalid"
        }else{
            return decoded
        }
    })
}

export default verifyToken