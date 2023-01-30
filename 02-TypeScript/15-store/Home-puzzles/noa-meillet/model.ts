class UserProfile{
    constructor(
        public name: string,
        public adress: string,
        public email: string,
        public dateOfBirth: string,
        public phonePrefix: number,
        public phoneNumber: number,
        public color: string,
        public profileImage: string
    ){}
}

const usersArr:UserProfile[]= [];