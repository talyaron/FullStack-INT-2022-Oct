/*
Create an array of products in a shop (for instance, a clothes shop).
In the array, put several items. Each item has price, name, and department (for example, "women's tops," "man underwear," etc.), and type (for example, "shirt," "trousers").


1. get all the items in a type (all "shirts")
2. find the cheapest item.
3. sort all items in a department by price. Show the cheapest on the top of the array.
4. find an item in the array by its name, using part of the name. for instance, the user will search for "je" and will get "Dizzle jeans.", "Levies Jeans", etc.
*/


//בניית מחלקה לאובייקט שלנו- הדרך כתיבה היא אותה דרך בכל מחלקה שנבנה, רק שם המחלקה וה"ערכים" שנשים בתוכה משתנים
class Item {
  public constructor(
    public name: string,
    public department: string,
    public type: string,
    public price: number
  ) {}
}

//בניית אובייקטים חדשים (ע"פ הפורמט שבנינו במחלקה) 
const shirtLevisW = new Item("shirt-Levis-white", "women", "shirt", 19.9);
const shirtLevisM = new Item("shirt-Levis-blue", "men", "shirt", 19.9);
const skirtW = new Item("skirt-black", "women", "skirt", 29.9);
const jeansDizzleM = new Item("jeans-Dizzle-deepBlue", "men", "pants", 59.9);
const shirtPackB = new Item("shirts-pack-grey", "baby", "shirt", 9.9);
const blouseW = new Item("blouse-black", "women", "shirt", 15.9);
const sweatshirtNikeK = new Item("sweatshirt-Nike-white", "kids", "sweatshirt", 49.9);
const dressW = new Item("dress-pink", "women", "dress", 39.9);
const denimJacketM = new Item("denimJacket-Levis", "men", "outwear", 79.9);
const activeSetNikeW = new Item("activeSet-Nike", "women", "pants", 19.9);
const coatGapB = new Item("coat-Gap-purple", "baby", "outwear", 49.9);


//בניית מערך/רשימה שמכילה את כל האובייקטים שיצרנו
const clothesShopArr: Item[] = [
  shirtLevisW,
  shirtLevisM,
  skirtW,
  jeansDizzleM,
  shirtPackB,
  blouseW,
  sweatshirtNikeK,
  dressW,
  sweatshirtNikeK,
  denimJacketM,
  activeSetNikeW,
  coatGapB,
];

console.log (getAllItemInType(clothesShopArr)); // הפעלת פונקציה א
const sortedArr= sortArrByPrice(clothesShopArr); // הפעלת פונקצית המיון מהזול ליקר
if (sortedArr) // אם הפונקציה חזרה ללא שגיאה והתקבל מערך תקין אשר ממויין מהזול ליקר
    console.log (getTheCheapestItem(sortedArr)); // הפעלת פונקציה שתדפיס לי מערך של הפריטים הזולים ביותר בחנות


// פונקציה שמחזירה מערך עם כל הבגדים מסוג מסויים לפי בקשת המשתמש. לדוגמא כל הפריטים שהם חולצות

// שם הפונקציה שמקבלת כפרמטר רשימה/מערך של פריטים בחנות ומחזירה ערך שהוא מסוג רשימת בגדים או שגיאה
function getAllItemInType(clothesArr:Item[]):Item[] | false{ 
   //TYCATCH- משמש אותנו למניעת באגים בקוד שלנו
  try {  
    // תנאי למניעת שגיאה ייחודית- אם המערך שקיבלנו בפונקציה הוא ריק- הפונקציה לא תמשיך לרוץ      
    if (clothesArr.length==0)   
        throw new Error(`there is no item in the store`);// אם התנאי מתקיים הפונקציה תסיים לרוץ ותחזיר למשתמש שגיאה     
    let typeGetFromUser; // הגדרת מתשנה שיקבל את סוג הבגד שהמשתמש רוצה לקבל
    // ללואה אשר תרוץ עד שהמשתנה יקבל ערך (אם המשתמש לא יכניס ערך, הלולאה הבקשה תמשיך להופיע על המסך עד שיכניסו משהו לשדה הריק)
    while (!typeGetFromUser){ 
      typeGetFromUser = prompt (`Enter the type of item you will want to buy:`)// הופעת ההודעה על המסך המבקשת מהמשתמש להכניס סוג של בגד שהוא ירצה לראות/לקנות     
    }
    // הגדרת משתנה חדש שיקבל אליו את המערך עם הפריטים מהסוג הספציפי שהמשתמש הכניס מקודם
    // השורה בנויה כך שאנחנו מביאים למשתנה את המערך שקיבלנו כפרמטר (המערך עם כל הפריטים ש שקיימים בחנות)
    // ואנו עושים עליו פעולה שנקרטת "פילטר" אשר מוגדרת מראש במחשב
    //בתוך הסוגריים נגדיר שכל פריט שנמצא ברשימה, נשווה את סוגו למה שהמשתמש הכניס- במידה והתנאי מתקיים, אותו פריט נכנס למערך החדש שהגדרנו
    const chosenItemsArr = clothesArr.filter(item => item.type== typeGetFromUser)
    // אם המערך החדש שהתקבל לאחר סינון הפריטים לפי סוג ריק (אורכו שווה ל0)
    if (chosenItemsArr.length==0)
      throw new Error(`items from type ${typeGetFromUser} is availble in our store`);// הפונקציה תחזיר למשתמש שהתרחשה שגיאה והסוג פריט שהזין לנו בשורת קליטה מהמשתמש לא קיים בחנות    
    // אם הפונקציה לא החזירה שגיאה עד עכשיו, סביר להניח שהרשימה החדשה מוכנה ומכילה פריטים לפי בקשת המשתמש, ולכן נחזיר אותה
    return chosenItemsArr;   
    } 
    // אם התוכנה תתקל בבאג היא תגיע לכאן ויוחזר למשתמש שיש שגיאה באחת הפונקציות
    catch (error) {    
    console.error(error);   //מחזיר שגיאה למשתמש
    return false;   // מחזיר לפונקציה ערך של "שקר" מכיוון שלא קיבלנו את מה שרצינו ממנה
  }
}


// פונקציה שמחזירה מערך עם כל הבגדים מהזול ביותר ליקר ביותר

// שם הפונקציה שמקבלת כפרמטר רשימה/מערך של פריטים בחנות ומחזירה ערך שהוא מסוג רשימת בגדים או שגיאה
function sortArrByPrice (clothesArr:Item[]): Item[] | false{ 
  //TYCATCH- משמש אותנו למניעת באגים בקוד שלנו
  try {  
    // תנאי למניעת שגיאה ייחודית- אם המערך שקיבלנו בפונקציה הוא ריק- הפונקציה לא תמשיך לרוץ      
    if (clothesArr.length==0)   
        throw new Error(`there is no item in the store`);// אם התנאי מתקיים הפונקציה תסיים לרוץ ותחזיר למשתמש שגיאה   
    // הגדרת משתנה חדש שיקבל אליו את המערך עם הפריטים הקיימים בחנות לפי מחיר- מהזול ליקר
    // השורה בנויה כך שאנחנו מביאים למשתנה את המערך שקיבלנו כפרמטר (המערך עם כל הפריטים ש שקיימים בחנות)
    // ואנו עושים עליו פעולה שנקרטת "סורט" אשר מוגדרת מראש במחשב
    //בתוך הסוגריים נגדיר שכל שני פיריטים צריכים להיות במערך כאשאר המחיר של הראשון קטן יותר מהמחיר של השני (העתקתי ממש אתה השורה מהאינטרנט ושיניתי לשמות שקיימים לי במחלקה שבניתי)
    const sortedArr = clothesArr.sort((a, b) => a.price - b.price);
    // אם הפונקציה לא החזירה שגיאה עד עכשיו, סביר להניח שהרשימה החדשה מוכנה ומכילה פריטים לפי בקשת המשתמש, ולכן נחזיר אותה
    return sortedArr;
  }
  // אם התוכנה תתקל בבאג היא תגיע לכאן ויוחזר למשתמש שיש שגיאה באחת הפונקציות
  catch (error) {    
    console.error(error);   //מחזיר שגיאה למשתמש
    return false;   // מחזיר לפונקציה ערך של "שקר" מכיוון שלא קיבלנו את מה שרצינו ממנה
  }
}

// פונקציה שמחזירה מערך עם כל הבגדים  שיש להם את המחיר הזול ביותר בחנות
// שם הפונקציה שמקבלת כפרמטר רשימה/מערך של פריטים בחנות (מערך חדש עם הפריטים שממויינים מהזול ליקר) ומחזירה ערך שהוא מסוג רשימת בגדים או שגיאה
// יצרתי פפונקציה שמקבלת רשימת של פריטים שממויינים כבר לפי מחיר- מהזול ליקר
//  והגדרתי שהסינון שלי- ה"פילטר", יכניס לי למערך חדש רק פריטים שיש להם מחיר שהוא זהה למחיר של הפריט הראשון- שהוא הזול ביותר כי המערך שנתתי לפונקציה כבר ממויין
function getTheCheapestItem (sortedArr:Item[]): Item[] | false{
  //TYCATCH- משמש אותנו למניעת באגים בקוד שלנו
  try {   
    const chosenItemsArr = clothesShopArr.filter(item => item.price== sortedArr[0].price); // אותו קונספט כמו בפונקציה הראשונה ( לגבי פעולת הפילטר)
    return sortedArr;
  } catch (error) {
    console.error(error);
    return false;
  }
}
