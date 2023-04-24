import bcrypt from 'bcryptjs'

//-----Hashing Admin Password
/*
    כאשר נוצר משתמש חדש, הפונקציה מבצעת מניפולציה של הסיסמא.
    היתרון בכך, שאם יפרצו לבסיס הנתונים וימשכו את כל המידע,
    המשתמשים מוגנים ולא ניתן לעלות על הסיסמא שלהם.
    החיסרון הוא שלא ניתן לשחזר למשתמש את הסיסמא.
*/
export const hashPassword = async (password:string) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    return hash
}
//-------------------------------------------

//-----Verify password
/*
    The function receives the password entered by the user 
    and compares it to the password stored in the DB.
    If the password entered by the user matches, 
    the function returns a boolean value true, 
    and if not, then the function returns false.
*/
export const isPasswordMatched = async (password:string, hash:string) => {
    return await bcrypt.compare(password, hash)
}
//-------------------------------------------