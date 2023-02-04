function NewPhotoCard( namePhoto: string, date: string, src: string , albumName?:string):string{
    try {
        const index =Number(localStorage.getItem("userIndex"))
        const patten =
            `
        <div class="photo-card">
        <img src="${src}" alt="">
        <h3>${namePhoto}</h3>
        <p>${users[index].username}</p>
        <small>${date}</small>
        <button class="collapse-play">
        <i class="fa-solid fa-add"></i>
    </button>
    </div>
        `
    
    // const findIndex  = albums.findIndex(album => album.name === albumName)
    // const photoArr = albums[findIndex].photos
    // photoArr.push(new Photos(namePhoto,date, src))
        albums.forEach(album=>{
           if(album.name === albumName){
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
    // create New list
    function createNewList(nameList: string, titleList: string , classNameContainer:string): string {
    try {
        const sectionsHome = document.querySelector(`.${classNameContainer}`)! as HTMLDListElement;
        const patten =
            `
        <div dataList="${nameList}" class="list">
        <h4>${titleList}</h4>
        <div class="recommended-list ${nameList}">
        </div>
    </div>
        `
        sectionsHome.innerHTML += patten
       albums.push(new Albums(nameList , []))
    
       
        return patten
    } catch (error) {
        console.error(error);
        return ''
    }
    }
    //Render All Cards On Dom
    function renderPhotoCard(cards: Array<Photos>, containerClass: string ,albumName?:string): string {
        const mainContainer = document.querySelector(`.${containerClass}`) as HTMLElement
        if(mainContainer === undefined ) throw new Error('the Element not found')
        let AllCards = ""
    
        
        cards.forEach(photo => {
            AllCards += NewPhotoCard(photo.photoName, photo.date.toString(), photo.src)
        });
    
        mainContainer!.innerHTML += AllCards
            return AllCards
    }
    function changeProfileUserName():void{
        const nameProfile = document.querySelector('.user-box-profile h5')! as HTMLDListElement
        nameProfile.textContent = users[Number(localStorage.getItem("userIndex"))].username
    }
    
    function renderLists():string | undefined{
    try {
      
        const containerPlaylist = document.querySelector(".container-playlist")! as HTMLDivElement
        if(!containerPlaylist) throw new Error("the playlist container not exist")
        containerPlaylist.innerHTML = '' 
        let html = ''
    
        albums.forEach(album=>{
            const tamp = `
            <button onclick="handleClickLists(event)" listName="${album.name}" class="playlistBTN ${album.name}">
            ${album.name}
            </button>`
            html += tamp;
        })
    
        containerPlaylist.innerHTML += html
    return html
     }catch (error) {
        console.error(error);
        return ""
    }
    }
    function createListToOptions(){
        try {
                // sent data list to options
                const selectList = document.getElementById('selectList') as HTMLSelectElement
            selectList.innerHTML = ''
                albums.forEach(album =>{    
                        selectList.innerHTML += `<option value="${album.name}">${album.name}</option>`
                    console.log(album.name);
                    }) 
                return
        } catch (error) {
            console.error(error);
            return ''
        }   
        }