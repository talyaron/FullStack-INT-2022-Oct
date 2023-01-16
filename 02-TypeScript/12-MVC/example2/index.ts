getProductFromUser();
getProductFromUser();
getProductFromUser();
console.log(products);

const sortedProducts = sortProducts(products, "date");
renderProducts(sortedProducts, rootProducts);
