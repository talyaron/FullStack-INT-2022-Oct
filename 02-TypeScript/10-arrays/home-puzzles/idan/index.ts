const things :string[] = [`joe biden`,`joe rogen`, `michael`, `nicolas`, `zaho sheng hao jung wo shenzai wo yo bing chilling wo hanchiwen bing chilling deshu sudjujijincho b'bing chilling wo sudju-sudjujijincho wo zweishiwan` ]
while(true){
    const userInput = prompt(`search for somethin`);
    if(userInput){
        search(things, userInput);
    }
}


function search(listOfNames:string[], searchedItem:string):void{
    try {
        for (let index = 0; index < listOfNames.length; index++) {
            if(listOfNames[index].indexOf(searchedItem)!= -1){
                console.log(`${listOfNames[index]}`);
            }
            
        }



    } catch (error) {
        
    }

}