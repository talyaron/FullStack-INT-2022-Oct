function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
  var sizeCon:string = "";

  function convertSize(sizeValue:number){
    
if(sizeValue == 0){
    sizeCon = "Sparrow-sized"
    return sizeCon
}
if(sizeValue == 25){
    sizeCon = "Robin-Sized"
    return sizeCon
}
if(sizeValue == 50){
    sizeCon = "Crow-sized"
    return sizeCon
    
}
if(sizeValue == 75){
    sizeCon = "Falcon-sized"
    return sizeCon
}
if(sizeValue == 100){
    sizeCon = "Goose-sized"
    return sizeCon
}
}
