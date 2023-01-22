// היוזר יכניס מוצרים לחנות ומיון לפי מחירים זול ליקר שלב ראשון נתחיל עם הדאטה מודל
//   נתחיל עם מודל -דאטה להגדיר את הישויות
var Product = /** @class */ (function () {
    function Product(imgUrl, name, quantity, price) {
        this.imgUrl = imgUrl;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    return Product;
}());
//       אובייקט שמכיל אובייקטים  product
var product = [];
