let storageData = getMatchUserDetail() as Array<Users[]> // LocalStorage DATA
const lastUserIn = updateUsersArrayFromStorage()


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
    constructor(
        public photoName: string,
        public date: string,
        public src: string
    ) {
        this.uId = uid()
    }

}

const users: Users[] = [
    {
        email: "orekarako@gmail.com",
        password: "123456",
        username: "OreKar",
        gender: "male",
        admin: true,
        albums: []

    }
];
console.log("users", users);

const update = storageData

const albums: Albums[] = []

// set The Album to Album Local Storage


console.log("albums New " , albums);

const likedPhotos: Photos[] = [];

const animals: Photos[] = [

    {
        uId: "01010101",
        photoName: "animal2",
        date: "1234",
        src: "https://a-z-animals.com/media/tiger_laying_hero_background.jpg",
    },
    {
        uId: "01010101",
        photoName: "animal3",
        date: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkwHi7EWXOBxgW_zLsTQ2ZU_qqxaxRswZkiYVxBgjndCCcFF6rwP1F6NZu8zqC1XGAMc&usqp=CAU",
    },
    {
        uId: "01010101",
        photoName: "animal4",
        date: "1234",
        src: "https://navs.org/wp-content/uploads/bb-plugin/cache/bunny-landscape.jpg",
    },
    {
        uId: "01010101",
        photoName: "animal5",
        date: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM0ZpNjOZUiorOad2OK0q9Dw2_hPakrXMLdQ&usqp=CAU",
    }
];
const backgrounds: Photos[] = [
    {
        uId: "01010101",
        photoName: "background1",
        date: "1234",
        src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    },
    {
        uId: "01010101",
        photoName: "background3",
        date: "1234",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuEYSRMBGU80tU-7ycVzMZSIsau-nELR_B_y3sFsRmp7xq4BsL92fjUlR1oK63hlDm98A&usqp=CAU",
    },
    {
        uId: "01010101",
        photoName: "background3",
        date: "",
        src: "https://media.istockphoto.com/id/1353553203/photo/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-forest-trees-background.jpg?b=1&s=170667a&w=0&k=20&c=-jvR1WDwcloLXRgRTGeyG3frvrhPIbegdemeL6vY2Pk=",
    },
    {
        uId: "01010101",
        photoName: "background4",
        date: "",
        src: "https://i.pinimg.com/736x/90/36/9f/90369ff207a44eb772af864db67e1cb4.jpg",
    },
    {
        uId: "01010101",
        photoName: "background5",
        date: "",
        src: "https://m.media-amazon.com/images/I/31qu4ixHZ3L._SY355_.jpg",
    }
];




function updateUsersArrayFromStorage() {
    try {
        const localStorageData = localStorage.getItem("users")!
        if (!localStorageData) throw new Error("no found localStorage users")
        const storageData = JSON.parse(localStorageData)

        const index = storageData.length
        //@ts-ignore
        const lastRegister = storageData[index - 1]
        return lastRegister
    } catch (error) {

    }
}
function ifRefresh() {
    try {
        localStorage.setItem("userLogIn", "true")
    } catch (error) {
        console.log(error);
    }

}

function getMatchUserDetail(): Array<Users[]> | undefined {
    try {
        const dataJson = localStorage.getItem("users") as string;
        if (dataJson === null || dataJson === undefined) throw new Error("dataJson fille not exist in the localStorage")
        const data = JSON.parse(dataJson)
        storageData = data

        return data
    } catch (error) {
        console.log(error);
        return undefined

    }
}

function updateUserToLocalStorage() {
    try {
        console.log("usersBeforeLoaded", users);
        if (!users) throw new Error("not find users")
        if (localStorage.length > users.length) return
        localStorage.setItem("users", JSON.stringify(users))

    } catch (error) {
        console.log(error);
    }

}

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


