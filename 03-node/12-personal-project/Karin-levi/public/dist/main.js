var menuElement = document.querySelector('.menu');
var Product = /** @class */ (function () {
    function Product(name, imgLink, details, price, uid) {
        this.name = name;
        this.imgLink = imgLink;
        this.details = details;
        this.price = price;
        this.uid = uid;
    }
    return Product;
}());
var salmonTartare = new Product("salmon Tartare", "https:uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022102814290450.jpg", "On a matzah of rice, purple onion, coriander, pepper, chili, avocado and green onion", 69, "1111");
var cevicheTrio = new Product("Cerviche Trio", "https:uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022122013521047.jpg", "Tuna salmon and locus and ponzo sauce on top", 63, "2222");
var tatakiButchers = new Product("Tataki Butchers", "https:uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061611281780.jpg", "Slices of butcher's slice on a bed of dairy puree, with hot pepper, in marinade sauce with coriander over sweet potato chips", 63, "3333");
var adamame = new Product("Adamame", "https:uppsale.blob.core.windows.net/frameimages/thumb_rest38_2019031322291583.jpg", "Soy beans blanched in salt and lemon.", 38, "4444");
var japanesePickledVegetables = new Product("Japanese Vegetables", "https:uppsale.blob.core.windows.net/frameimages/thumb_rest38_2016121312514575.jpg", "Bok Choy, carrots, cucumber, served with a spicy chili and sesame sauce.", 26, "5555");
var indianRoll = new Product("Indian Roll", "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalmT2TAZogZTYSkl_OyvPcr1WNMiqSMsLEA&usqp=CAU", "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.", 79, "6666");
var crispyRice = new Product("Crispy Rice", "https:uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061611373633.jpg", "Guacamole seasoned on lettuce with a spicy ponzo sauce", 89, "7777");
var tartarSurprise = new Product("Tartar Surprise", "https:uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061621051902.jpg", "4 pieces of rice circles with guacamole and tempura shrimp from them 2 pieces of lemon salmon tartare, avocado, green onion and chives 2 tuna tartare, pineapple, chives in ponzo sauce.", 76, "8888");
var japaneseTartarSachets = new Product("Japanese Tartar Sachets", "https:uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061712261873.jpg", "6 pcs nori dumplings, 3 pcs stuffed with tuna tartare and 3 pcs stuffed with salmon tartare garnished with guacamole and sesame leaves in tempura", 74, "9999");
var kamikazeRoll = new Product("Kamikaze Roll", "https:uppsale.blob.core.windows.net/frameimages/thumb_rest38_2020031317503132.jpg", "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.", 81, "1010");
var mexicanRoll = new Product("Mexican Roll", "https:uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061712283568.jpg", "Salmon, cucumber, avocado, zipotella mayonnaise in salmon shell, guacamole, chili in tempura and orange tobiko", 90, "1212");
var products = [
    mexicanRoll,
    kamikazeRoll,
    japaneseTartarSachets,
    tartarSurprise,
    crispyRice,
    indianRoll,
    japanesePickledVegetables,
    adamame,
    tatakiButchers,
    salmonTartare
];
function renderMeals() {
    try {
        var html = "<div class=\"menu\">";
        html += products
            .map(function (item) {
            return "\n                <br/>\n                <div class=\"menu__meal\">\n                <div class=\"menu__meal__img\"><img src=" + item.imgLink + " alt=\"\"></div>\n                <div class=\"menu__meal__details\">\n                    <div class=\"menu__meal__details__name\">" + item.name + "</div>\n                    <div class=\"menu__meal__details__detailsWrapper\">\n                        <div class=\"menu__meal__details__detailsWrapper__description\">" + item.details + " </div>\n                        <div class=\"menu__meal__details__detailsWrapper__price\">" + item.price + "</div>\n                    </div>\n                </div>\n                <div class=\"menu__meal__btnAdd\">\n                    <button onclick=\"addToCart('" + item.uid + "')\">Add</button>\n                </div>\n                </div>\n            ";
        }).join(" ");
        html += "</div>";
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
var productsHtml = renderMeals();
menuElement.innerHTML = productsHtml;
function addToCart(uid) {
    var cart = {};
    var cartStr = localStorage.getItem('cart');
    if (cartStr != null) {
        cart = JSON.parse(cartStr);
    }
    var meal = products.find(function (element) { return element.uid == uid; });
    if (meal !== undefined) {
        if (meal.name in cart) {
            cart[meal.name]["quantity"] += 1;
        }
        else {
            cart[meal.name] = { "quantity": 1, "price": meal.price, "imgLink": meal.imgLink, "uid": meal.uid };
        }
        var cartData = JSON.stringify(cart);
        //todo - store in cookies
        localStorage.setItem('cart', cartData);
    }
}
