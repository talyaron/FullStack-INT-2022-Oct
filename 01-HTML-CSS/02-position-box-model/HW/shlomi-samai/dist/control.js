function handleAddItem(ev) {
    debugger;
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const BigPictureURL = ev.target.elements.BigPictureURL.value;
        const smallPictureURL = ev.target.elements.smallPictureURL.value;
        posts.push(new Post(name, BigPictureURL, smallPictureURL));
        ev.target.reset();
        render();
    }
    catch (error) {
        console.error(error);
    }
}
function render() {
    let page = "";
    let j = 0;
    for (j = 0; j <= posts.length - 1; j++) {
        page += `<div class="recurring_div">
             <div class="recurring_div_headline"> 
            <h3>${posts[j].name}</h3>
            <h3>${posts[j].BigPictureURL}</h3>
            <h3>${posts[j].uid}</h3>
            <img src='${posts[j].smallPictureURL}'/>
            <button onclick="handleDeleteItem('${post[j].uid}')">Remove</button>    
            </div> `;
    }
    console.log(page);
    const html = document.querySelector("#list");
    if (html !== null) {
        html.innerHTML = page;
        console.log(html);
    }
}
function handleDeleteItem(uid) {
    try {
        const index = posts.findIndex((Post) => Post.uid === uid);
        if (index === -1)
            throw new Error("item not found");
        posts.splice(index, 1);
        render();
    }
    catch (error) {
        console.error(error);
    }
}
