class UserDetail{
    uid:string
    constructor(public fullName:string, public email:string,public url:string,public password:string,public color:string){
        this.uid=uid();
    }
}
const arrayOfUsers:UserDetail[]=[]