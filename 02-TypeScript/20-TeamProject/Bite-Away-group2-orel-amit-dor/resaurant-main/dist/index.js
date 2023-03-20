var _restaurant = loggedInRestaurant();
if (!_restaurant)
    throw new Error("no restaurant found");
var restaurant = _restaurant;
