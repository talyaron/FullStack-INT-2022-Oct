var Bird = /** @class */ (function () {
    function Bird(img, name, size, color, location, action) {
        this.img = img;
        this.name = name;
        this.size = size;
        this.color = color;
        this.location = location;
        this.action = action;
        this.uid = uid();
    }
    return Bird;
}());
var Location = /** @class */ (function () {
    function Location(img, name, desc, price) {
        this.img = img;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.uid = uid();
    }
    return Location;
}());
var items = [];
var birdsList = [];
birdsList.push(new Bird("https://i.natgeofe.com/k/68424626-f7d0-4275-8d50-0450b5800563/peregrine-falcon-wings-extended_2x1.jpg", "Peregrine Falcon", "75", "#644a12", "Desert", "Soaring"));
birdsList.push(new Bird("https://i.natgeofe.com/k/50fe4ce2-3d74-4da8-984d-887b7fb75005/GreatHornedOwl1_3x4.jpg", "Great Horned Owl", "75", "#644a12", "Desert", "Soaring"));
birdsList.push(new Bird("https://upload.wikimedia.org/wikipedia/commons/b/be/Hoopoe_taking_food_to_the_nest_%2819546723036%29.jpg", "Hoopoe", "25", "#644a12", "Plains", "On The Ground"));
birdsList.push(new Bird("https://www.google.com/url?sa=i&url=https%3A%2F%2Febird.org%2Fspecies%2Fpilwoo&psig=AOvVaw3rb43Yyf023YPLi2Kxq2A5&ust=1675868790345000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPDMqvTXg_0CFQAAAAAdAAAAABAY", "Woodpecker", "25", "#ff0000", "On Trees", "Pecking"));
birdsList.push(new Bird("https://www.birdsbase.com/bbis_test/img/sub/44110/871978/1395735700251_602076.jpg", "Egyptian Vulture", "75", "#ffffff", "Desert", "Soaring"));
birdsList.push(new Bird("https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Rose-ringed_parakeet_%28Psittacula_krameri_manillensis%29.jpg/220px-Rose-ringed_parakeet_%28Psittacula_krameri_manillensis%29.jpg", "Rose-Ringed Parakeet", "50", "#0ddc09", "Trees", "Soaring")).
    renderForm(birdsList, "birdCardContainer");
