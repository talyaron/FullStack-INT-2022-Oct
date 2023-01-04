interface movie{
    Name:string
    Price:number
    Who_rented:string
}
interface user{
    name:string
    pnumber:number
}

let video:string | null = prompt("What video would you like to rent? We have: 1.Avatar , 2.kick-ass");

if (video == "avatar")
{
    const avatar = 40; 
    console.log(`You choose Avatar and it cost ${avatar}$`);
}
else if (video == "kick-ass")
{
    const kickass = 20;
    console.log(`you choose Kick-Ass and it cost ${kickass}$`)
}