function changeProfileUserName(): void{
    const nameProfile = document.querySelector('.user-box-profile h5')! as HTMLDListElement
    nameProfile.innerText = users[getUserIndexFromLocalStorage()].username
}

function renderPhotoCard(cards: Array<Photos>, containerClass: string, albumName?: string): string {
    const mainContainer = document.querySelector(`.${containerClass}`) as HTMLElement
    mainContainer!.innerHTML = ''
    if (mainContainer === undefined) throw new Error('the Element not found')
    let AllCards = ""
    cards.forEach(photo => {
        AllCards += newPhotoCard(photo.photoName, photo.date.toString(), photo.src,photo.like)
    });

    mainContainer!.innerHTML = AllCards

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

        containerPlaylist.innerHTML = html
        return html
    } catch (error) {
        console.error(error);
        return ""
    }
}

function createNewList(nameList: string, titleList: string, classNameContainer: string): string {
    albums.push(new Albums(nameList, []))
    renderLists()
    updatePhotosToLocalStorage(); 

    return renderNewList(nameList,titleList,classNameContainer);
}

function renderNewList(nameList: string, titleList: string, classNameContainer: string) {
    const sectionsHome = document.querySelector(`.${classNameContainer}`)! as HTMLDListElement;
    const patten =
        `
    <div id="${nameList}" class="list" class="${nameList}">
    <h4>${titleList}</h4>
    <div class="recommended-list ${nameList}-photos">
    </div>
</div>
    `
    sectionsHome.innerHTML += patten;
    return patten
}

function newPhotoCard(namePhoto: string, date: string, src: string, isLike: boolean): string {
    try {
        const index = getUserIndexFromLocalStorage()
        const patten =
            `
    <div class="photo-card">
    <img src="${src}" alt="">
    <h3>${namePhoto}</h3>
    <p>${users[index].username}</p>
    <small>${date}</small>
    <button onclick="handleClickAddToLike(event)" style="color:${ isLike ? "red" : "black"}; class="collapse-play">
    ♥
</button>
</div>
    `

        // const findIndex  = albums.findIndex(album => album.name === albumName)
        // const photoArr = albums[findIndex].photos
        // photoArr.push(new Photos(namePhoto,date, src))
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
        console.error(error);
    }

}