class book{
    uid:string;
    constructor(
        public picOfBook: string,
        public name:string,
        public summary:string,
    ){
        this.uid= uid()
    }
}
class UserReview{
    uid:string;
    constructor(
        public review:string,
        public stars:string,
    ){
        this.uid= uid()
    }

}

const books:book[]=[];
books.push(new book(`https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg`,`war zone`,`about war the in a zoon`));
books.push(new book(`https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg`,`war zone`,`about war the in a zoon`));
books.push(new book(`https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg`,`war zone`,`about war the in a zoon`));
books.push(new book(`https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg`,`war zone`,`about war the in a zoon`));
console.log(books)

const reviews:UserReview[]=[];