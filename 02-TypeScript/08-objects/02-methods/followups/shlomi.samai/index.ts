interface VideoInter {
    title:string;
    year:number;
    price:number;
    toShekels:Function;
}

const lorem3:VideoInter= {
    title:"lorem3",
    year:1990,
    price:100,
    toShekels:function() {
        return this.price*3.5
        console.dir(this.price*3.5)
    },

}


console.log(lorem3.toShekels())

