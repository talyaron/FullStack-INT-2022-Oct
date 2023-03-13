class User {
  constructor(public userName: string, public password: string) {}
}

//data
const danCohen = new User("danCohen", "danSushiBar147");
const yossiZaban = new User("yossi123", "yossiSushiBar147");

//array for all the users
const usersList: User[] = [danCohen, yossiZaban];
