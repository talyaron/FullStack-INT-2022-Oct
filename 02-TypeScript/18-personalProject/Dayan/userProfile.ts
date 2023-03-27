const mainVideo = document.querySelector('#main-Video') as HTMLVideoElement
const musicList = document.querySelector('.music-list')
const playlist = document.querySelector('#playlist') as HTMLElement
const AllLessons = document.querySelector('.AllLessons') as HTMLElement
const videoTitle = document.querySelector('.title') as HTMLElement
const ulTag = document.querySelector("ul") as HTMLUListElement

AllLessons.innerHTML = `${videoLibrary.length} Lessons`
let musicIndex:number = 1
window.addEventListener('load', () => {
   loadMusic(musicIndex)
   playingNow()
})

function playMusic(){
   mainVideo.play()
   playlist.classList.add('active')
}

function loadMusic(indexNumb){
   mainVideo.src = `${videoLibrary[indexNumb - 1].url}.mp4`
   videoTitle.innerHTML = `${indexNumb}. ${videoLibrary[indexNumb - 1].title}`
}

for(let i = 0; i < videoLibrary.length; i++){
   let liTag = `<li li-index="${i + 1}">
      <div class="row">
         <span>${i + 1}. ${videoLibrary[i].title}</span>
      </div>
      <video class="${videoLibrary[i].id}" src="${videoLibrary[i].url}.mp4" style="display: none;" title="${videoLibrary[i].title}"></video>
      <span id="${videoLibrary[i].id}" class="duration"></span>
   </li>`
   playlist.insertAdjacentHTML('beforeend',liTag)
   let liVideoDuration = ulTag.querySelector(`#${videoLibrary[i].id}`) as Element
   let liVideoTag = ulTag.querySelector(`.${videoLibrary[i].id}`) as HTMLVideoElement
   
   liVideoTag.addEventListener("loadeddata", ()=>{
      let videoDuration:number = liVideoTag.duration
      let totalMin:number = Math.floor(videoDuration / 60)
      let totalSec:number = Math.floor(videoDuration % 60)
      // if totalSec is less then 10 then add 0 at the beginging
      totalSec < 10 ? totalSec = "0" + totalSec : totalSec
      liVideoDuration.textContent = `${totalMin}:${totalSec}`
      // adding t duration attribe which we'll use below
      liVideoDuration.setAttribute("t-duration", `${totalMin}:${totalSec}`)
   })  
}

// let's work on play particular song on click
const allLiTags = playlist.querySelectorAll('li') as NodeListOf<HTMLElement>
function playingNow(){
   for(let j = 0; j < videoLibrary.length; j++){
      if(allLiTags[j].classList.contains('playing')){
         allLiTags[j].classList.remove("playing")
      }
      if(allLiTags[j].getAttribute('li-index') == musicIndex){
         allLiTags[j].classList.add('playing')
      }
      // adding onclick attribute in all li tags
      allLiTags[j].setAttribute("onclick", "clicked(this)")
   }
}
function clicked(element){
   // getting li index of particular clicked li tag
   let getIndex = element.getAttribute("li-index")
   musicIndex = getIndex
   loadMusic(musicIndex)
   playMusic()
   playingNow()
}