
function hendelClearTheBoard(){
    drawBox()
}


function playInGrid(){
    try {
        
        const inputAll = document.querySelectorAll(".sodoku__box__input");
        inputAll.forEach((inputs, indexInput) =>{
        inputs.addEventListener('input', function (event) {
            const target = event.target as HTMLInputElement;
            let trueValue = false
            let checkError:any = ""

            for (let i=0; i < 9; i++){
                if (target.value === i.toString()){
                    trueValue = true
                    checkError = check_grid(target.value, indexInput)
                    
                    if(checkError != "" && checkError != undefined) {
                        target.value = ""
                        checkError = ""
                    }
                    console.log(`target.value ${target.value}`);
                    
                }
                }
            if(!trueValue){
                alert("Only number bettwin 1-9")
                target.value = ""
            }
        })

    }) 

    } catch (error) {
        console.error(error)
    }
}


function check_grid(targetValue:string, inputIndex:number) { //check fields!!!
try {

        for (let i=0; i < 8; i++ ){
            for (let j=0; j < 8; j++ ){
                if (rowBox[i][j] == inputIndex){
                    tmpArr[i][j] = parseInt(targetValue)
                    let checkError = check_value(i, j, targetValue, inputIndex)
                    if(checkError != "") return checkError
                    break
                }                        
            }
        }
        
    } catch (error) {
         console.error(error)
    }
}

function check_value(indexRow:number, indexCol:number, targetValue:string, inputIndex:number) {
    try {
        let errorChack = ""
        let indexI = 0
        let indexJ = 0
        let indexBoxI = 0
        let indexBoxJ = 0
        console.log("start");
        
        for (let i=0; i < 9; i++ ){
            for (let j=0; j < 9; j++ ){
                if (rowBox[i][j] == inputIndex){
                    indexI = i
                    indexJ = j
                }
                if(boxBox[i][j] == inputIndex) {
                    indexBoxI = i
                    indexBoxJ = j
                    console.log(`j ${j}`);
                    
                }
            }
        }

        console.log(indexBoxI  + " indexBoxI");
        
        for (let i=0; i < 9; i++ ){
            if((i != indexI) && (i != indexJ)){
                if((tmpArr[indexI][i] == targetValue && tmpArr[indexI][i] != 0) || (tmpArr[i][indexJ] == targetValue && tmpArr[i][indexJ] != 0)){
                    errorChack = ("Duplicate number in the row or column")
                    console.log("row");
                    
                }
            }
        }


        for (let i=0; i < 3; i++ ){
            for (let j=0; j < 3; j++ ){
            if((i != indexBoxI) && (i != indexBoxJ)){
                if((tmpArr[box[indexBoxI].row1][box[indexBoxI].col1] == targetValue) && 
                    (tmpArr[box[indexBoxI].row1][box[indexBoxI].col1] != 0))
                    errorChack = ("Duplicate number in the Box")
                    
                
            }
        }
        }
        if(errorChack != ""){
            alert(errorChack)
            let checkError = "true"
            return checkError
        }
                    
    } catch (error) {
        console.error(error)
    }
       
}
