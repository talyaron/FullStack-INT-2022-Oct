class UserData  {
    public uid: string
    constructor(
        public name: string,
        public adress: string,
        public email: string,
        public phone: number,
        public password: string,
        public color: string,
        public image?:string
    ){
        this.uid
    }
}
const users:UserData[] = [] 
const usersLocalImg:UserData[]=[]
const usersData:UserData[]=[]

console.log(UserData);