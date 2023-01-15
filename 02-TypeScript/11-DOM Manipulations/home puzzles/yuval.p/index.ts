class product {
    public constructor(
        public name:string,
        public department:string,
        public type:string,
        public price:number
    ){}
}

const cbr500 = new product("CBR500", "Motorcycle", "Honda", 80);
const cbr1000 = new product("CBR1000", "Motorcycle", "Honda", 200);
const cbr250 = new product("CBR250", "Motorcycle", "Honda", 30);
const ninja650 = new product("NINJA650", "Motorcycle", "kawasaki", 80);
const ninja1000 = new product("NINJA1000", "Motorcycle", "kawasaki", 200);
const ninja250 = new product("NINJA250", "Motorcycle", "kawasaki", 30);

const PartushMotors:product[] = [
    cbr1000,cbr250,cbr500,ninja1000,ninja650,ninja250,
];

let field:any = document.querySelector(".items");
let li = Array.from(field.children);
let select = document.getElementById("select");
let ar = [];
for(let i of li){
    const last = i.lastElementChild;
    const x = last.textContent.trim();
    const y = number(x.substring(1));
    i.setAttribute("data-price", y);
    ar.push(i);
}
select.onchange = sortingValue;
function sortingValue(){
    if(this.value == "Defualt"){
        while(field.firstchild){
            field.removeChild(field.firstChild);
        }
        field.append(...ar);

    }
    if(this.value === "LowToHigh")
    {
        sortElem(field,li,true);
    }
    if(this.value === "HighToLow")
    {
        sortElem(field,li,false);
    }
}
function sortElem(field,li,asc)
{
    let dm, sortLi;
    dm = asc ? 1 : -1;
    sortLi = li.sort((a,b)=>{
        const ax = a.getAttribute("data-price");
        const bx = b.getAttribute("data-price");
        return ax>bx? (1*dm) : (-1*dm);

    }
    );
    while(field,firstChild)
    {
        field.removeChild(field.firstChild);
    }
    field.append(...sortLi);
}







