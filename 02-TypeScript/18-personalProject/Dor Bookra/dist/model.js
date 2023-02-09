var Bird = /** @class */ (function () {
    function Bird(img, name, size, color, area, action) {
        this.img = img;
        this.name = name;
        this.size = size;
        this.color = color;
        this.area = area;
        this.action = action;
        this.uid = uid();
    }
    return Bird;
}());
var Area = /** @class */ (function () {
    function Area(locations) {
        this.locations = locations;
    }
    return Area;
}());
function addLocations() {
    var locationsArray = [];
    locationsArray = [
        {
            locations: "Desert"
        },
        {
            locations: "Forest"
        },
        {
            locations: "Lake"
        },
        {
            locations: "Plains"
        }
    ];
    if (locations.length < locationsArray.length) {
        locations.push.apply(locations, locationsArray);
        renderSelectLocation(locations, "birdLocation");
        renderSelectLocation(locations, "birdSearch");
        return locations;
    }
}
function pushToArray() {
    var birdsArray = [];
    birdsArray = [
        {
            img: "https://i.natgeofe.com/k/68424626-f7d0-4275-8d50-0450b5800563/peregrine-falcon-wings-extended_2x1.jpg",
            name: "Peregrine Falcon",
            size: "75",
            color: "#644a12",
            area: "Desert",
            action: "Soaring",
            uid: "ldwuigr1y5fr8zpzvps"
        },
        {
            img: "https://i.natgeofe.com/k/50fe4ce2-3d74-4da8-984d-887b7fb75005/GreatHornedOwl1_3x4.jpg",
            name: "Great Horned Owl",
            size: "75",
            color: "#b5ab7d",
            area: "Trees",
            action: "Soaring",
            uid: "ldwuiguqyi27n1u7ad"
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/b/be/Hoopoe_taking_food_to_the_nest_%2819546723036%29.jpg",
            name: "Hoopoe",
            size: "25",
            color: "#c58e30",
            area: "Plains",
            action: "On The Ground",
            uid: "ldwuigf3y5fr8zpzvps"
        },
        {
            img: "https://th.bing.com/th/id/R.693bb51766d00847a9d8a8b4dbd76c39?rik=qDdmf94IyAoVFw&pid=ImgRaw&r=0",
            name: "Woodpecker",
            size: "25",
            color: "#ff0000",
            area: "Trees",
            action: "Pecking",
            uid: "ldwuigd2s5fr8zpzvps"
        },
        {
            img: "https://www.birdsbase.com/bbis_test/img/sub/44110/871978/1395735700251_602076.jpg",
            name: "Egyptian Vulture",
            size: "75",
            color: "#ffffff",
            area: "Desert",
            action: "Soaring",
            uid: "ldwuigr1y5hn3zpzvps"
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Rose-ringed_parakeet_%28Psittacula_krameri_manillensis%29.jpg/220px-Rose-ringed_parakeet_%28Psittacula_krameri_manillensis%29.jpg",
            name: "Rose-Ringed Parakeet",
            size: "50",
            color: "#0ddc09",
            area: "Trees",
            action: "Soaring",
            uid: "ldwuigr1y5fr8zpzvps"
        },
        {
            img: "https://img.haarets.co.il/img/1.9164857/1805327842.jpg?precrop=2470,1619,x0,y0&height=1200&width=1200",
            name: "Common Kingfisher",
            size: "25",
            color: "#3fcac1",
            area: "River",
            action: "Fishing",
            uid: "ldwuigr1y5fr2gpzvps"
        }
    ];
    if (birds.length < birdsArray.length) {
        birds.push.apply(birds, birdsArray);
        renderForm(birds, "birdCardContainer");
        return birds;
    }
}
