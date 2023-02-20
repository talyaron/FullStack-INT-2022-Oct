interface Video {
    tital:string;
    sn:string;
    price:number;
    toNis:Function;
}

const xMxan: Video = {
    tital: "x-men",
    sn: "cscscscscdscfevg",
    price:10,
    toNis: function(){
        console.dir(this);
        return this.price * 3.56;
    },
};


console.log(xMxan.toNis());