class Celeb {
  name: string;
  genre: string;
  tiktok: string;
  insta: string;
  numberFollowers: number;
  constructor(
    name: string,
    genre: string,
    tiktok: string,
    insta: string,
    numberFollowers: number
  ) {
    this.name = name;
    this.genre = genre;
    this.tiktok = tiktok;
    this.insta = insta;
    this.numberFollowers = numberFollowers;
  }

  setNumFollowers(number: number) {
    return (this.numberFollowers = number);
  }

  getNumFollowers() {
    return this.numberFollowers;
  }
}

const kendalljenner = new Celeb(
  `kendall jenner`,
  `model`,
  `kendalljenner`,
  `kendalljenner`,
  269000000
);

const tomer = new Celeb("Tomer", "Male", "TomerTiktok", "tomerInsta", 1000000);
const messi = new Celeb(`messi`, `male`, `leomessi`, `leomessi`, 460000000);
const r9 = new Celeb(`ronaldo`, `male`, `r9`, `r9`, 11000000);

console.log(tomer);
console.dir(kendalljenner);
console.dir(messi);
console.dir(r9);

const sortby = [tomer, messi, kendalljenner, r9];
const lol = [tomer, kendalljenner, r9];

console.log(sortby[0].numberFollowers);

function sortfollowers(arry) {
  let mostfollowers = 0;
  let celebrty;
  for (let i = 0; i < arry.length; i++) {
    if (arry[i].numberFollowers > mostfollowers) {
      mostfollowers = arry[i].numberFollowers;
      celebrty = arry[i].name;
    }
  }
  return celebrty;
}

console.log(sortfollowers(sortby));
console.log(sortfollowers(lol));
