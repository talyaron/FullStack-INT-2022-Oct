class User {
  constructor(
    private gender: string,
    private firstName: string,
    private lastName: string,
    private password: string,
    private userName: string,
    private dateOfBirth: string,
    private phoneNumber: string,
    private location: string,
    private profileImage: string
  ) {}
  getGender() {
    return this.gender;
  }
  getFirstName() {
    return this.firstName;
  }
  getLastName() {
    return this.lastName;
  }
  getPassword() {
    return this.password;
  }
  getUserName() {
    return this.userName;
  }
  getDOB() {
    return this.dateOfBirth;
  }
  getPhoneNum() {
    return this.phoneNumber;
  }
  getLocation() {
    return this.location;
  }
  getProfileImg() {
    return this.profileImage;
  }
}


const userList: User[] = [];