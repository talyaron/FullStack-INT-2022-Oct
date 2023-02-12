// function dataFromStorage() {
//     try {
//         const dataFromStorageUsers = localStorage.getItem("users")
//         if (!dataFromStorageUsers || dataFromStorageUsers == null) {
//             updateUserToLocalStorage()
//         } else if (storageData!.length <= users.length) {
//             updateUserToLocalStorage()
//         } else {
//             const data = JSON.parse(dataFromStorageUsers);
//             users.splice(0 , users.length , ...data)
//             console.log("users", users);
    
//         }

//     } catch (error) {
//         console.log(error);
//     }
// }

// function dataFromStorage1() {
//     try {
//         const dataFromStorageAlbums = localStorage.getItem("albums")

//         if (!dataFromStorageAlbums || dataFromStorageAlbums === null && getAlbumFromStorage()![albums.length-1].photos.length !== 0) {
//             updatePhotosToLocalStorage()
//         } else if (getAlbumFromStorage()!.length <= albums.length) {
//             updatePhotosToLocalStorage()
//         } else {
//             const data = JSON.parse(dataFromStorageAlbums);
//             albums.splice(0, albums.length, ...data)

//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
