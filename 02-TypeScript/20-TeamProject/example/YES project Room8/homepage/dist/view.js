function renderRoommate(indexStart, indexEnd) {
    try {
        if (!User || !Array.isArray(users))
            throw new Error("Items is not an array");
        var tempUserProfiles = [];
        // console.log(`indexStart ${indexStart} indexEnd ${indexEnd}`);
        for (var i = indexStart; i < indexEnd; i++) {
            tempUserProfiles.push(users[i]);
        }
        // console.log('tempUserProfiles');
        // console.log(tempUserProfiles);
        var html = tempUserProfiles
            .map(function (users) {
            return "\n            <div class=\"boxMain__container__boxes roommateDiv roommatePage__container\"  onclick=\"handleShowRoommate('" + users.uid + "')\">\n            <img class=\"boxMain__container__boxes__img\"\n             src= " + users.imgSrc + " alt=\"roommate Img\">\n            <h4>" + users.userName + "</h4>\n            <p>Area: " + users.area + "</p>\n            <p>Rooms: up to " + users.rooms + "</p>\n            <p>floor: up to " + users.floor + "</p>\n            </div>\n            ";
        })
            .join(" ");
        console.log("html " + html);
        var element = document.querySelector(".roommate");
        if (!element)
            throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderApartment(indexStart, indexEnd) {
    try {
        if (!ApartmentProfil || !Array.isArray(apartmentProfils))
            throw new Error("Items is not an array");
        var tempApartmentProfiles = [];
        for (var i = indexStart; i < indexEnd; i++) {
            tempApartmentProfiles.push(apartmentProfils[i]);
        }
        var html = tempApartmentProfiles
            .map(function (apartments) {
            return "\n            <div class=\"boxMain__container__boxes apartmentDiv apartment__container\" onclick=\"handleShowApartment('" + apartments.uid + "')\">\n            <img class=\"boxMain__container__boxes__img\"\n             src= " + apartments.apartmentImage + " alt=\"roommate Img\">\n            <h4>" + apartments.city + "</h4>\n            <p>Rooms: " + apartments.rooms + "</p>\n            <p>Floor: " + apartments.floor + "</p>\n            <p>Price: " + apartments.price + " NIS</p>\n            </div>\n            ";
        })
            .join(" ");
        // console.log(`htmlApartments ${html}`);
        var element = document.querySelector(".apartments");
        if (!element)
            throw new Error("Couldnt find element in the DOM");
        element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
