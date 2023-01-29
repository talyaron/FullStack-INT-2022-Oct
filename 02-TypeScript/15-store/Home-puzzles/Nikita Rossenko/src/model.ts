class userInput {
    constructor(
        public id: number,
        public name: string,
        public address: string,
        public email: string,
        public phone: number,
        public password: string,
        public color: string,
        public image: string
    ) {}
}


const usersInputArray:Array<userInput> = []