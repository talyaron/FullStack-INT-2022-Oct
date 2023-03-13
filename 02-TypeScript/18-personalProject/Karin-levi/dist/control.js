var karin = new User("karin", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1CnvMjinUCEM2s7p0YZxquRpO7V-gpT0SGA&usqp=CAU");
var nir = new User("nir", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOcVGtd-GSmu1kaozZep0x0O4nT66Md8B-A&usqp=CAU");
var dana = new User("dana", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK6HrnONI6TGfAQl6JXyOiq21TriWfInFZjw&usqp=CAU");
var or = new User("or", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT64gicYzfA_pUwGmr1ai6QqGt9-Ij5TF6l-A&usqp=CAU");
var romi = new User("romi", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_R9oVsDOIFGMk1vq58POWKuFI9k8Civm2yGgx64h1mxEJVu8PorEdKQABQTj35AsNme0&usqp=CAU");
var yarin = new User("yarin", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDOGPyN5g-DVZmsEi95Eg7mlmW7lBmr_1FDw&usqp=CAU");
var ofek = new User("ofek", "https://charts.co.il/wp-content/uploads/2020/09/dancing-dave-minion-510835_640.jpg");
var hila = new User("hila", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7slaWY5sTSlSkkG47gb9-NHp9OiLrLgQLIw&usqp=CAU");
var nicole = new User("nicole", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZOwra4-Bwh4iZcmxHe9mMPP5yoNE4d3ijGNI1MMiydGwbN7NB7qr5yPFPaYR3Gyk7ZY&usqp=CAU");
var shiran = new User("shiran", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5HrNXZobQL1VAI48d0D8dHRtk_tvYC_EugHxOkE0tvQPlKSt36aqyuHdVV4zxVk2bkYg&usqp=CAU");
var review1 = new Review(karin, "this song is amazing");
var review2 = new Review(nir, "The best of the best!!!");
var review3 = new Review(dana, "unlike this song");
var review4 = new Review(or, "wowwww!! i like it");
var review5 = new Review(romi, "sweet memories with this song...");
var review6 = new Review(yarin, "Back to the 90s used to be best years for music");
var review7 = new Review(ofek, "perfect song");
var review8 = new Review(hila, "Love Love Love");
var review9 = new Review(nicole, "great voice, exceptional singer!");
var review10 = new Review(shiran, "disappointing");
var video1 = new Video("https://www.youtube.com/embed/9ls0Eh79Olc", "Summer Mix 2023 | Avicii", "769987 views", "87678 likes", [review1, review4, review10]);
var video2 = new Video("https://www.youtube.com/embed/zE-a5eqvlv8", "Selena Gomez - Calm Down", "45600 views", "49024 likes", [review8, review9, review10, review3, review5]);
var video3 = new Video("https://www.youtube.com/embed/4lD2h0QO0uI", "Jordyn Reyna & Eryn - Just Imagine", "198 views", "157 likes", [review10, review4, review9, review3]);
var video4 = new Video("https://www.youtube.com/embed/6jZVsr7q-tE", "The Greatest Showman - Never Enough", "454000 views", "234899 likes", [review7, review2]);
var video5 = new Video("https://www.youtube.com/embed/emZurjNwj60", "EMIL, BO, Kenedi", "172000 views", "16000 likes", [review5, review1, review9]);
var video6 = new Video("https://www.youtube.com/embed/Hgt3lpcGYd4", "Shrink '21 (Andy Galea Dub Mix)", "4699 views", "3245 likes", [review10, review4, review1]);
var video7 = new Video("https://www.youtube.com/embed/-GNIxkC1jZA", "Me Gustas Tanto - Reykon el Líder", "231000 views", "20000 likes", [review3, review7]);
var video8 = new Video("https://www.youtube.com/embed/JPOV9eIo1QY", "Party is In the Air (Original Mix)", "3452 views", "119 likes", [review1, review10, review2, review3, review6, review8]);
var videos = [video1, video2, video3, video4, video5, video6, video7, video8];
function renderVideos() {
    try {
        var html = "<div class=\"wrapper\">";
        html += videos
            .map(function (video) {
            return "\n          <div class=\"wrapper__video\">\n          <div class=\"wrapper__video__videoLink\">\n              <iframe width=\"\" height=\"220\" src=" + video.link + " title=\"YouTube video player\" frameborder=\"0\" ></iframe>\n          </div>\n          <div class=\"wrapper__video__videoName\">" + video.name + "</div>\n          <div class=\"wrapper__video__viewsNumber\">" + video.views + "</div>\n          <div class=\"wrapper__video__viewsLikes\">" + video.likes + "</div>\n          <button onclick=\"handleMoveToVideoPage('" + video.uid + "')\">Go</button>\n      </div>\n      ";
        })
            .join(" ");
        html += "</div>";
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function handleMoveToVideoPage(uid) {
    var video = videos.find(function (element) { return element.uid == uid; });
    var videoData = JSON.stringify(video);
    localStorage.setItem('video', videoData);
    window.location.href = './video.html';
}
function renderVideoHtml(video) {
    try {
        var html = " <div class=\"videoWrapper\">\n    <div class=\"videoWrapper__mainVideo\">\n        <iframe width=\"\" height=\"\" src=" + video.link + " title=\"\" frameborder=\"0\" ></iframe>\n    </div>\n    <div class=\"videoWrapper__videoName\">" + video.name + "</div>\n    <div class=\"videoWrapper__videoViews\">" + video.views + "</div>\n    <div class=\"videoWrapper__videoLikes\">" + video.likes + "</div>\n    ";
        debugger;
        html += video.reviews
            .map(function (review) {
            return "\n        <div class=\"videoWrapper__reviewsDetails\">\n        <div class=\"videoWrapper__reviewsDetails__userImgReviews\">\n        <img src=" + review.user.img + " alt=\"\"></div>\n        <div class=\"videoWrapper__reviewsDetails__userNameReviews\">" + review.user.name + "</div>\n        <div class=\"videoWrapper__reviewsDetails__videoReviews\">" + review.review + "</div>\n        </div> \n      ";
        })
            .join(" ");
        html += "</div>";
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
