//הגדרה 
interface Video {
    title: string,
    price: number,
    rentBy: string
}
//שייכות אדם לסרטון
interface Person {
    firstName: string,
    lastName: string,
    id: string
}
//חיפוש לראות מיהאדם שצפה ברטון לפי  id
const videos = [
    {
        title: "harry potter",
        price: 40,
        rentBy: "id-1"
    },
    {
        title: "lord of the rings",
        price: 20,
        rentBy: "id-2"
    }
]

const persons = [
    {
        firstName: "David",
        lastName: "Levi",
        id: "id-1",
    },
    {
        firstName: "Or",
        lastName: "Paz",
        id: "id-2",
    }
];
//מקבל וידאו מסוג וידאו וידפיס את המחיר של הסרטון  בשקלים
function priceInNis(video: Video) {
    console.log(video.price * 3.53);
}

priceInNis(videos[0]);

function isRented(video: Video, id: string){
    if(video.rentBy === id){
        const user = persons.find((person) => id === person.id);
        console.log(`${user?.firstName} ${user?.lastName} rent the video ${video.title}`);
    } else {
        console.log(`Video wasn't rent by user with id: ${id}`);
    }
}

isRented(videos[1], 'id-1');