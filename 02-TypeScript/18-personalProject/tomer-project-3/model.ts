class UserReview{
    constructor(
      public  name:string,
         public review:string,
        public stars:string
    ){

    }
}

class Book{
    constructor(
        public name:string,
        public price:string,
        public summary:string,

    ){

    }
}
const reviews: UserReview[ ]=[ ];
