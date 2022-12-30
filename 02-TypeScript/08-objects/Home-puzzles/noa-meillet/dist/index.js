function convertToShekels(video) {
    try {
        return video.price * 3.25;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
