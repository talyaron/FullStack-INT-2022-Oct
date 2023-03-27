

interface FoodTips {
    id: number,
    header: string,
    photo: string,
    tip: string,  
}

const  foodTipTemp: FoodTips [] = []

renderFoodTips()

async function renderFoodTips(){
   try {
      const food = fetch('/foodTips')
         .then(response => response.json())
         .then(data => {
                
          const  foodTip: FoodTips [] = data;
                
          if(!foodTip) throw new Error ("Don't have detail selected")     
                
          let tempIndex: number []= []
          let indexTure = false;
          do{
            const randomIndex = Math.floor(Math.random() * 12)
                        
            if (tempIndex.length != 0){
                tempIndex.forEach(indexTemp =>{
                    if(indexTemp == randomIndex) indexTure = true      
                })
            }
            if (!indexTure){
                tempIndex.push(randomIndex)
            }
            indexTure = false
        }while (tempIndex.length < 4);

        tempIndex.forEach(index => {
            foodTipTemp.push(foodTip[index])

        })

                 const html = foodTipTemp
                    .map((tips) => {
                        return `<div class="foodTips">
                        <p>${tips.header}</p>
                        <img class="foodTips__img" src=${tips.photo} alt="food image">
                        <p>${tips.tip}</p>
                        </div>`;
                    })
                      .join(" ");
        
      const tipsElement = document.querySelector("#container");
      if (!tipsElement) throw new Error("coundnt find tips element on DOM");
  
      tipsElement.innerHTML = html;
    })
        // const randomImageIndex = Math.floor(Math.random() * imageBreedList.length);
        // dogImage.src = imageBreedList[randomImageIndex];
    } catch (error) {
        console.error(error)        
    }
}
  


