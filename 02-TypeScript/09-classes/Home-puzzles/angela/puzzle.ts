class celeb {
    name:string;
    genre:string;
    tiktokAccount:string;
    tiktokFollowerCount(){
        
    }
    instagramAccount:string;
    instagramFollowerCount(max:number){
        return Math.floor(Math.random()*max)
    };
    constructor(name:string,genre:string,tiktokAccount:string,instagramAccount:string){
        this.name=name;
        this.genre=genre;
        this.tiktokAccount=tiktokAccount;
        this.instagramAccount=instagramAccount;
        

    }
}
const bradPitt = new celeb ("Brad Pitt","actor","none",'none')