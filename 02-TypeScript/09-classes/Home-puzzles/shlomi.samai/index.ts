class Celeb {
    name:string;
    genre: string;
    tiktokAccount:number;
    instagramAccount:number;
    numberOfFollowers:number; 
  
  
    constructor (name:string,genre:string,tiktokAccount:number,instagramAccount:number,numberOfFollowers:number){
      this.name=name;
      this.genre=genre;
      this.tiktokAccount=tiktokAccount;
      this.instagramAccount=instagramAccount;
      this.numberOfFollowers=numberOfFollowers;
    }
    getFollowers() {
      console.log(this.numberOfFollowers)
      return this.numberOfFollowers
    }
    serFollowers(newFolloers:number){
      this.numberOfFollowers=newFolloers;
      console.log(this.numberOfFollowers)
    }
  
  }
  
  const brad= new Celeb("Brad","Action",123,456,789)
  const james= new Celeb("james","Drama",741,5852,963)
  const bill= new Celeb("bill","PF",321654,456789,789)
  const joan= new Celeb("joan","horror",962156,468,8742)
  
  brad.getFollowers()
  brad.serFollowers(1000000)
  
  const celebsArray:Celeb[]=[brad,james,bill,joan]
  
  function sortArray(array:Celeb[]):number{
    let i=0;
    let newArray:number[]=[];
    for(i=0;i<=array.length-1;i++){
      newArray[i]=array[i].numberOfFollowers
    }
    const sortedArray:number[]= newArray.sort(function(a, b){return b-a});
    console.log(sortedArray)
    return 7
  }
  
  console.log(sortArray(celebsArray))
  
  
  
  