import { NextFunction } from "express"

//-----Error middlewares
//טיפול בשגיאות המתקבלות בכל נקודה באפליקציה
//err - השגיאה שהתקבלה במידלוור הקודם או בעת הפעלת הראוט הנוכחי
//req - הבקשה שהגיעה
//res - התגובה שתוחזר ללקוח
//next - פונקציה המאפשרת לעבור למידלוור הבא ברשימה

export const globalErrHandler = (err:any, req:any, res:any, next:NextFunction) => {
    const stack = err?.stack
    //משתמשים בסטטוס קוד על מנת להגיב לפי סוג השגיאה
    const ststusCode = err?.ststusCode ? err.ststusCode: 500
    const message = err?.message
    /*
        הפונקציה מחזירה מענה בפורמט ג'ייסון עם פרטי השגיאה,
        כולל הודעת השגיאה עצמה, סטטוס השגיאה וקוד הסטטוס שיוחזר ללקוח,
        אשר יתאים לסוג השגיאה.
        כמו כן, הפונקציה מציגה ערך ברירת מחדל לקוד הסטטוס שצריך להחזיר
        למקרה שלא נמצא קוד סטטוס מתאים לסוג השגיאה.
    */
    res.status(ststusCode).json({
        stack,
        message
    })
}

//-----Not found error
//טיפול בשגיאות המתקבלות כאשר מבקשים להיכנס לראוט שלא קיים
export const notFoundErr = (req:any, res:any, next:NextFunction) => {
    const err = new Error(`Can't find ${req.originalUrl} on the server`)
    next(err)
}
