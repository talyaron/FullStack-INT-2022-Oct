interface Bot{
    name:string,
    img:string 
}

function handleGetBots(){
    try {
        fetch("/api/get-bots")
        .then((res) => res.json())
        .then (({bots})=> {
            try {
                if(!bots) throw new Error("didnt find bots");
                console.log(bots);
                renderBots(bots);
            } catch (error) {
                console.error(error);
            }
        })
    } catch (error) {
        console.error(error);
    }
}

function renderBots( bots: Array<Bot>){
    try {
        if (!bots) throw new Error("No Bots");

        const html= bots
        .map((bot) => {
            return `<div class="botsCard">
            <h3>${bot.name}</h3>
            <img src="${bot.img}" alt="bots image">`
        })
        .join(" ");

        const botsElement= document.querySelector("#bots");
        if (!botsElement) throw new Error("bots element not found");

        botsElement.innerHTML= html;
        
        
    } catch (error) {
        console.error(error);
    }
}

function handleAddBot(ev: any) {
    try {
      ev.preventDefault();
      const name = ev.target.elements.name.value;
      const img = ev.target.elements.img.value;
      if (!name) throw new Error("No name");
      if (!img) throw new Error("No image");
      const newBot: any = { name, img };
  
      //send to server:
      fetch("/api/add-bot", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBot),
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