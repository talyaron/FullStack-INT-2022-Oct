

// const storgUser = localStorage.getItem("user", users[1].uid)

// drawBox()

const getInfo = localStorage.getItem("user")
let tmpArr:any = [];
let getInfoStr:any = [];

if(getInfo != null){
    getInfoStr = getInfo.split('-')
    console.log(getInfoStr);
    
        if (getInfoStr[1] == "easy") tmpArr = [...easy]
        if (getInfoStr[1] == "middum") tmpArr = [...middum]
        if (getInfoStr[1] == "difficalt") tmpArr = [...difficult]
}

    const element = document.querySelector("h2") as HTMLElement;
    element.innerHTML = `${getInfoStr[0]} Welcome to ${getInfoStr[1]} game` ;
    console.log(tmpArr);
    

drawBox()

playInGrid()

