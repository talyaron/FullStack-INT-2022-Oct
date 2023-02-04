var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function dataFromStorage() {
    try {
        var dataFromStorageUsers = localStorage.getItem("users");
        if (!dataFromStorageUsers || dataFromStorageUsers == null) {
            updateUserToLocalStorage();
        }
        else {
            var data = JSON.parse(dataFromStorageUsers);
            users.splice.apply(users, __spreadArrays([0], data));
            console.log("users", users);
            updateUserToLocalStorage();
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
        else if (getAlbumFromStorage().length <= albums.length) {
            updatePhotosToLocalStorage();
        }
        else if (albums[albums.length - 1].photos.length !== 0) {
            updatePhotosToLocalStorage();
        }
        else {
            var data = JSON.parse(dataFromStorageAlbums);
            albums.splice.apply(albums, __spreadArrays([0, albums.length], data));
        }
    }
    catch (error) {
        console.log(error);
    }
}
