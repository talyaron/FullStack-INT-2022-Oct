import jwt from "jsonwebtoken"


const generateToken = (id:any) => {
    /*
    הפונקציה מייצרת טוקן - 
    הפרמטר הראשון מייצג את המספר המזהה הייחודי של המשתמש עבורו נוצר הטוקן.
    הפרמטר השני מייצג את המפתח הסודי המשמש לחתימה של הטוקן.
    הפרמטר השלישי מייצג את זמן תפוגת הטוקן.
    */
    return jwt.sign({id}, 'anykey', {expiresIn:'5d'})
}

export default generateToken