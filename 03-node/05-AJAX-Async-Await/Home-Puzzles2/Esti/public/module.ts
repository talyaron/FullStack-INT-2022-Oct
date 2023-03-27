
// interface Admin {name:string, password: string};

// const admins: Admin [] = [
//     {name: "Esti", password: "123"},
//     {name: "esti", password: "123"},

// ];

interface FoodTips {
        id: number;
        header: string,
        photo: string,
        tip: string,  
             
}
export const foodTips: FoodTips[] = [{
    id: 0,
    header: "Freeze Liquids in Useable Portions!",
    photo:"https://www.seriouseats.com/thmb/-QtDZqhxSJckIdb72GoqtLjPUhM=/750x0/filters:no_upscale{}:max_bytes{150000}:strip_icc{}:format{webp}/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__03__20150401-freezing-herbs-best-method-3-1500x1125-c8283e8828e74e7688019a48a061d859.jpg",
    tip: "Serious Eats Drinks Site Editor Maggie Hoffman says that she freezes wine in ice cube trays and stores them in the freezer, ready to be pulled out one at a time and added to pan sauces and stews, saving you from having to open a whole bottle every time a recipe calls for some wine. Similarly, if you make yourself a large batch of stock, freeze it in convenient portion sizes in the freezer—ice cube trays and half-pint deli containers are great for this—then transfer them to a plastic freezer bag to be pulled out an used whenever you need fresh stock.",
},

{
    id: 1,
    header:"Freeze as Flat as Possible",
    photo: "https://www.seriouseats.com/thmb/2H8FzMzxEi1FGb2cMneJC8-ezhw=/750x0/filters:no_upscale{}:max_bytes{150000}:strip_icc{}:format{webp}/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__09__20160926-freeze-flat-4-1500x1125-cd9201655b7c4a75853f775d2a3170c6.jpg",
    tip: "One more freezer trick: freeze things flat and stack them. Whether it's soups, stews, or ground meat, the flatter and wider you can get them, the faster they'll freeze and defrost, which not only makes you more efficient, it also improves the quality of the food {the longer something takes to freeze, the more cellular damage it will suffer}. When freezing raw meat, soups, and stews, if you have a vacuum sealer, use it! Otherwise, place foods in heavy-duty freezer bags, squeeze out all the air, lay the bag flat, and use your hands to work the contents into as flat and even a shape as possible. When freezing vegetables, cut them into pieces 1-inch or less and blanch any green vegetables. Place them on a large plate or sheet tray spaced apart from each other and freeze them solid before transferring to a plastic freezer bag and storing flat.",
},

{
    id: 2,
    header:"Partially Freeze Meat Before Cutting",
    photo:"https://www.seriouseats.com/thmb/ZtUHHxyYmXWTNYAPHW5rzLVuVQo=/750x0/filters:no_upscale{}:max_bytes{150000}:strip_icc{}:format{webp}/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__12__20151118-spaghetti-carbonara-vicky-wasik-2-1500x1125-42bdef1c970948418ba920fd225c5516.jpg",
    tip: "Slicing meat to grind or cook in a stir-fry can be tricky even with a sharp knife. To make it easier, place the meat in the freezer for 10 to 15 minutes to stiffen it up.",
},

{
    id: 3,
    header:"How To Make Rotis Soft",
    photo: "https://i.ndtvimg.com/i/2018-01/chapatti_696x400_61514879922.jpg",
    tip: "By now, we all are familiar with the hard taste of the roti, and this mainly happens because the consistency of the dough is not soft. So, if you want your rotis to be soft when you bite in them, then knead the dough with warm water. You can also do the finger test after kneading the dough, just poke the dough slightly with one finger, and if it feels soft, then you are good to go! Make sure to rest the dough for at least 15 minutes before cooking!",
},

{
    id: 4,
    header:"How To Make Creamy Gravies Without Using Store-Bought Cream",
    photo: "https://c.ndtvimg.com/2020-09/loh4c11g_tomato-gravy-veg-curry_625x300_28_September_20.jpg",
    tip: "Most of us have become health-conscious in the past few years, and as we try to find healthy alternatives even in our cooking, we bring you a way to make your food creamy without using cream. To do this, you can either use milk, malai, or cashew paste to make the gravies taste richer and heavier.",
},

{
    id: 5,
    header: "My boiled eggs are difficult to peel Solution: add vinegar",
    photo: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/eggs-and-aubergine-salad-3d152da.jpg?quality=90&webp=true&fit=700,350",
    tip: "You probably already know that adding a dash of vinegar to egg poaching water helps coagulate the white. But did you know that adding a dash of vinegar to the water when boiling eggs helps the shell peel off more easily? Say goodbye to piles of tiny egg shell shards.Test this tip out with one of our",
},

{
    id: 6,
    header: "I’m having a party and don’t have fridge space for drinks",
    photo: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/wine-glasses-4d2e2d2.jpg?quality=90&webp=true&fit=700,350",
    tip: "Not enough space for your party loot? Save space for food by putting drinks into big tubs, buckets and bowls filled with salted ice water – the salt will cause the temperature to drop, giving you icy cold drinks in seconds.",
},

{
    id: 7,
    header: "Rinse your rice before cooking to prevent it from becom-ing gloopy.",
    photo: "https://img.buzzfeed.com/buzzfeed-static/static/2018-09/20/13/asset/buzzfeed-prod-web-04/sub-buzz-25510-1537464777-5.jpg?downsize=600:*&output-format=auto&output-quality=auto",
    tip: "Most rice is not meant to be cooked without at least one rinse. Give it a wash or two to filter out any debris and surface starches.",
},

{
    id: 8,
    header: "Find the sweetest watermelons by looking for a yellow patch and listening for a hollow sound.",
    photo: "https://img.buzzfeed.com/buzzfeed-static/static/2021-03/29/10/asset/daa2c2a16cbc/sub-buzz-4105-1617014032-1.jpg?downsize=600:*&output-format=auto&output-quality=auto",
    tip: "Next time you're shopping for watermelons, just look at their bottoms and pick the one with the yellow-est patch.",
},

{
    id: 9,
    header: "If you want to brown something, don't overcrowd the pan.",
    photo: "https://img.buzzfeed.com/buzzfeed-static/static/2018-09/20/13/asset/buzzfeed-prod-web-06/sub-buzz-13549-1537465381-1.jpg?downsize=600:*&output-format=auto&output-quality=auto",
    tip: "Listen, I know you're short on time and want to get right to the eating part of your night, but if you want to slightly brown and crisp your vegetables {and you definitely do}, then it pays to cook your ingredients in smaller batches. If you try to dump all your food into a single pan, the temperature will drop and you won't get that nice, cooked outer layer you're aiming for.",
},

{
    id: 10,
    header: "Add a tiny bit of salt to your coffee to make it less bitter.",
    photo: "https://img.buzzfeed.com/buzzfeed-static/static/2019-09/11/16/asset/01ed78137b69/sub-buzz-1275-1568218582-1.png?downsize=600:*&output-format=auto&output-quality=auto",
    tip: "Alton Brown explains further: 'Not only does salt cut the bitterness of coffee, but it also smooths out the 'stale' taste of tank-stored water,' Brown says. 'Research has proven that salt is actually better at neutralizing bitterness than sugar.'",
},

{
    id: 11,
    header: "When working with aromatics, add garlic last.",
    photo: "https://img.buzzfeed.com/buzzfeed-static/static/2019-09/10/20/asset/ab4fe5ee2f7a/sub-buzz-1047-1568147419-1.png?downsize=600:*&output-format=auto&output-quality=auto",
    tip: "Because garlic burns easily, many recipes tell you to add it last, and that's a great blanket rule — especially if it's minced or chopped.",
}]



