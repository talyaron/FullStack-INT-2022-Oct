function uId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

//class of an item
class Item {
    public imgLink;
    public uid: string;
    constructor(public name: string, imgLink: string, public details: string, public price: number, public type: string) {
        this.uid = uId();

        if (imgLink) {
            this.imgLink = imgLink;
        } else {
            this.imgLink = "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/sushi-sashimi-1296x728-header.jpg?w=1155&h=1528";
        }
    }
}

//data


//Starters
const salmonTartare = new Item(
    "salmon Tartare",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022102814290450.jpg",
    "On a matzah of rice, purple onion, coriander, pepper, chili, avocado and green onion",
    69,
    "Starters"
)

const cevicheTrio = new Item(
    "Cerviche Trio",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022122013521047.jpg",
    "Tuna salmon and locus and ponzo sauce on top",
    63,
    "Starters"
)

const tatakiButchers = new Item(
    "Tataki Butchers",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061611281780.jpg",
    "Slices of butcher's slice on a bed of dairy puree, with hot pepper, in marinade sauce with coriander over sweet potato chips",
    63,
    "Starters"
)

const adamame = new Item(
    "Adamame",
    "https://uppsale.blob.core.windows.net/frameimages/thumb_rest38_2019031322291583.jpg",
    "Soy beans blanched in salt and lemon.",
    38,
    "Starters"
)

const japanesePickledVegetables = new Item(
    "Japanese Vegetables",
    "https://uppsale.blob.core.windows.net/frameimages/thumb_rest38_2016121312514575.jpg",
    "Bok Choy, carrots, cucumber, served with a spicy chili and sesame sauce.",
    26,
    "Starters"
)

//sushi
const indianRoll = new Item(
    "Indian Roll",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalmT2TAZogZTYSkl_OyvPcr1WNMiqSMsLEA&usqp=CAU",
    "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.",
    79,
    "Sushi"
);

const crispyRice = new Item(
    "Crispy Rice",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061611373633.jpg",
    "Guacamole seasoned on lettuce with a spicy ponzo sauce",
    89,
    "Sushi"
);

const tartarSurprise = new Item(
    "Tartar Surprise",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061621051902.jpg",
    "4 pieces of rice circles with guacamole and tempura shrimp from them 2 pieces of lemon salmon tartare, avocado, green onion and chives 2 tuna tartare, pineapple, chives in ponzo sauce.",
    76,
    "Sushi"
);

const japaneseTartarSachets = new Item(
    "Japanese Tartar Sachets",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061712261873.jpg",
    "6 pcs nori dumplings, 3 pcs stuffed with tuna tartare and 3 pcs stuffed with salmon tartare garnished with guacamole and sesame leaves in tempura",
    74,
    "Sushi"
);

const kamikazeRoll = new Item(
    "Kamikaze Roll",
    "https://uppsale.blob.core.windows.net/frameimages/thumb_rest38_2020031317503132.jpg",
    "8 pieces of spicy tuna, avocado and asparagus in Dennis shell, Japanese mayonnaise, teriyaki and Indian potato chips.",
    81,
    "Sushi"
);

const mexicanRoll = new Item(
    "Mexican Roll",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022061712283568.jpg",
    "Salmon, cucumber, avocado, zipotella mayonnaise in salmon shell, guacamole, chili in tempura and orange tobiko",
    90,
    "Sushi"
);


//drinkes
const pinkFlow = new Item(
    "Pink flow",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022111516175347.jpg",
    "Ketel One, lemon juice, watermelon monin, red grapefruit monin, basil",
    55,
    "Drinks"
)

const pimmsCup = new Item(
    "Pimms cup",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022101921401507.jpg",
    "Pimms dessert, lychee liqueur, sour and ginger ale",
    54,
    "Drinks"
)

const japanJin = new Item(
    "Japan jin",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022101921411299.jpg",
    "Pimms Tanqueray gin, lemon grass, lemon, yuzu, cucumber, cilantro, Mediterranean tonic garnished with dried seaweed, a sour and refreshing cocktail.",
    59,
    "Drinks"
)

const gingerBomb = new Item(
    "Ginger bomb",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022101921420836.jpg",
    "Ouzo, berry monin, lemon juice, ginger beer",
    62,
    "Drinks"
)

const captainCoco = new Item(
    "Captain coco",
    "https://uppsale.blob.core.windows.net/frameazrieliimages/thumb_rest186_2022101921423381.jpg",
    "Ouzo, berry monin, Coconut sorbet, spicy Captain Morgan rum, passion fruit monin, lemon juice garnished with dried banana juice, ginger beer",
    66,
    "Drinks"
)

const itemsTemp = [
    captainCoco,
    gingerBomb,
    japanJin,
    pimmsCup,
    pinkFlow,
    kamikazeRoll,
    mexicanRoll,
    salmonTartare,
    cevicheTrio,
    tatakiButchers,
    adamame,
    japanesePickledVegetables,
    indianRoll,
    crispyRice,
    tartarSurprise,
    japaneseTartarSachets
]

