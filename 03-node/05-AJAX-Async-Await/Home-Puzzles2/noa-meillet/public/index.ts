interface New{
  heading:string,
  content: string,
  img:string 
}

function handleGetNews(){
    try {
        fetch("/api/get-news")
        .then((res) => res.json())
        .then (({news})=> {
            try {
                if(!news) throw new Error("didnt find news");
                console.log(news);
                rendernews(news);
            } catch (error) {
                console.error(error);
            }
        })
    } catch (error) {
        console.error(error);
    }
}

function rendernews( news: Array<New>){
    try {
        if (!news) throw new Error("No news");
        const html= news
        .map((news) => {
            return `<div class="newsCard">
            <h3>${news.heading}</h3>
            <p>${news.content}</p>
            <img src="${news.img}" alt="news image">`
        })
        .join(" ");

        const newsElement= document.querySelector("#news");
        if (!newsElement) throw new Error("news element not found");

        newsElement.innerHTML= html;
        
        
    } catch (error) {
        console.error(error);
    }
}

function handleAddNew(ev: any) {
    try {
      ev.preventDefault();
      const heading = ev.target.elements.heading.value;
      const content = ev.target.elements.content.value;
      const img = ev.target.elements.img.value;
      if (!heading) throw new Error("No heading");
      if (!content) throw new Error("No content");
      if (!img) throw new Error("No image");
      const newNew: any = { heading, content, img };
  
      //send to server:
      fetch("/api/add-news", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newNew),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }