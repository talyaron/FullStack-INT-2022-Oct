// 2)
function addImages() {
    const imageArr: Array<string> = [];
    while (imageArr.length < 5) {
        let userImage: string | null = prompt(
            `Please enter 5 URL's of an image one by one: ${imageArr.length}/5`
        );
        if (userImage) {
            imageArr.push(
                `<img class="image${imageArr.length + 1}" src="${userImage}">\n`
            );
        }
    }
    const imageContainer: HTMLDivElement | null =
        document.querySelector(".imageContainer__imageGallery");
    if (imageContainer != null) {
        imageContainer.innerHTML = imageArr.join("");
    }
}

addImages();

// 3)
class product {
    constructor(
        public name: string,
        public category: string,
        public price: number,
        public image:string
    ) {}
}

const spongeBobShirt: product = new product("SpongeBob's Shirt", "T-Shirt", 30,"https://www.pngkey.com/png/full/612-6120757_spongebob-man-graphic-t-shirt-bft4044-1-.png");
const spongeBob2Shirt: product = new product("SpongeBob's Shirt", "T-Shirt", 10,"https://www.seekpng.com/png/full/280-2809911_shocked-spongebob-t-shirt-maglietta-gucci-bugs-bunny.png");
const patrickPants: product = new product("Spongebob's Hat", "Hats", 25,"https://cdn.shopify.com/s/files/1/0197/1303/2254/products/12711550_SPONGEBOB_A_400x.png?v=1620726871");
const squidwardUnderware: product = new product(
    "SpongeBob's Hoodie",
    "Hoodies",
    20,"https://cdn.shopify.com/s/files/1/0150/0643/3380/products/SB-OICM_Viacom_Spongebob_Delta97200_HeatherOatmeal_1024x1024.png?v=1588254646"
);

const products: Array<product> = [
    spongeBobShirt,
    spongeBob2Shirt,
    patrickPants,
    squidwardUnderware,
];

function addProductsToDOM(arr:Array<product>){
    const productsContainer: HTMLDivElement | null = document.querySelector(".productsContainer__productsGrid");
    let productsStore: string = "";

    for (let product in products) {
        productsStore = productsStore +
            `<div class="product${product}"\n>
            <h1>${products[product].name}</h1>\n
            <p>Product Category: ${products[product].category}</p>\n
            <p>Product price: ${products[product].price}$</p>\n
            <img src="${products[product].image}">\n
            <button>Buy Now!</button>
            </div>\n`;
    }
    if (productsContainer != null) {
        productsContainer.innerHTML = productsStore;
    }
}

// addProductsToDOM(products);
