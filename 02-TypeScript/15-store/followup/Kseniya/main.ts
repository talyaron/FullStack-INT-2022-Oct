interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  age: number;
  gender: string;
}

const users: IUser[] = [];

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

    const newUser: IUser = {email,firstName,lastName,password,age,gender}
    users.push(newUser);
    console.log(users);
    user.target.reset();
  } catch (error) {
    console.error(error);
  }
};


