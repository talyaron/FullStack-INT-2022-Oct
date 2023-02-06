class Buyer{
    cart:Product[] = [];
    owned:Product[] = [];
    constructor(public id:string, public name:string){}
}

class Product{
    buyer:Buyer
}

class Cart{
    created:Date;
    update:Date;
    purchsed:Date;
    constructor(public buyer:Buyer){
        this.created = new Date();
    }
}

const productsInStore:Product[] = [];

//collections
const carts: Cart[] = [];//store all users that has products in a cart.
const buyers:Buyer[] = [];

//give all the new carts from last 24 hours
const lastDay = new Date().getTime()- 24*60*60*1000;
const lastDayCarts = carts.filter(cart=>cart.created.getTime() >  lastDay);

//give me the cart of user with spesific ID
const id = '3423534'
const buyerCart:Cart| undefined= carts.find(cart=>cart.buyer.id === id)
