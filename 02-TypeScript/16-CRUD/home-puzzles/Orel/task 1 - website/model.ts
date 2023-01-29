interface Movie {
    url: string,
    name: string,
    des: string,
    stars?: number,
    releaseDate?: number
}

 class Movies {
    constructor(
        public url: string,
        public name: string,
        public des: string,
        public stars: number,
        public releaseDate: number
    ) {
    }
}

const movies: Movie[] = [
    {
        url: "https://upload.wikimedia.org/wikipedia/he/e/e3/5111S2R-lg.jpg",
        name: "Avatar: The Way of Water ",
        des: " The Way of Water is a 2022 American epic science fiction film directed and produced by James Cameron, who co-wrote the screenplay",
        stars: 5,
        releaseDate: 2022
    },
    {
        url: "https://upload.wikimedia.org/wikipedia/he/thumb/4/4b/Avatar_1sh_0.jpg/250px-Avatar_1sh_0.jpg",
        name: "Avatar 2009",
        des: " The Way of Water is a 2022 American epic science fiction film directed and produced by James Cameron, who co-wrote the screenplay",
        stars: 5,
        releaseDate: 2009
    },
    {
        url: "https://static.sratim.tv/movies/440.jpg",
        name: "Harry Potter and the Sorcerer's Stone ",
        des: " The Way of Water is a 2022 American epic science fiction film directed and produced by James Cameron,",
        stars: 5,
        releaseDate: 2022
    },
    {
        url: "https://static.sratim.tv/movies/13831.jpg",
        name: "KSI In Real Life ",
        des: " הצצה מעמיקה אל תוך החיים של קיי-אס-איי (KSI), כוכב-העל העולמי, בעודו עובר את השנה החשובה ביותר בחייו. בשיא תהילתו, מד",
        stars: 2,
        releaseDate: 2023
    },
    {
        url: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg",
        name: "Fullmetal Alchemist ",
        des: " The Elric brothers’ long and winding where they must face off against an unworldly, nationwide threat.",
        stars: 3,
        releaseDate: 2022
    },
    {
        url: "https://m.media-amazon.com/images/I/71aEg7yF6iL._AC_SX466_.jpg",
        name: "A Bug's Life ",
        des: " 'A brilliant toy company roboticist uses artificial in works too well,",
        stars: 4,
        releaseDate: 2023
    },
    {
        url: "https://m.media-amazon.com/images/I/91c7Hqj8OtL._AC_SX466_.jpg",
        name: "The Lion King  ",
        des: " 'Triple bill of Disney animated features following a naive and curious lion cub as,",
        stars: 4,
        releaseDate: 2023
    },
    {
        url: "https://m.media-amazon.com/images/I/81ZLsdNzg1L._AC_SX466_.jpg",
        name: "Finding Nemo  ",
        des: " 'Finding Nemo roboticist uses artificial intelligence to develop M3GAN, works too well,",
        stars: 4,
        releaseDate: 2023
    },
    

]

