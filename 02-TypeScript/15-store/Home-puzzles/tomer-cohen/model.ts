class user {
  constructor(
    public name: string,
    public address: string,
    public email: string,
    public phone: number,
    // public password: string,
    public favoriteColor: string
  ){
  }
  }
const userinfo: user[] = [];
// userinfo.push(
//   new user(
//     `tomer`,
//     `mivtza kilshon 12`,
//     `tomer6633@gmail.com`,
//     506668817,
//     `tomer1`,
//     `blue`
//   )
// );
console.log(userinfo);
