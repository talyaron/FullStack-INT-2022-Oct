class user {
  uid:string;
  constructor(
    public name: string,
    public address: string,
    public email: string,
    public phone: number,
    public password: string,
    public favoriteColor: string
  ){
    this.uid = uid();
  }
  }
const userinfo: user[] = [];
console.log(userinfo);
