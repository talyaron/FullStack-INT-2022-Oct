function renderusers(ev) {
    var page = "";
    var j = 0;
    for (j = 0; j <= users.length - 1; j++) {
        page += "<div class=\"recurring_div\">\n            <h3>" + users[j].name + "</h3>\n            <img src='" + users[j].pictureURL + "'/>\n            <a class=\"linkButton\" href=\"./index.html\">Enter</a>   \n            </div> ";
    }
    var html = document.querySelector("#listofUsers");
    if (html !== null) {
        html.innerHTML = page;
    }
}
function handleAddItem(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var BigPictureURL = ev.target.elements.BigPictureURL.value;
        var smallPictureURL = ev.target.elements.smallPictureURL.value;
        posts.push(new Post(name, BigPictureURL, smallPictureURL));
        ev.target.reset();
        localStorage.setItem("posts", JSON.stringify(posts));
        render(posts);
    }
    catch (error) {
        console.error(error);
    }
}
function render(posts) {
    var page = "";
    var j = 0;
    for (j = 0; j <= posts.length - 1; j++) {
        page += "<div class=\"recurring_div\">\n            <div class=\"recurring_div_headline\">\n            <img class=\"dots\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAclBMVEX///8AAAD8/PzNzc2+vr7y8vIEBATU1NRXV1fb29v19fXKysqBgYEuLi6lpaXa2tqUlJS4uLivr692dnZNTU1hYWEzMzPj4+NmZmZGRkaNjY0RERGdnZ04ODipqakWFhZycnIdHR2EhIQlJSVBQUGOjo5ByTspAAADg0lEQVR4nO3bW3fiIBSG4YAmVqPWnrStbe3x///FEW1nciCwpYli5n0ueuFaX7O2AQIBkwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB86N3fyXgwHObjye4TLY3qQjQ9IFoIDvbBRHrNeOh8ulTfZtP8oALy91lQdHvNv8HlgdeMQrpYq5Lsy9x/SSGTxWYXqEQF1/zKytdcL9LzanBzZfGUSIp4skY9OdM/rcF5O/Ucxeq52Fj+WY7DotsPZu6oTsZLywW3nldtVdUtnQztBRhXzqAn6mpxjuDwPPrpdXMF7k6jk5fGXOaOWgeFH9dtV9iFK2Xvod/Fu2q4ctTujL44L+ls45EYue67kQdGs+Zo7rvmIPZ+mr75SlBNs4nJxp3LVGaPpt5LbmQzmNO58VWQqfuG6GtjR/tJNkTvPcGtm+4qboO3ixoDS1DLorZuOpAER11X/isX/huv1END1CtTt5bggyR4EfPoNvZXYNhu/WVoVNRKlbrsvvpg77ISbCNNcNQ7mu69d199KP0hK2E9qUffZNFNta/ptT9kfMTbSYV91PSYahErebRM2LmV8q+HT8W5rCqqr5OE0awWdS6riuJdYj1KS6iPUMKhTalpJSgc2pR6PM53EOBOWsJFe1HBvGXv7jjfQQBxCdWZm5ZHPytRwaxtr36rYnErr736SBBHn0sxnXxKg7aZchyCW9sB0R62NvEAVb/zwWObuJnGO7aJn6TVx6EOf5JOpcF4n6Tdz9vq0R7M28SrhFHtkXBAtEy4ko95LS9ek1rWh2+yaB/XpLwBCRP80uz/ft8mm34Fv921z1lFM7d4Z21G8F6CiWb+F+o93UuQ7VzZR+dXf/G2nSvdg50r72anMvuktq9NJxPvM9G6T6ol+6T118mR8XYZ5668o9n0eldeOw9yKNdkXRBtKt6zxnAfVopEYw2mKTmODen9EZjGBjd3HCqcK0dLjXdZVdJ01izznf3ZnW9rqt7dZBwNddhudR3Renck0ma58vSW5uhs5TzA6jxNKT6jfnLV9xK7JvQkj2aloP/srmHO7ta6+Dmd3U3Mce9KAdlCeljKfshc8L2l9WtGP/EoM0UWfiMwm+Y/n0qSlagW/aDDEvxFASeVFn+Rcpjir2COdc04tDES6/D/cjYPAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+ugPIzEmQu4Z4CcAAAAASUVORK5CYII=\" alt=\"\">\n            <img class=\"small_logo\" src='" + posts[j].BigPictureURL + "'/>\n                <h1 class=\"h1_design\">" + posts[j].name + "</h1> \n            </div>  \n            <img width=\"100%\" height=\"400PX\"  src='" + posts[j].smallPictureURL + "'/>\n            <img  width=100px src=\"https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437766_i0OptrhIdzCLQ2BTnt0XdgpNGoD61PjZ.jpg\" alt=\"\">\n            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est minima officiis nam delectus, a, debitis dolore tempore doloremque fugiat ea, assumenda quos facere aspernatur eius ipsa voluptas qui pariatur. Doloremque!</p>\n            <button onclick=\"handleDeleteItem('" + posts[j].uid + "')\">Remove</button><button onclick=\"handleUpdatePic('" + posts[j].uid + "')\">Update Picture</button></div>    \n            </div> ";
    }
    console.log(page);
    var html = document.querySelector("#list");
    if (html !== null) {
        html.innerHTML = page;
        console.log(html);
    }
    localStorage.setItem("posts", JSON.stringify(posts));
}
function handleDeleteItem(uid) {
    try {
        var index = posts.findIndex(function (Post) { return Post.uid === uid; });
        if (index === -1)
            throw new Error("item not found");
        posts.splice(index, 1);
        render(posts);
    }
    catch (error) {
        console.error(error);
    }
}
function handleUpdatePic(uid) {
    try {
        var index = posts.findIndex(function (Post) { return Post.uid === uid; });
        if (index === -1)
            throw new Error("item not found");
        var newPic = prompt("Enter a new URL pic");
        if (!newPic)
            throw new Error("Please enter a valid URL");
        posts[index].smallPictureURL = newPic;
        localStorage.setItem("posts", JSON.stringify(posts));
        render(posts);
    }
    catch (error) {
        console.error(error);
    }
}
// <div class="recurring_div">
// <div class="recurring_div_headline">
//     <img class="dots" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAD39/f4+Pj8/PwiIiL09PQlJSUEBAQbGxseHh4UFBQICAgXFxcQEBCwsLBgYGCDg4PNzc3i4uIpKSlaWlqTk5PLy8t2dnZ/f3+oqKi3t7cvLy/c3Nw0NDQtLS1FRUVxcXGOjo5OTk6bm5vFaYrSAAAD9klEQVR4nO3ZCXObPBCAYQQS9+GDNLeT+Mv//43frohtbMCZThpIO+8zdSa114xWqwsSBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAr7M/8Ep/xPZhvbpZrZvt55HNb0Y+fB75zWxgmxdzsGvkncnut82uFzkdJp/0Il8kctGK3mbHtphU2rOZbM6mNX3tZiLOBpsnf62D7Pa7Gv85G6zNpfeJ2F+DyF8Tke+DyPVyVbzr9/XV5twPIlNzPxI31mmpufvuRKYMG6PNGVbRSgWHXZFKFYed8T4Sqd22iNuRpqjhDNt8OXKZuViMdrcsIoPIZDQyHYlsR+I0spgjoUsPE92dmseLyGYi0pjGhmHYi3yc6DRjHuZM7cPTZIavF5G7iUgjkWFo41Pk62SGT/MldvA82Wxjzk8i28m4on6OotiGn0ca8zx7hlODVJ0P0+lBmsgwjW18zPDxyjXnH6Z3V1qzP4sc21Q6bbmP4vCU4f7KNeffE1cXLXDJ6fe3q5EnWbIK4uiU4duVDFezZ3hz0YIkLycyvIzsOsRHJ282CuPjvn8tw5vZM7yszHSGYzXM6+SjMmHvXHMtw/lr2J+HtUtSn2GVVPr/fbc8SnnCSOdh7Vwhr+ojO+fSPG2dvnFvJcBKnA/d+2s5N5bh/POwt5YWuSkyzTDLjBxKWtNEuo9rq+MokrVUmpzlRj8WkleZdwVvzYNsFjaWOP1nZdUtpLZlO7Irzr+W9vbDxCROR2nq6qSQAWi2ustpZbQ2ssuVbVKWSVs6abkEtc7kZVfDZ5mFUSiLjZVXtPXXeqmLbJjh/Pvh6UxTVDqsJMNKCyBt/E/OYpGU8PDjVernstq/TJ1pdF5qreSkIj0g1dN6y5fsa1m4wpXJMMEFzjSnYZp1ieVpVWjj3WGQSsODSIapbdIuw+Q8w9LpuTSWmEOGUSNvunLs+L3EufR4b1FXrvZpdhnmrUwsa335ZOzJGIx2vQwLn2Ema2lW7qx2g89QvqK/72rnR4Spy156C91bnO4PE+NcJhXpMjQbPwMjG8paGkuGod1ohoVmWMlCqRUvZcrmcn94lqHUUyN1ftZZ1k9xofvD43FMmltW0u4qS/w9vibWrR2aYOS3gUQWIHm5uk5q/U6ea6T1o1MONVJwraGVe/xah2+VFUUvwYXu8XvPabLM73U6Ctfa7NDf9kW+2YEczIJ7I8ujjL8yP9Sm9s9prHwmxQ4+5qPV5zQyE43M6d4YXew5zZ9/1qbnmx/1rO2bnpe+/JjnpV975j0R+NOeeat/+u8W5/7Zvz0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwF/qfzUNKsduUfK6AAAAAElFTkSuQmCC" alt="">
//     <img class="small_logo" src="data:image/jpeg;base64,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" alt="">
//     <h1 class="h1_design">shlomi</h1> 
// </div> 
// <img width="100%" height="400PX" src="data:image/jpeg;base64,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" alt="">
// <img  width=100px src="https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437766_i0OptrhIdzCLQ2BTnt0XdgpNGoD61PjZ.jpg" alt="">
// <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est minima officiis nam delectus, a, debitis dolore tempore doloremque fugiat ea, assumenda quos facere aspernatur eius ipsa voluptas qui pariatur. Doloremque!</p>
// </div>
// function handleAddItem(ev) {
//   try {
//     ev.preventDefault();
//     const name = ev.target.elements.name.value;
//     const address = ev.target.elements.address.value;
//     const email = ev.target.elements.email.value;
//     const phone = ev.target.elements.phone.valueAsNumber;
//     const password = ev.target.elements.password.value;
//     const preferedColor = ev.target.elements.preferedColor.value;
//     const pictureURL = ev.target.elements.pictureURL.value;
//     people.push(
//       new Person(
//         name,
//         address,
//         email,
//         phone,
//         password,
//         preferedColor,
//         pictureURL
//       )
//     );
//     ev.target.reset();
//     render();
//   } catch (error) {
//     console.error(error);
//   }
// }
// function render() {
//   let page = "";
//   let j = 0;
//   for (j = 0; j <= people.length - 1; j++) {
//     page += `<div class="list"> 
//             <h3>${people[j].name}</h3>
//             <h3>${people[j].address}</h3>
//             <h3>${people[j].email}</h3>
//             <h3>${people[j].phone}</h3>
//             <h3>${people[j].password}</h3>
//             <h3>${people[j].preferedColor}</h3>
//             <h3>${people[j].uid}</h3>
//             <button onclick="handleDeleteItem('${people[j].uid}')">Remove</button>       
//             <img src='${people[j].pictureURL}'/>
//             </div>
//             <div class="recurring_div_headline">
//             <img class="dots" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAD39/f4+Pj8/PwiIiL09PQlJSUEBAQbGxseHh4UFBQICAgXFxcQEBCwsLBgYGCDg4PNzc3i4uIpKSlaWlqTk5PLy8t2dnZ/f3+oqKi3t7cvLy/c3Nw0NDQtLS1FRUVxcXGOjo5OTk6bm5vFaYrSAAAD9klEQVR4nO3ZCXObPBCAYQQS9+GDNLeT+Mv//43frohtbMCZThpIO+8zdSa114xWqwsSBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAr7M/8Ep/xPZhvbpZrZvt55HNb0Y+fB75zWxgmxdzsGvkncnut82uFzkdJp/0Il8kctGK3mbHtphU2rOZbM6mNX3tZiLOBpsnf62D7Pa7Gv85G6zNpfeJ2F+DyF8Tke+DyPVyVbzr9/XV5twPIlNzPxI31mmpufvuRKYMG6PNGVbRSgWHXZFKFYed8T4Sqd22iNuRpqjhDNt8OXKZuViMdrcsIoPIZDQyHYlsR+I0spgjoUsPE92dmseLyGYi0pjGhmHYi3yc6DRjHuZM7cPTZIavF5G7iUgjkWFo41Pk62SGT/MldvA82Wxjzk8i28m4on6OotiGn0ca8zx7hlODVJ0P0+lBmsgwjW18zPDxyjXnH6Z3V1qzP4sc21Q6bbmP4vCU4f7KNeffE1cXLXDJ6fe3q5EnWbIK4uiU4duVDFezZ3hz0YIkLycyvIzsOsRHJ282CuPjvn8tw5vZM7yszHSGYzXM6+SjMmHvXHMtw/lr2J+HtUtSn2GVVPr/fbc8SnnCSOdh7Vwhr+ojO+fSPG2dvnFvJcBKnA/d+2s5N5bh/POwt5YWuSkyzTDLjBxKWtNEuo9rq+MokrVUmpzlRj8WkleZdwVvzYNsFjaWOP1nZdUtpLZlO7Irzr+W9vbDxCROR2nq6qSQAWi2ustpZbQ2ssuVbVKWSVs6abkEtc7kZVfDZ5mFUSiLjZVXtPXXeqmLbJjh/Pvh6UxTVDqsJMNKCyBt/E/OYpGU8PDjVernstq/TJ1pdF5qreSkIj0g1dN6y5fsa1m4wpXJMMEFzjSnYZp1ieVpVWjj3WGQSsODSIapbdIuw+Q8w9LpuTSWmEOGUSNvunLs+L3EufR4b1FXrvZpdhnmrUwsa335ZOzJGIx2vQwLn2Ema2lW7qx2g89QvqK/72rnR4Spy156C91bnO4PE+NcJhXpMjQbPwMjG8paGkuGod1ohoVmWMlCqRUvZcrmcn94lqHUUyN1ftZZ1k9xofvD43FMmltW0u4qS/w9vibWrR2aYOS3gUQWIHm5uk5q/U6ea6T1o1MONVJwraGVe/xah2+VFUUvwYXu8XvPabLM73U6Ctfa7NDf9kW+2YEczIJ7I8ujjL8yP9Sm9s9prHwmxQ4+5qPV5zQyE43M6d4YXew5zZ9/1qbnmx/1rO2bnpe+/JjnpV975j0R+NOeeat/+u8W5/7Zvz0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwF/qfzUNKsduUfK6AAAAAElFTkSuQmCC" alt="">
//             <img class="small_logo" src="data:image/jpeg;base64,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" alt="">
//             <h1 class="h1_design">shlomi</h1> 
//             </div> `;
//   }
//   console.log(page);
//   const html: HTMLDivElement | null = document.querySelector("#list");
//   if (html !== null) {
//     html.innerHTML = page;
//     console.log(html);
//   }
// }
// function handleDeleteItem(uid: string) {
//   try {
//     const index = posts.findIndex((Post) => Post.uid === uid);
//     if (index === -1) throw new Error("item not found");
//     posts.splice(index, 1);
//     render();
//   } catch (error) {
//     console.error(error);
//   }
// }
