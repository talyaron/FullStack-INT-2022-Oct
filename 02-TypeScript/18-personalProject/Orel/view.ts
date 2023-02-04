function changeProfileUserName(): void {
    const nameProfile = document.querySelector('.user-box-profile h5')! as HTMLDListElement
    nameProfile.textContent = users[Number(localStorage.getItem("userIndex"))].username
}

function renderPhotoCard(cards: Array<Photos>, containerClass: string, albumName?: string): string {
    const mainContainer = document.querySelector(`.${containerClass}`) as HTMLElement
    mainContainer!.innerHTML = ''
    if (mainContainer === undefined) throw new Error('the Element not found')
    let AllCards = ""
    cards.forEach(photo => {
        AllCards += NewPhotoCard(photo.photoName, photo.date.toString(), photo.src)
    });

    mainContainer!.innerHTML += AllCards
    return AllCards
}

function renderLists(): string | undefined {
    try {

        const containerPlaylist = document.querySelector(".container-playlist")! as HTMLDivElement
        if (!containerPlaylist) throw new Error("the playlist container not exist")
        containerPlaylist.innerHTML = ''
        let html = ''
        albums.forEach(album => {
            const tamp = `
        <button onclick="handleClickLists(event)"   class="playlistBTN ${album.name}">
        ${album.name}
        </button>`
            html += tamp;
        })

        containerPlaylist.innerHTML += html
        return html
    } catch (error) {
        console.error(error);
        return ""
    }
}

function createNewList(nameList: string, titleList: string, classNameContainer: string): string {
    const sectionsHome = document.querySelector(`.${classNameContainer}`)! as HTMLDListElement;
    const patten =
        `
    <div id="${nameList}" class="list" class="${nameList}">
    <h4>${titleList}</h4>
    <div class="recommended-list ${nameList}">
    </div>
</div>
    `
    sectionsHome.innerHTML += patten
    albums.push(new Albums(nameList, []))


    return patten
}

function NewPhotoCard(namePhoto: string, date: string, src: string, albumName?: string): string {
    try {
        const index = Number(localStorage.getItem("userIndex"))
        const patten =
            `
    <div class="photo-card">
    <img src="${src}" alt="">
    <h3>${namePhoto}</h3>
    <p>${users[index].username}</p>
    <small>${date}</small>
    <button onclick="handleClickAddToLike(event)" style="color:black; class="collapse-play">
    ♥
</button>
</div>
    `

        // const findIndex  = albums.findIndex(album => album.name === albumName)
        // const photoArr = albums[findIndex].photos
        // photoArr.push(new Photos(namePhoto,date, src))
        albums.forEach(album => {
            if (album.name === albumName) {
                album.photos?.push(new Photos(
                    `${namePhoto}`,
                    `${date}`,
                    `${src}`))
            }
        })
        return patten
    } catch (error) {
        console.error(error);
        return ''
    }
}

function makeSectionsActive(element: HTMLElement) {
    try {
        const containerMainAppDivs = document.querySelectorAll('.container-main-app div')
        containerMainAppDivs.forEach(ele => {
            ele.classList.remove("active")
        })
        element.classList.add('active')
        const buttons = document.querySelectorAll('.menu-navbar li button')
        buttons.forEach(button => {
            button.classList.remove("active")
        })

    } catch (error) {
        console.log(error);
    }

}