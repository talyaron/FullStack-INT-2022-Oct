const karin = new User("karin", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1CnvMjinUCEM2s7p0YZxquRpO7V-gpT0SGA&usqp=CAU");
const nir = new User("nir", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOcVGtd-GSmu1kaozZep0x0O4nT66Md8B-A&usqp=CAU");
const dana = new User("dana", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK6HrnONI6TGfAQl6JXyOiq21TriWfInFZjw&usqp=CAU");
const or = new User("or", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT64gicYzfA_pUwGmr1ai6QqGt9-Ij5TF6l-A&usqp=CAU");
const romi = new User("romi", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_R9oVsDOIFGMk1vq58POWKuFI9k8Civm2yGgx64h1mxEJVu8PorEdKQABQTj35AsNme0&usqp=CAU");
const yarin = new User("yarin", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDOGPyN5g-DVZmsEi95Eg7mlmW7lBmr_1FDw&usqp=CAU");
const ofek = new User("ofek", "https://charts.co.il/wp-content/uploads/2020/09/dancing-dave-minion-510835_640.jpg");
const hila = new User("hila", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7slaWY5sTSlSkkG47gb9-NHp9OiLrLgQLIw&usqp=CAU");
const nicole = new User("nicole", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZOwra4-Bwh4iZcmxHe9mMPP5yoNE4d3ijGNI1MMiydGwbN7NB7qr5yPFPaYR3Gyk7ZY&usqp=CAU");
const shiran = new User("shiran", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5HrNXZobQL1VAI48d0D8dHRtk_tvYC_EugHxOkE0tvQPlKSt36aqyuHdVV4zxVk2bkYg&usqp=CAU");


const review1 = new Review(karin, "this song is amazing");
const review2 = new Review(nir, "The best of the best!!!");
const review3 = new Review(dana, "unlike this song");
const review4 = new Review(or, "wowwww!! i like it");
const review5 = new Review(romi, "sweet memories with this song...");
const review6 = new Review(yarin, "Back to the 90s used to be best years for music");
const review7 = new Review(ofek, "perfect song");
const review8 = new Review(hila, "Love Love Love");
const review9 = new Review(nicole, "great voice, exceptional singer!");
const review10 = new Review(shiran, "disappointing");


const video1 = new Video("https://www.youtube.com/embed/9ls0Eh79Olc", "Summer Mix 2023 | Avicii", "769987 views", "87678 likes", [review1, review4, review10]);
const video2 = new Video("https://www.youtube.com/embed/zE-a5eqvlv8", "Selena Gomez - Calm Down", "45600 views", "49024 likes", [review8, review9, review10, review3, review5]);
const video3 = new Video("https://www.youtube.com/embed/4lD2h0QO0uI", "Jordyn Reyna & Eryn - Just Imagine", "198 views", "157 likes", [review10, review4, review9, review3]);
const video4 = new Video("https://www.youtube.com/embed/6jZVsr7q-tE", "The Greatest Showman - Never Enough", "454000 views", "234899 likes", [review7, review2]);
const video5 = new Video("https://www.youtube.com/embed/emZurjNwj60", "EMIL, BO, Kenedi", "172000 views", "16000 likes", [review5, review1, review9]);
const video6 = new Video("https://www.youtube.com/embed/Hgt3lpcGYd4", "Shrink '21 (Andy Galea Dub Mix)", "4699 views", "3245 likes", [review10, review4, review1]);
const video7 = new Video("https://www.youtube.com/embed/-GNIxkC1jZA", "Me Gustas Tanto - Reykon el Líder", "231000 views", "20000 likes", [review3, review7]);
const video8 = new Video("https://www.youtube.com/embed/JPOV9eIo1QY", "Party is In the Air (Original Mix)", "3452 views", "119 likes", [review1, review10, review2, review3, review6, review8]);


const videos: Video[] = [video1, video2, video3, video4, video5, video6, video7, video8]


function renderVideos(): string {
  try {
    let html = `<div class="wrapper">`
    html += videos
      .map((video) => {
        return `
          <div class="wrapper__video">
          <div class="wrapper__video__videoLink">
              <iframe width="" height="220" src=${video.link} title="YouTube video player" frameborder="0" ></iframe>
          </div>
          <div class="wrapper__video__videoName">${video.name}</div>
          <div class="wrapper__video__viewsNumber">${video.views}</div>
          <div class="wrapper__video__viewsLikes">${video.likes}</div>
          <button onclick="handleMoveToVideoPage('${video.uid}')">Go</button>
      </div>
      `;
      })
      .join(" ");
    html += `</div>`

    return html;
  } catch (error) {
    console.error(error);
    return "";
  }

}


function handleMoveToVideoPage(uid: string) {
  const video = videos.find(element => element.uid == uid);
  const videoData = JSON.stringify(video);
  localStorage.setItem('video', videoData);
  window.location.href = './video.html';
}


function renderVideoHtml(video: Video): string {
  try {
    let html = ` <div class="videoWrapper">
    <div class="videoWrapper__mainVideo">
        <iframe width="" height="" src=${video.link} title="" frameborder="0" ></iframe>
    </div>
    <div class="videoWrapper__videoName">${video.name}</div>
    <div class="videoWrapper__videoViews">${video.views}</div>
    <div class="videoWrapper__videoLikes">${video.likes}</div>
    `
    debugger
    html += video.reviews
      .map((review) => {
        return `
        <div class="videoWrapper__videoReviews">${review.review}</div>
        <div class="videoWrapper__userNameReviews">${review.user.name}</div>
        <div class="videoWrapper__userImgReviews">
        <img src=${review.user.img} alt=""></div>
      `;
      })
      .join(" ");
    html += `</div>`

    return html;
  } catch (error) {
    console.error(error);
    return "";
  }

}


