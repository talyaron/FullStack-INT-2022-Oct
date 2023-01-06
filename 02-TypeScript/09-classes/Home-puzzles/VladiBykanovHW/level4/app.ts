class Dates {
    date: {};

    constructor(date: {}){
        this.date = date;
    }

    dateFormat(){
        const formatedDate = JSON.stringify(this.date).replace(/[A-Z"]/g, ' ').trim().split(' ');
        // console.log(formatedDate)
        return `Date Entered: ${formatedDate[0]} at ${formatedDate[1]}`
    }

    timePassed(){
        console.log(JSON.stringify(this.date).slice(1, 11).split(''));
        // .toJSON().slice(11, 23)
    }
}

const aDate = new Date();
const newDate = new Dates(aDate);

console.log(JSON.stringify(newDate).slice(0,10));
console.log(aDate);
console.log(newDate.timePassed());
// console.log(newDate.dateFormat());

// console.log(JSON.stringify(aDate));

// console.log(JSON.stringify(aDate).split('"').join('').split('T'));



// const newDate = new Dates(aDate);