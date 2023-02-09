

class Albums {
    constructor(
        public name: string,
        public photos: Photos[]
    ) { }

}

class Users {
    constructor(
        public email: string,
        public password: string,
        public username: string,
        public gender?: string,
        public admin?: boolean,
        public albums?: Array<any>
    ) { }
}
class Photos {
    uId: string
    like: boolean;
    constructor(
        public photoName: string,
        public date: string,
        public src: string
    ) {
        this.uId = uid()
        this.like = false
    }

}

const users: Users[] = getUsersFromStorage() ?? [] ;



// set The Album to Album Local Storage
let likedPhotos: Photos[] = [];

const albums: Albums[] = getAlbumFromStorage() ??  [];
const animals: Photos[] = getAnimalsAlbum();
const backgrounds: Photos[] = getBackgroundAlbum();



function getLastRegisterUser():{}{
    try {
        const usersDataJson = localStorage.getItem("users")!
        if (!usersDataJson) throw new Error("no found localStorage users")
        const userData = JSON.parse(usersDataJson)
        const lastRegister = users[getUserIndexFromLocalStorage()]
        return lastRegister
    } catch (error) {
        console.error(error)
        return {}
    }
}

//USERS LOCAL STORAGE
function updateUsersToLocalStorage() {
    try {
        if (!users) throw new Error("not find Users in local storage")
        localStorage.setItem("users", JSON.stringify(users))
    } catch (error) {
        console.log(error);
    }

}
function getUsersFromStorage():Users[] | undefined{
    try {
        const dataJson = localStorage.getItem("users")
        if (!dataJson) throw new Error("not find users in local storage")
const data = JSON.parse(dataJson)
        return data

    } catch (error) {
        console.log(error);
        return undefined
    }
}

//PHOTOS LOCAL STORAGE
function updatePhotosToLocalStorage() {
    try {
        if (!albums) throw new Error("not find albums in local storage")
   
        localStorage.setItem("albums", JSON.stringify(albums))

    } catch (error) {
        console.log(error);
    }

}

function getAlbumFromStorage():Albums[] | undefined{
    try {
        const dataJson = localStorage.getItem("albums")
        if (!dataJson) throw new Error("not find albums in local storage")
const data = JSON.parse(dataJson)
        return data

    } catch (error) {
        console.log(error);
        return undefined
    }
}

function getUserIndexFromLocalStorage():number{
    try {
          const stringUserIndex =  localStorage.getItem("userIndex")
          if(!stringUserIndex) throw new Error("the userIndex not exist in the local storage") 
      const userIndex = Number(stringUserIndex);
      return userIndex
    } catch (error) {
        console.error(error);
        return 0
    }
}
//IF THE USER LOGIN SUCCESS
function ifRefresh():void {

    try {
        localStorage.setItem("userLogIn", "true")
    } catch (error) {
        console.log(error);
    }

}

//ANIMAL LOCAL STORAGE
function getAnimalsAlbum():Photos[] {
    let animalsData = [
        {
            uId: "01010101",
            photoName: "animal2",
            date: "1234",
            src: "https://a-z-animals.com/media/tiger_laying_hero_background.jpg",
            like: false
        },
        {
            uId: "01010101",
            photoName: "animal3",
            date: "1234",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkwHi7EWXOBxgW_zLsTQ2ZU_qqxaxRswZkiYVxBgjndCCcFF6rwP1F6NZu8zqC1XGAMc&usqp=CAU",
            like: false
        },
        {
            uId: "01010101",
            photoName: "animal4",
            date: "1234",
            src: "https://navs.org/wp-content/uploads/bb-plugin/cache/bunny-landscape.jpg",
            like: false
        },
        {
            uId: "01010101",
            photoName: "animal5",
            date: "1234",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM0ZpNjOZUiorOad2OK0q9Dw2_hPakrXMLdQ&usqp=CAU",
            like: false
        }
    ];
    const animalsAlbum = localStorage.getItem('animals');
    if (!animalsAlbum) {
        localStorage.setItem('animals',JSON.stringify(animalsData))
    } else {
        animalsData = JSON.parse(animalsAlbum);
    }
    return animalsData;
}

function saveAnimalsToStorage() {
    localStorage.setItem('animals',JSON.stringify(animals))
}
//BACKGROUNDS LOCAL STORAGE
function getBackgroundAlbum():Photos[] {
    let backgroundsData = [
        {
            uId: "01010101",
            photoName: "background1",
            date: "1234",
            src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            like: false
        },
        {
            uId: "01010101",
            photoName: "background3",
            date: "1234",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuEYSRMBGU80tU-7ycVzMZSIsau-nELR_B_y3sFsRmp7xq4BsL92fjUlR1oK63hlDm98A&usqp=CAU",
            like: false
        },
        {
            uId: "01010101",
            photoName: "background3",
            date: "",
            src: "https://media.istockphoto.com/id/1353553203/photo/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-forest-trees-background.jpg?b=1&s=170667a&w=0&k=20&c=-jvR1WDwcloLXRgRTGeyG3frvrhPIbegdemeL6vY2Pk=",
            like: false
        },
        {
            uId: "01010101",
            photoName: "background4",
            date: "",
            src: "https://i.pinimg.com/736x/90/36/9f/90369ff207a44eb772af864db67e1cb4.jpg",
            like: false
        },
        {
            uId: "01010101",
            photoName: "background5",
            date: "",
            src: "https://m.media-amazon.com/images/I/31qu4ixHZ3L._SY355_.jpg",
            like: false
        }
    ];
    const backgroundsAlbum = localStorage.getItem('backgrounds');
    if (!backgroundsAlbum) {
        localStorage.setItem('backgrounds',JSON.stringify(backgroundsData))
    } else {
        backgroundsData = JSON.parse(backgroundsAlbum);
    }
    return backgroundsData;
}
function saveBackgroundToStorage() {
    localStorage.setItem('backgrounds',JSON.stringify(backgrounds))
}

// ARR LIKED PHOTOS
function getLikesPhotos(): Photos[] {
    const filterLike = (photo) => photo.like;
    const filteredAlbums = albums.reduce<Photos[]>((photos,currAlbum) => {
        const filterPhotos = currAlbum.photos.filter(filterLike);
        photos = [...photos,...filterPhotos];
        return photos;
    },[]);
    return [...animals.filter(filterLike) , ...backgrounds.filter(filterLike), ...filteredAlbums]
}