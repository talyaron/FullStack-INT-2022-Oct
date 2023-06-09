
function renderStory(users:User[]){

let storyPage = "";
let k = 0;
for (k = 0; k <= users.length - 1; k++) {
  storyPage += `<div> <img class="img_story" src="${users[k].pictureURL}" onclick="renderfilterUser(users,'${users[k].name}')" alt=""/>
                </div> `
                 ;
}
const htmlStory: HTMLDivElement | null = document.querySelector("#storyBox");
if (htmlStory !== null) {
  htmlStory.innerHTML = storyPage;
}  
render(posts)
} 




function renderusers(users:User[]){
  let page = "";
  let j = 0;
  for (j = 0; j <= users.length - 1; j++) {
    page += `<div class="recurring_user">
           <a href="./index.html"> <img src='${users[j].pictureURL}'/></a>
             <button onclick="handleDeleteUser('${users[j].uid}')">Remove</button>  
            </div> `;
  }

//   <a href="./selectUser.html"> <img
//   class="img_bottom_headline" rc="" alt=""
// /></a>

  const html: HTMLDivElement | null = document.querySelector("#listofUsers");
  if (html !== null) {
    html.innerHTML = page;
  }
  localStorage.setItem("users", JSON.stringify(users));
}

function handleDeleteUser(uid: string) {
  try {
    const index = users.findIndex((User) => User.uid === uid);
    if (index === -1) throw new Error("item not found");
    users.splice(index, 1);
    renderusers(users);
   
    
  } catch (error) {
    console.error(error);
  }
}



function handleAddItem(ev) {
  try {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const BigPictureURL = ev.target.elements.BigPictureURL.value;
    const smallPictureURL = ev.target.elements.smallPictureURL.value;

    posts.push(new Post(name,BigPictureURL,smallPictureURL));
    
    ev.target.reset();
    localStorage.setItem("posts", JSON.stringify(posts));
  
    render(posts);
  } catch (error) {
    console.error(error);
  }
}

function handleaddUser(ev) {
  try {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    const PictureURL = ev.target.elements.PictureURL.value;

    users.push(new User(name,PictureURL));
    
    ev.target.reset();
    localStorage.setItem("users", JSON.stringify(users));
  
    // let page = "";
    // let j = 0;
    // for (j = 0; j <= users.length - 1; j++) {
    //   page += `<div class="recurring_div">
    //           <h3>${users[j].name}</h3>
    //           <img src='${users[j].pictureURL}'/>
    //           <a class="linkButton" href="./index.html">Enter</a>   
    //           </div> `;
    // }
    // const html: HTMLDivElement | null = document.querySelector("#listofUsers");
    // if (html !== null) {
    //   html.innerHTML = page;
    // }
  } catch (error) {
    console.error(error);
  }
  renderusers(getUserFromStorage())
}

function render(posts:Post[]) {
  let page = "";
  let j = 0;
  for (j = 0; j <= posts.length - 1; j++) {
    page += `<div class="recurring_div">
            <div class="recurring_div_headline">
            <img class="dots" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAclBMVEX///8AAAD8/PzNzc2+vr7y8vIEBATU1NRXV1fb29v19fXKysqBgYEuLi6lpaXa2tqUlJS4uLivr692dnZNTU1hYWEzMzPj4+NmZmZGRkaNjY0RERGdnZ04ODipqakWFhZycnIdHR2EhIQlJSVBQUGOjo5ByTspAAADg0lEQVR4nO3bW3fiIBSG4YAmVqPWnrStbe3x///FEW1nciCwpYli5n0ueuFaX7O2AQIBkwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB86N3fyXgwHObjye4TLY3qQjQ9IFoIDvbBRHrNeOh8ulTfZtP8oALy91lQdHvNv8HlgdeMQrpYq5Lsy9x/SSGTxWYXqEQF1/zKytdcL9LzanBzZfGUSIp4skY9OdM/rcF5O/Ucxeq52Fj+WY7DotsPZu6oTsZLywW3nldtVdUtnQztBRhXzqAn6mpxjuDwPPrpdXMF7k6jk5fGXOaOWgeFH9dtV9iFK2Xvod/Fu2q4ctTujL44L+ls45EYue67kQdGs+Zo7rvmIPZ+mr75SlBNs4nJxp3LVGaPpt5LbmQzmNO58VWQqfuG6GtjR/tJNkTvPcGtm+4qboO3ixoDS1DLorZuOpAER11X/isX/huv1END1CtTt5bggyR4EfPoNvZXYNhu/WVoVNRKlbrsvvpg77ISbCNNcNQ7mu69d199KP0hK2E9qUffZNFNta/ptT9kfMTbSYV91PSYahErebRM2LmV8q+HT8W5rCqqr5OE0awWdS6riuJdYj1KS6iPUMKhTalpJSgc2pR6PM53EOBOWsJFe1HBvGXv7jjfQQBxCdWZm5ZHPytRwaxtr36rYnErr736SBBHn0sxnXxKg7aZchyCW9sB0R62NvEAVb/zwWObuJnGO7aJn6TVx6EOf5JOpcF4n6Tdz9vq0R7M28SrhFHtkXBAtEy4ko95LS9ek1rWh2+yaB/XpLwBCRP80uz/ft8mm34Fv921z1lFM7d4Z21G8F6CiWb+F+o93UuQ7VzZR+dXf/G2nSvdg50r72anMvuktq9NJxPvM9G6T6ol+6T118mR8XYZ5668o9n0eldeOw9yKNdkXRBtKt6zxnAfVopEYw2mKTmODen9EZjGBjd3HCqcK0dLjXdZVdJ01izznf3ZnW9rqt7dZBwNddhudR3Renck0ma58vSW5uhs5TzA6jxNKT6jfnLV9xK7JvQkj2aloP/srmHO7ta6+Dmd3U3Mce9KAdlCeljKfshc8L2l9WtGP/EoM0UWfiMwm+Y/n0qSlagW/aDDEvxFASeVFn+Rcpjir2COdc04tDES6/D/cjYPAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+ugPIzEmQu4Z4CcAAAAASUVORK5CYII=" alt="">
            <img class="small_logo" src='${posts[j].BigPictureURL}'/>
                <h1 class="h1_design">${posts[j].name}</h1> 
            </div>  
            <img width="100%" height="400PX"  src='${posts[j].smallPictureURL}'/>
            <img  width=100px src="https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437766_i0OptrhIdzCLQ2BTnt0XdgpNGoD61PjZ.jpg" alt="">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est minima officiis nam delectus, a, debitis dolore tempore doloremque fugiat ea, assumenda quos facere aspernatur eius ipsa voluptas qui pariatur. Doloremque!</p>
            <button onclick="handleDeleteItem('${posts[j].uid}')">Remove</button><button onclick="handleUpdatePic('${posts[j].uid}')">Update Picture</button></div>    
            </div> `;
  }
  console.log(page);
  const html: HTMLDivElement | null = document.querySelector("#list");
  if (html !== null) {
    html.innerHTML = page;
    console.log(html);
  }
  localStorage.setItem("posts", JSON.stringify(posts));
}

function handleDeleteItem(uid: string) {
  try {
    const index = posts.findIndex((Post) => Post.uid === uid);
    if (index === -1) throw new Error("item not found");
    posts.splice(index, 1);
    render(posts);
   
    
  } catch (error) {
    console.error(error);
  }
}

function handleUpdatePic(uid: string) {
  try {
    const index = posts.findIndex((Post) => Post.uid === uid);
    if (index === -1) throw new Error("item not found");
    const newPic = prompt("Enter a new URL pic");
    if (!newPic) throw new Error("Please enter a valid URL");
    posts[index].smallPictureURL=newPic;
    localStorage.setItem("posts", JSON.stringify(posts));
    render(posts);
  } catch (error) {
    console.error(error);
  }
}


function filterUser(ev) {
  try {
    ev.preventDefault();
    const name = ev.target.elements.name.value;

    ev.target.reset();
  
    renderfilterUser(posts,name);
  } catch (error) {
    console.error(error);
  }
}



function renderfilterUser(posts:Post[],user:string) {
  debugger;
  try {
  let page = "";
  let j = 0;
  for (j = 0; j <= posts.length - 1; j++) {
    if (posts[j].name===user){
    page += `<div class="recurring_div">
            <div class="recurring_div_headline">
            <img class="dots" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAclBMVEX///8AAAD8/PzNzc2+vr7y8vIEBATU1NRXV1fb29v19fXKysqBgYEuLi6lpaXa2tqUlJS4uLivr692dnZNTU1hYWEzMzPj4+NmZmZGRkaNjY0RERGdnZ04ODipqakWFhZycnIdHR2EhIQlJSVBQUGOjo5ByTspAAADg0lEQVR4nO3bW3fiIBSG4YAmVqPWnrStbe3x///FEW1nciCwpYli5n0ueuFaX7O2AQIBkwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB86N3fyXgwHObjye4TLY3qQjQ9IFoIDvbBRHrNeOh8ulTfZtP8oALy91lQdHvNv8HlgdeMQrpYq5Lsy9x/SSGTxWYXqEQF1/zKytdcL9LzanBzZfGUSIp4skY9OdM/rcF5O/Ucxeq52Fj+WY7DotsPZu6oTsZLywW3nldtVdUtnQztBRhXzqAn6mpxjuDwPPrpdXMF7k6jk5fGXOaOWgeFH9dtV9iFK2Xvod/Fu2q4ctTujL44L+ls45EYue67kQdGs+Zo7rvmIPZ+mr75SlBNs4nJxp3LVGaPpt5LbmQzmNO58VWQqfuG6GtjR/tJNkTvPcGtm+4qboO3ixoDS1DLorZuOpAER11X/isX/huv1END1CtTt5bggyR4EfPoNvZXYNhu/WVoVNRKlbrsvvpg77ISbCNNcNQ7mu69d199KP0hK2E9qUffZNFNta/ptT9kfMTbSYV91PSYahErebRM2LmV8q+HT8W5rCqqr5OE0awWdS6riuJdYj1KS6iPUMKhTalpJSgc2pR6PM53EOBOWsJFe1HBvGXv7jjfQQBxCdWZm5ZHPytRwaxtr36rYnErr736SBBHn0sxnXxKg7aZchyCW9sB0R62NvEAVb/zwWObuJnGO7aJn6TVx6EOf5JOpcF4n6Tdz9vq0R7M28SrhFHtkXBAtEy4ko95LS9ek1rWh2+yaB/XpLwBCRP80uz/ft8mm34Fv921z1lFM7d4Z21G8F6CiWb+F+o93UuQ7VzZR+dXf/G2nSvdg50r72anMvuktq9NJxPvM9G6T6ol+6T118mR8XYZ5668o9n0eldeOw9yKNdkXRBtKt6zxnAfVopEYw2mKTmODen9EZjGBjd3HCqcK0dLjXdZVdJ01izznf3ZnW9rqt7dZBwNddhudR3Renck0ma58vSW5uhs5TzA6jxNKT6jfnLV9xK7JvQkj2aloP/srmHO7ta6+Dmd3U3Mce9KAdlCeljKfshc8L2l9WtGP/EoM0UWfiMwm+Y/n0qSlagW/aDDEvxFASeVFn+Rcpjir2COdc04tDES6/D/cjYPAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+ugPIzEmQu4Z4CcAAAAASUVORK5CYII=" alt="">
            <img class="small_logo" src='${posts[j].BigPictureURL}'/>
                <h1 class="h1_design">${posts[j].name}</h1> 
            </div>  
            <img width="100%" height="400PX"  src='${posts[j].smallPictureURL}'/>
            <img  width=100px src="https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437766_i0OptrhIdzCLQ2BTnt0XdgpNGoD61PjZ.jpg" alt="">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est minima officiis nam delectus, a, debitis dolore tempore doloremque fugiat ea, assumenda quos facere aspernatur eius ipsa voluptas qui pariatur. Doloremque!</p>
            <button onclick="handleDeleteItem('${posts[j].uid}')">Remove</button><button onclick="handleUpdatePic('${posts[j].uid}')">Update Picture</button></div>    
            </div> `;
  }
}
  console.log(page);
  const html: HTMLDivElement | null = document.querySelector("#list");
  if (html !== null) {
    html.innerHTML = page;
  }
  // localStorage.setItem("posts", JSON.stringify(posts));
  } catch (error) {
    alert("no post availble")
    console.error(error); 
  }

}

