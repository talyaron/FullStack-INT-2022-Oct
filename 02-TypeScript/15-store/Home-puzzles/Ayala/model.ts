class Titel {
    // uid: string;
    constructor(
        public name: string,
        public city: string,
        public email: string,
        public phone: number,
        public password: number,
        public color: string,
        
    ) {
        // this.uid = uid();
    }

}
const titel: Titel[] = [];
titel.push(new Titel('ayala', 'jerusalem', 'example@example.com', +1234567890, 12345, "rgb(255, 0, 0)"))

console.log(titel)