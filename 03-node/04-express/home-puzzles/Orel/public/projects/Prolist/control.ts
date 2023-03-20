// 
//USERS LOCAL STORAGE




function createListToOptions(): void {
    try {
        // sent data list to options
        const selectList = document.getElementById('selectList') as HTMLSelectElement
        selectList.innerHTML = ''
        albums!.forEach(album => {
            selectList.innerHTML += `<option value="${album.name}">${album.name}</option>`
        })

    } catch (error) {
        console.error(error);

    }
}
//------------------------------------ USERS SETTING
function checkMatchUserDetails(emailUser: string, passwordUser: string): boolean{
    try {
        if (!users) throw new Error("the users no exist")

         const userIndex = users.findIndex(user=>emailUser.toLowerCase() === user.email.toLowerCase() && passwordUser === user.password)
            if(userIndex === -1) return false 
            else  {
                localStorage.setItem("userIndex", userIndex.toString())
                return true
            }
    } catch (error) {
        console.error(error);
        return false
    }
}
function checksIfUserExists(emailUser: string): boolean{
    try {
        const userCur = users.find(user => user.email === emailUser)
        if (!userCur) return false
        else {
            return true
        }
    } catch (error) {
        console.error(error);
        return false

    }
}
function openMenuLogoutBtn(): void {
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
        console.error(error);
    }

}
function logout(): void {
    try {
        localStorage.setItem("userLogIn", "false")
    } catch (error) {
        console.error(error);
    }
}
function insideTheUser(): boolean | undefined {
    try {
        if (localStorage.getItem("userLogIn") === "true") {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.error(error);
        return false
    }
}
//---------------------------- LOGIN-/-Sign-Up--Pages
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
        updateUsersToLocalStorage()
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

        if (checkMatchUserDetails(emailLogin.value, passwordLogin.value)) {
            ifRefresh()
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
function handleClickLogOut(): void {
    try {
        logout()
        location.reload();
    } catch (error) {
        console.error(error);
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
        console.error(error);
    }
}
//search
function handleClickSearchList(ev: any) {
    try {
        const sectionsSearch = document.querySelector('.sections-search') as HTMLElement;
        makeSectionsActive(sectionsSearch)
    } catch (error) {
        console.error(error);
    }
}
//library
function handleClickLibraryList(ev: any) {
    try {

        if (!insideTheUser()) {
            alert("you must to login to enter Library")
        } else {

            const sectionsLibrary = document.querySelector('.sections-library') as HTMLElement;
            const lists = document.querySelectorAll('.list ');
            lists.forEach(list => {
                list.classList.add("active")
            });
            makeSectionsActive(sectionsLibrary)

        }

    } catch (error) {
        console.error(error);
    }
}
//Create Album
function handleClickCreateAlbumList(ev: any) {
    try {

        if (!insideTheUser()) {

            alert("you must to login to enter Library")
        } else {

            const sectionsCreateAlbum = document.querySelector('.sections-create-album') as HTMLElement;
            const lists = document.querySelectorAll('.list ');
            lists.forEach(list => {
                list.classList.add("active")
            });
            makeSectionsActive(sectionsCreateAlbum)
            createListToOptions()

        }

    } catch (error) {
        console.error(error);
    }
}
//Liked Song
function handleClickLikedPhotosList(ev: any) {
    try {

        if (!insideTheUser()) {
            alert("you must to login to enter Library")
        } else {
            const sectionsLikedPhotos = document.getElementById('likedSongSection') as HTMLElement;
            const lists = document.querySelectorAll('.list ');
            lists.forEach(list => {
                list.classList.add("active")
            });
            sectionsLikedPhotos.classList.add("active")

            makeSectionsActive(sectionsLikedPhotos)
        }

    } catch (error) {
        console.error(error);
    }
}

function handleClickLists(ev: any): void {
    try {
        const sectionsHome = document.querySelectorAll('.sections-home div');
        if (!sectionsHome) throw new Error("section Home Divs not exist")
        sectionsHome.forEach(e => {
            e.classList.remove("active");
            if ((e.getAttribute("datalist") !== null) && e.getAttribute("datalist") === ev.target.textContent) {
                const element = e as HTMLElement;
                element.classList.add("active")
            }
            console.error();
        })
    } catch (error) {
        console.error(error);
    }
}

function handleClickAddToLike(ev: any) {
    const albumName = ev.target.parentElement.parentElement.parentElement.querySelector('h4').innerText;
    const photoTitle = ev.target.parentElement.querySelector('h3').textContent
    const btnLike = ev.target.parentElement.querySelector('button') as HTMLButtonElement
    let currPhoto: Photos | undefined;
    const isDefaultAlbum = ['Backgrounds', 'Animals'].includes(albumName);
    if (isDefaultAlbum) {
        const albumSelected = albumName === 'Animals' ? animals : backgrounds;
        currPhoto = albumSelected.find(photo => photo.photoName === photoTitle);
    } else {
        const currAlbum = albums.find(album => album.name === albumName);
        currPhoto = currAlbum!.photos.find(photo => photo.photoName === photoTitle);
    }

    currPhoto!.like = !currPhoto!.like;
    if (currPhoto!.like) {
        btnLike.style.color = "red";
    } else {
        btnLike.style.color = "black";
    }

    if (!isDefaultAlbum) updatePhotosToLocalStorage();
    else if (albumName === 'Animals') saveAnimalsToStorage();
    else if (albumName === 'Background') saveBackgroundToStorage()

    renderPhotoCard(getLikesPhotos(), "likeSongList")

}
//----------------------Handle Submit Function left List-----------------

function handleSubmitCreateAlbumsList(ev: any):void{
    try {
        ev.preventDefault();
        const nameListValue = ev.target.elements.createListName.value as string 
        if(Number(nameListValue)) return alert("the value must to be string")
        createNewList(nameListValue, nameListValue, "sections-library")
        createListToOptions()

        ev.target.reset()
    } catch (error) {
        console.error(error);
    }
}
function handleSubmitCreatePhoto(ev: any) {
    try {
        ev.preventDefault();

        const albumName = ev.target.elements.selectList.value;
        const photoName = ev.target.elements.photoNameCreateImage.value as string
        const date = ev.target.elements.photoDateCreateImage.value as string
        const src = ev.target.elements.photoSrcCreateImage.value as string

       const dateMounts = date.slice(5 , date.length) ;
       const dateYear = date.slice(0 , 5) ;
       const newDate = `< -- ${dateMounts}-${dateYear} -- >` as string

        const currAlbum = albums!.find(album => album.name === albumName)
        const albumPhotos = currAlbum!.photos;
        // make new Photo
        albumPhotos!.push(new Photos(photoName, newDate , src));
        updatePhotosToLocalStorage()
        const photoContainer = `${albumName}-photos`;
        renderPhotoCard(albumPhotos, photoContainer)
        ev.target.reset()
    } catch (error) {
        console.error(error);
    }
}
function handleSubmitSearchSection(ev: any) {
    try {
        ev.preventDefault();
        const titleList = document.getElementById('searchSectionTitleList')! as HTMLElement;
        const inputSearchValue = ev.target.elements.inputValueSearch.value
            if(!inputSearchValue) return
        const findSearchArr =  albums.find(album => album.name.toLocaleLowerCase() === inputSearchValue.toLocaleLowerCase())
        if(!findSearchArr) return alert("the albums not found")
        const {name , photos} = findSearchArr;
        titleList.innerText = name
                    const listSearchAlbum = document.getElementById('listSearchAlbum')

                    
                   renderPhotoCard(photos , "sections-search_photos");

    } catch (error) {
        console.error(error);
    }
}