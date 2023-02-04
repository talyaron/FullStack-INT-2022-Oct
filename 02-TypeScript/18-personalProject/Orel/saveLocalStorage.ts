function dataFromStorage(){
try {

    const dataFromStorageUsers = localStorage.getItem("users")
if(!dataFromStorageUsers || dataFromStorageUsers == null) {
    updateUserToLocalStorage() 
} else {
    const data = JSON.parse(dataFromStorageUsers);
    users.splice(0 , ...data)
console.log("users" ,users);
updateUserToLocalStorage()
}




} catch (error) {
    console.log(error);
}
}

function dataFromStorage1(){
    try {
        
const dataFromStorageAlbums = localStorage.getItem("albums")

if(!dataFromStorageAlbums || dataFromStorageAlbums === null) {
    updatePhotosToLocalStorage()
    } else if(getAlbumFromStorage()!.length <= albums.length ){
        updatePhotosToLocalStorage()
    }
    else{
        const data = JSON.parse(dataFromStorageAlbums);
        albums.push(...data)

    }
    } catch (error) {
        console.log(error);
    }
}
