function dataFromStorage(){
try {

    const dataFromStorageUsers = localStorage.getItem("users")
if(!dataFromStorageUsers || dataFromStorageUsers == null) {
   updateUserToLocalStorage() 
} else 
if(albums.length > getAlbumFromStorage.length){
    const data = JSON.parse(dataFromStorageUsers);
    users.splice(0 , ...data)
}
else{
    updateUserToLocalStorage()

console.log("users" ,users);

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
    } else {
        const data = JSON.parse(dataFromStorageAlbums);
        albums.push(...data)
    updatePhotosToLocalStorage()
    }
    } catch (error) {
        console.log(error);
    }
}
