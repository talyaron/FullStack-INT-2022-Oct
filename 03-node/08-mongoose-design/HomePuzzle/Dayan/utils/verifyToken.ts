import jwt from "jsonwebtoken"

/*
    הפונקציה מקבלת טוקן ומנסה לאמת אותו.
    אם האימות מתבצע בהצלחה, הפונקציה מחזירה את המידע המפוענח מתוך הטוקן.
    אם האימות נכשל, הפונקציה מחזירה אובייקט המיכל הודעת שגיאה.
*/
const verifyToken = (token:any) => {
    return jwt.verify(token, 'anykey', (err, decoded) => {
        if(err){
            return false
        }else{
            return decoded
        }
    })
}

export default verifyToken