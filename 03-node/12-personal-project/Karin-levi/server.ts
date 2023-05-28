import express from "express";
import jwt from "jwt-simple";


import mongoose, { Schema } from "mongoose";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const app = express();

app.use(express.json());
//
//const secret: string | undefined = process.env.JWT_SECRET;
const secret = "someSecret";
const uri: string | undefined = process.env.MONGODB_URI;

if (uri) {
    mongoose
        .connect(uri)
        .then(() => {
            console.log("DB connected!");
        })
        .catch((err) => console.log(err));
} else {
    console.log("No URI to DB");
}

//schema
const ClientSchema = new Schema({
    username: String,
    password: String,
});

class Product {
    constructor(
        public name: string,
        public imgLink: string,
        public details: string,
        public price: number,
        public uid: string
    ) { }
}

const ProductSchema = new Schema({
    name: String,
    imgLink: String,
    details: String,
    price: String,
    uid: { type: String, unique: true },
});

const ProductModel = mongoose.model("products", ProductSchema);
const ClientModel = mongoose.model("clients", ClientSchema);


app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await ClientModel.findOne({ username, password });


    if (user) {
        const token = jwt.encode({ userId: user._id, role: "public" }, secret);
        res.cookie("user", token, { maxAge: 50000000, httpOnly: true });
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const users = await ClientModel.find({ username, password });
    if (users.length != 0) {
        res.json({ success: false });
    } else {
        const client = await ClientModel.create({ username, password });
        res.json({ success: true });
    }
});

app.get('/products', async (req, res) => {
    const products = await ProductModel.find({}).exec();
    res.send(products)
});


app.use(express.static("./public"));

app.listen(3001, () => {
    console.log("server listen on port 3001");
});

try {
    //enable this function only on first time
    //loadProducts()
} catch (error) {

}

function loadProducts() {
    const salmonTartare = new Product(
        "salmon Tartare",
        "https:uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022102814290450.jpg",
        "On a matzah of rice, purple onion, coriander, pepper, chili, avocado and green onion",
        69,
        `1111`
    )

    const cevicheTrio = new Product(
        "Cerviche Trio",
        "https:uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022122013521047.jpg",
        "Tuna salmon and locus and ponzo sauce on top",
        63,
        `2222`
    )

    const tatakiButchers = new Product(
        "Tataki Butchers",
        "https:uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061611281780.jpg",
        "Slices of butcher's slice on a bed of dairy puree, with hot pepper, in marinade sauce with coriander over sweet potato chips",
        63,
        `3333`
    )

    const adamame = new Product(
        "Adamame",
        "https:uppsale.blob.core.windows.net/frameimages/thumb_rest38_2019031322291583.jpg",
        "Soy beans blanched in salt and lemon.",
        38,
        `4444`
    )

    const japanesePickledVegetables = new Product(
        "Japanese Vegetables",
        "https:uppsale.blob.core.windows.net/frameimages/thumb_rest38_2016121312514575.jpg",
        "Bok Choy, carrots, cucumber, served with a spicy chili and sesame sauce.",
        26,
        `5555`
    )

    const indianRoll = new Product(
        "Indian Roll",
        "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalmT2TAZogZTYSkl_OyvPcr1WNMiqSMsLEA&usqp=CAU",
        "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.",
        79,
        `6666`
    );

    const crispyRice = new Product(
        "Crispy Rice",
        "https:uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061611373633.jpg",
        "Guacamole seasoned on lettuce with a spicy ponzo sauce",
        89,
        `7777`
    );

    const tartarSurprise = new Product(
        "Tartar Surprise",
        "https:uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061621051902.jpg",
        "4 pieces of rice circles with guacamole and tempura shrimp from them 2 pieces of lemon salmon tartare, avocado, green onion and chives 2 tuna tartare, pineapple, chives in ponzo sauce.",
        76,
        `8888`
    );

    const japaneseTartarSachets = new Product(
        "Japanese Tartar Sachets",
        "https:uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061712261873.jpg",
        "6 pcs nori dumplings, 3 pcs stuffed with tuna tartare and 3 pcs stuffed with salmon tartare garnished with guacamole and sesame leaves in tempura",
        74,
        `9999`
    );

    const kamikazeRoll = new Product(
        "Kamikaze Roll",
        "https:uppsale.blob.core.windows.net/frameimages/thumb_rest38_2020031317503132.jpg",
        "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.",
        81,
        `1010`
    );

    const mexicanRoll = new Product(
        "Mexican Roll",
        "https:uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061712283568.jpg",
        "Salmon, cucumber, avocado, zipotella mayonnaise in salmon shell, guacamole, chili in tempura and orange tobiko",
        90,
        `1212`
    );

    const products: Product[] = [
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
    ]

    for (let i = 0; i < products.length; i++) {
        try {
            const product = ProductModel.create(products[i]);
        } catch (e) {
            console.log("bla")
        }

    }
}


