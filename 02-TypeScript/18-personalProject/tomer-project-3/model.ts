class UserReview{

    constructor(
        
      public  name:string,
         public review:string,
        public stars:string,
    ){

    }
}

class Book{
    constructor(
        public name:string,
        public url:string,
        public price:string,
        public summary:string,

    ){

    }
}
const reviews: UserReview[]=[];
const books: Book[]=[]

books.push(new Book(`MASTER & APPRENTICE`,`https://images.penguinrandomhouse.com/cover/9780525619376`,`100`,`about star wars`))
books.push(new Book(`THE HIGH REPUBLIC: THE FALLEN STAR`,`https://cdn.waterstones.com/bookjackets/large/9781/5291/9781529150162.jpg`,`100`,`about star wars`))
books.push(new Book(`ATTACK OF THE CLONES`,`https://images.penguinrandomhouse.com/cover/9780345428820`,`100`,`about star wars`))

