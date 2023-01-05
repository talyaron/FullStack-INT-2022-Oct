interface Video  {
    name:string,
    price:number,
    people:People
}

interface People {
    name:string;
}

const omer:People = {
    name: "Omer",
}

const guy:People = {
    name: "Guy",
}

const dorit:People = {
    name: "Dorit",
}

const video:Video = {
    name: "Spiderman",
    price: 5,
    people: omer
}

function toShekel(obj:Video):number {
    return obj.price * 3.53;
}

console.log(`The movie ${video.name} will cost ${video.price}$ in dollars and will cost ${toShekel(video)} in nis`);

//didnt understand the problem
function whosRenting(obj:Video):People {
    return obj.people;
}

console.log(`The movie ${video.name} is rented by ${whosRenting(video).name}`);

interface VideoForNetflix {
    name:string,
    people:People[],
}

const vid:VideoForNetflix = {
    name: "Aladin",
    people: [
        omer,
        guy,
        dorit
    ]
}

function whosRentingNetflix(obj:VideoForNetflix) {
    for(const key in vid) {
        if(key == "people") {
            for(const i in vid.people) {
                console.log(`The name of someone who's renting it: ${vid.people[i].name}`)
            }
        } else {
            console.log(`The name of the movie is: ${vid[key]}`)
        }
    }
}

whosRentingNetflix(vid);