function dataFromStorage() {
    try {
        var dataFromStorageUsers = localStorage.getItem("users");
        if (!dataFromStorageUsers || dataFromStorageUsers === null) {
            updateUserToLocalStorage();
        }
        else {
            var data = JSON.parse(dataFromStorageUsers);
            if (!data)
                throw new Error("localStorage data not found");
            if (users.length > data.length) {
                updateUserToLocalStorage();
            }
            else {
                users.push.apply(users, data);
            }
            userIndex = users.findIndex(function (e) { return e.username = usernameUser; });
            localStorage.setItem("userIndex", userIndex.toString());
        }
    }
    catch (error) {
        console.log(error);
    }
}
function dataFromStorage1() {
    try {
        var dataFromStorageAlbums = localStorage.getItem("albums");
        if (!dataFromStorageAlbums || dataFromStorageAlbums === null) {
            updatePhotosToLocalStorage();
        }
        else {
            var data = JSON.parse(dataFromStorageAlbums);
            if (!data)
                throw new Error("localStorage not found");
            if (albums.length > data.length) {
                updatePhotosToLocalStorage();
            }
            else {
                albums.push.apply(albums, data);
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}
