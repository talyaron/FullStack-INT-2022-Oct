// 
let userIndex:number

function checkMatchUserDetails(emailUser: string, passwordUser: string): boolean {
    try {
        if (storageData === undefined) throw new Error("the storageData no exist")
        for (let i = 0; i < storageData!.length; i++) {

            //@ts-ignore
            if (emailUser === lastUserIn.email.toLowerCase() && passwordUser === lastUserIn.password) {
                // userIndex = localStorage.users.findIndex( e => e.email == emailUser)
                // console.log(userIndex);
                userIndex = 0
                localStorage.setItem("userIndex" , userIndex.toString())
                return true
            }
           
        }
        return false
    } catch (error) {
        console.log(error);

        return false
    }
}
function checksIfUserExists(emailUser: string): boolean {
    try {
        const find = users.filter(user => user.email === emailUser)
        if(!find) throw new Error("the filter find not exist")
        if (find.length === 0) return false
        else return true

    } catch (error) {
        console.log(error);
        return false
    }
}
function openMenuLogoutBtn() {
try {
    const collapseUserLogout = document.querySelector(".user-box-profile-collapse")! as HTMLDListElement;
    const collapseUserLogoutIcon = document.querySelector(".user-box-profile i") as HTMLElement;

    const userBoxProfileClick = document.querySelector('.user-box-profile ')! as HTMLDListElement;;
    userBoxProfileClick?.addEventListener('click', (e) => {
        collapseUserLogout.classList.toggle('active')
        if (collapseUserLogout.classList.contains('active')) {
            collapseUserLogoutIcon.style.rotate = '180deg'
        } else {
            collapseUserLogoutIcon.style.rotate = '0deg'
        }
    })
} catch (error) {
    console.log(error);
}

}
function makeSectionsActive(element: HTMLElement) {
 try {
            const containerMainAppDivs = document.querySelectorAll('.container-main-app div')
            containerMainAppDivs.forEach(ele =>{
                ele.classList.remove("active")
            })
            element.classList.add('active')
            const buttons = document.querySelectorAll('.menu-navbar li button')
            buttons.forEach(button =>{
                button.classList.remove("active")
            })
           
 } catch (error) {
    console.log(error);
 }

}
function logout() {
    try {
        localStorage.setItem("userLogIn", "false")
    } catch (error) {
        console.log(error);
    }
}
function insideTheUser():boolean | undefined{
try {
    if(localStorage.getItem("userLogIn") === "true"){
       return true
    } else {
        return false
    }
} catch (error) {
    console.log(error);
    return false
}
}
//---------------------------- LOGIN-/-Sign-Up--Pages------------------

// LOg in function
function handleSubmitSignIn(ev: any) {
    try {
        ev.preventDefault()
        const { email, password, username, gender } = ev.target.elements
        const errorMsgEmailInput: HTMLElement = document.getElementById('errorMsgEmailInput')!;
        const errorMsgPasswordInput: HTMLElement = document.getElementById('errorMsgPasswordInput')!;


        if (checksIfUserExists(email.value)) {
            errorMsgEmailInput.innerText = "This Email Exist in The System"
            errorMsgEmailInput.parentElement!.classList.add("empty")
            return
        } else {
            errorMsgEmailInput.parentElement!.classList.remove("empty")
        }
        if (email.value == '') {
            errorMsgEmailInput.innerText = "Please enter your ProList username or email address."
            errorMsgEmailInput.parentElement!.classList.add("empty")
            return
        } else {
            errorMsgEmailInput.parentElement!.classList.remove("empty")
        }
        if (password.value == '') {
            errorMsgPasswordInput!.innerText = "Please enter your password."
            errorMsgPasswordInput.parentElement!.classList.add("empty")
            return
        } else if (password.value.length <= 5) {
            errorMsgPasswordInput!.innerText = "Password Must to be with 5 letter or more"
            errorMsgPasswordInput.parentElement!.classList.add("empty")
            return
        } else if (password.value.length <= 5) {
            errorMsgPasswordInput!.innerText = "Password Must to be with 5 letter or more"
            errorMsgPasswordInput.parentElement!.classList.add("empty")
            return
        } else {
            errorMsgPasswordInput.parentElement!.classList.remove("empty")
        }

        users.push(new Users(email.value, password.value, username.value, gender.value, false))
        // updateInfoToLocalStorage()
        ev.target.reset()
        return location.href = './login.html';

    }
    catch (error) {
        console.error(error);
    }
}
// Sign IN function
function handleSubmitLogIn(ev: any) {
    try {
        ev.preventDefault()
        const { emailLogin, passwordLogin } = ev.target.elements
        const errorMsgEmailInputLog: HTMLElement = document.getElementById('errorMsgEmailInputLOG')! as HTMLElement;
        const errorMsgPasswordInputLog: HTMLElement = document.getElementById('errorMsgPasswordInputLOG')! as HTMLElement;

        if (emailLogin.value == '') {
            errorMsgEmailInputLog.innerText = "Please enter your ProList username or email address."
            errorMsgEmailInputLog.parentElement!.classList.add("empty")
            return
        } else {
            errorMsgEmailInputLog.parentElement!.classList.remove("empty")
        }
        if (passwordLogin.value == '') {
            errorMsgPasswordInputLog!.innerText = "Please enter your password."
            errorMsgPasswordInputLog.parentElement!.classList.add("empty")
            return
        } else {
            errorMsgPasswordInputLog.parentElement!.classList.remove("empty")
        }
        // אם יש התאמה תעשה משהו
        console.log(checkMatchUserDetails(emailLogin.value, passwordLogin.value));
        if (checkMatchUserDetails(emailLogin.value, passwordLogin.value)) {
            ifRefresh()
            // updateInfoToLocalStorage()
            ev.target.reset()
            return location.href = './index.html';
        } else {
            const textWarning = document.getElementById('pNotLoginSucc')! as HTMLParagraphElement
            textWarning.innerHTML =
                `
             <i class="fa-solid fa-triangle-exclamation"></i>
              The email or password not match!
              `
            textWarning.style.color = "red";
        }

    }
    catch (error) {
        console.error(error);
    }
}
//----------------------------------------------------------------------
function handleClickLogOut() {
    try {
        logout()
        location.reload();
    } catch (error) {
        console.log(error);
    }
}
//---------------------------Handle Click Function List Left-----------------
//home
function handleClickHomeList(ev: any) {
try {
    const sectionsHome = document.querySelector('.sections-home') as HTMLElement;
    const lists = document.querySelectorAll('.list ');
makeSectionsActive(sectionsHome)
lists.forEach(list => {
        list.classList.add("active")
});
} catch (error) {
    console.log(error);
}
}
//search
function handleClickSearchList(ev: any) {
    try {
const sectionsSearch = document.querySelector('.sections-search') as HTMLElement;
makeSectionsActive(sectionsSearch)
    } catch (error) {
        console.log(error);
    }
}
//library
function handleClickLibraryList(ev: any) {
    try {

        if(!insideTheUser()) {
            alert("you must to login to enter Library") 
        }else{
      
            const sectionsLibrary = document.querySelector('.sections-library') as HTMLElement;
            const lists = document.querySelectorAll('.list ');
            lists.forEach(list => {
                    list.classList.add("active")
            });
            makeSectionsActive(sectionsLibrary)
            
        }

    } catch (error) {
        console.log(error);
    }
}
//Create Album
function handleClickCreateAlbumList(ev: any) {
    try {
        
        if(!insideTheUser()) {

            alert("you must to login to enter Library") 
        }else{
      
            const sectionsCreateAlbum = document.querySelector('.sections-create-album') as HTMLElement;
            const lists = document.querySelectorAll('.list ');
            lists.forEach(list => {
                    list.classList.add("active")
            });
            makeSectionsActive(sectionsCreateAlbum)
            createListToOptions()
            }

    } catch (error) {
        console.log(error);
    }
}
//Liked Song
function handleClickLikedPhotosList(ev:any) {
    try {
        
        if(!insideTheUser()) {
            alert("you must to login to enter Library") 
        }else{
            const sectionsLikedPhotos = document.querySelector('.liked-photos') as HTMLElement;
            const lists = document.querySelectorAll('.list ');
            lists.forEach(list => {
                    list.classList.add("active")
            });
            makeSectionsActive(sectionsLikedPhotos)
            
        }

    } catch (error) {
        console.log(error);
    }
}

function handleClickLists(ev:any):void{
try {
    const sectionsHome = document.querySelectorAll('.sections-home div');
    if(!sectionsHome) throw new Error("section Home Divs not exist")
    sectionsHome.forEach(e=>{
        e.classList.remove("active");
        if((e.getAttribute("datalist") !== null) && e.getAttribute("datalist") === ev.target.textContent) {
                const element = e as HTMLElement;
            element.classList.add("active")
        }
        console.log();
    })
} catch (error) {
    console.error(error);
}
}
//--------------------------------------------------------------------------
//---------------------------Handle Submit Function List Left-----------------
function createListToOptions(){
try {
        // sent data list to options
        const selectList = document.getElementById('selectList') as HTMLSelectElement
    selectList.innerHTML = ''
        albums!.forEach(album =>{    
                selectList.innerHTML += `<option value="${album.name}">${album.name}</option>`
            console.log(album.name);
            }) 
        return
} catch (error) {
    console.error(error);
    return ''
}   
}
function handleSubmitCreateAlbumsList(ev:any){
try {
    ev.preventDefault();
const nameListValue = ev.target.elements.createListName.value.toString() as string
console.log(nameListValue);
createNewList(nameListValue , nameListValue ,"sections-library")
createListToOptions()

ev.target.reset()
} catch (error) {
    console.log(error);
}
}
function handleSubmitCreatePhoto(ev:any){
    try {
            ev.preventDefault();

const createListToListValue = ev.target.elements.selectList.value;
const photoName = ev.target.elements.photoNameCreateImage.value as string
const date = ev.target.elements.photoDateCreateImage.value as string
const src = ev.target.elements.photoSrcCreateImage.value as string

const findIndex  = getAlbumFromStorage()!.findIndex(album => album.name === createListToListValue)
const photoArr = albums[findIndex].photos
console.log(findIndex);
console.log(albums[findIndex]);
// make new Photo
photoArr.push(new Photos(photoName , date , src))
renderPhotoCard(photoArr, createListToListValue , "sections-library")
        ev.target.reset()
    } catch (error) {
        console.error(error);
    }
}
// Get and render Cards On DOM
//--------------------------------
function NewPhotoCard( namePhoto: string, date: string, src: string , albumName?:string):string{
try {
    const index = Number(localStorage.getItem("userIndex"))
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
   albums.push(new Albums(nameList , []))

   
    return patten
}
//Render All Cards On Dom
function renderPhotoCard(cards: Array<Photos>, containerClass: string ,albumName?:string): string {
    const mainContainer = document.querySelector(`.${containerClass}`) as HTMLElement
    mainContainer!.innerHTML = ''
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
        <button onclick="handleClickLists(event)"   class="playlistBTN ${album.name}">
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



// function showALLlists(nameClassContainer:string){
// try {
//     const sectionsHome = document.querySelectorAll(`.${nameClassContainer} div`);
//         sectionsHome.forEach(e=>{
//             e.parentElement!.classList.add("active")})

    
// } catch (error) {
//     console.log(error);
// }
// }

// getArrayPhotoAlbumWithName("Jungle")
// function getArrayPhotoAlbumWithName(name:string){
//      try {

//      } catch (error) {
//         console.log(error);
//      }

// }

