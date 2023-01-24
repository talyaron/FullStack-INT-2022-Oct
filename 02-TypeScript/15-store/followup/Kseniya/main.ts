class User {
  constructor(
    public email: string,
    public firstName: string,
    public lastName: string,
    public password: string,
    public age: number,
    public gender: string
  ) {}
}
const users: User[] = [];

// create a user to the store
const createUser = (user) => {
  try {
    user?.preventDefault();

    const email = user.target.elements.email.value;
    const firstName = user.target.elements.firstName.value;
    const lastName = user.target.elements.lastName.value;
    const password = user.target.elements.password.value;
    const age = user.target.elements.age.valueAsNumber;
    const gender = user.target.elements.genderCategory.value;

    users.push(new User(email, firstName, lastName, password, age, gender));
    console.log(users);
    user.target.reset();
  } catch (error) {
    console.error(error);
  }
};

// users.push(
//   new user("example@gmail.com", "Israel", "Israeli", "isr23451", 34, "Male")
// );
// console.log(users);

// interface IUser {
//   email: string;
//   firstName: string;
//   lastName: string;
//   password: string;
//   age: number;
//   gender: string;
// }
