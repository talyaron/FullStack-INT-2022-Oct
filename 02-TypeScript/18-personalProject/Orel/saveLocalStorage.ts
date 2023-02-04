function dataFromStorage(){
try {
    const dataFromStorageUsers = localStorage.getItem("users")
    if(!dataFromStorageUsers || dataFromStorageUsers === null) {
        updateUserToLocalStorage() 
        } else {
            const data = JSON.parse(dataFromStorageUsers);
    if(!data ) throw new Error("localStorage data not found")
    if(!users ) throw new Error("users data not found")
    if(users.length > data.length) {

        updateUserToLocalStorage() 

    }
     else {
    
        users.push(...data)

    }
    userIndex = users.findIndex( e => e.username = usernameUser)
    localStorage.setItem("userIndex" , userIndex.toString())
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
if(!data) throw new Error("localStorage not found")
if(albums.length > data.length) {
    updatePhotosToLocalStorage()
} else {
    albums.push(...data)
}
    }
    } catch (error) {
        console.log(error);
    }
}
