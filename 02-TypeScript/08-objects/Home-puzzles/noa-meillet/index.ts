interface User{
    userName: string;
    password: string;
}

interface Video{
    name: string;
    producer: string;
    yearOfProduction: number;
    price: number;
    rentTo?: User;
}

function convertToShekels(video:Video):number | false{
    try {
        return video.price*3.25;
    } catch (error) {
        console.error(error);
        return false;
    }
}
