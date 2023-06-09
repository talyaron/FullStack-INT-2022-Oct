function showRestaurant() {
    try {
        if (!restaurant)
            throw new Error("We can't show the list of restaurants");
        restaurant.innerHTML += restaurantList.map(getRestaurant);
    }
    catch (error) {
        console.error("something don't work with the function that map the list of restaurants");
    }
}
function getRestaurant(item) {
    try {
        if (!item)
            throw new Error("We can't show the list of restaurants");
        return "<div class=\"restaurant\">\n        <h2>" + item.name + "</h2>\n        <h3>Adress: " + item.address + "</h3>\n        <h5>Phone number: " + item.phoneNumber + "</h5>\n        <hr>\n        </div>";
    }
    catch (error) {
        console.error("something don't work with the function that show the list of restaurants");
    }
}
