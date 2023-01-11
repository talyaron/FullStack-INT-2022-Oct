var Product = /** @class */ (function () {
    // name: string;
    // price: number;
    // department: string;
    // type: string;
    function Product(name, price, department, type) {
        this.name = name;
        this.price = price;
        this.department = department;
        this.type = type;
        // this.name = name;
        // this.price=price;
        // this.department=department;
        // this.type =type;
    }
    return Product;
}());
var p1 = new Product("Levies Jeans", 200, "women", "jeans");
var p2 = new Product("abc", 250, "women", "shirts");
var p3 = new Product("pp", 180, "men", "lk");
var p4 = new Product("xx", 189, "men", "shirts");
var products = [p1, p2, p3, p4];
console.log("products", products);
/*)1/*/
var allShirts = products.filter(function (p) { return p.type == "shirts"; });
console.log("allShirts", allShirts);
// const allWomen = products.filter((p)=>p.department == "women")
// const abovePrice = products.filter((p)=>p.price >=70 )
// )2 reduce- נותנת איבר מהמערך מינימום מקסימום עפי ההגדרה שנגדיר בתוכה-הפונקציה שנגדיר
var cheapestItem = products.reduce(function (x, z) { return x.price < z.price ? x : z; });
console.log("cheapestItem", cheapestItem);
// function getCheapestItem(a: Product,b: Product){
//     if(a.price > b.price){
//         return b;
//     } else{
//         return a;
//     }
// }
// const _getCheapestItem = (a: Product, b: Product) => {
//     if(a.price > b.price){
//         return b;
//     } else{
//         return a;
//     }
// }
// const __getCheapestItem = (a: Product, b: Product) => {a.price>b.price? a:b}
// const _cheapestItem = products.reduce(getCheapestItem);
//(3 sort all items  והזול מבינהם
//const allDepartment1 = products.reduce((x, z) => x.price < z.price ? x : z);
//console.log("department", allDepartment1)
var allDepartment = products.filter(function (p) { return p.department < "women,men"; });
console.log("allDepartment", allDepartment);
var allDepartment2 = products.sort(function (a, b) { return a.price - b.price; });
console.log("allDepartment2", allDepartment2);
