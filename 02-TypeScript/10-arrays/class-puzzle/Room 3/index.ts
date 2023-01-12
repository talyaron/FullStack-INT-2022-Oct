class Developers {
    constructor(public name:string, public salary:number, public profession:string){}
}


function pushToArray(){
    const devsArray:Array<Developers> = [];
    while (devsArray.length < 6){

        let name = prompt("Please enter your name")
        let slaraySTR:string | null= prompt("Please enter your salaray")
        let profession = prompt("Please enter your Profession")

        if (name && slaraySTR && profession){
            let slaray = parseInt(slaraySTR);
            const dev = new Developers(name,slaray,profession)
            devsArray.push(dev)
        }
    }
    
    const allFullStackDevs: Developers[] = devsArray.filter(dev => dev.profession == "full-stack");
    const devopsDevs: Developers[] = devsArray.filter(dev => dev.profession == "devops");
    const qaDevs: Developers[] = devsArray.filter(dev => dev.profession == "qa");

    function devsAvg(arr:Array<Developers>){
        let sum:number = 0;

        for (let i = 0 ; i<arr.length ; i++){
            sum += arr[i].salary
        }
        return sum/arr.length;
    }
    const fullStackAvg = devsAvg(allFullStackDevs);
    const devopsAvg = devsAvg(devopsDevs);
    const qaAvg = devsAvg(qaDevs);

    
    console.log(`The average Salary of Full-stack: ${fullStackAvg}, devops: ${devopsAvg}, qa: ${qaAvg}`);

}

pushToArray();




// class Developers {
//     constructor(public name:string, public salary:number, public profession:string){}
// }


// function pushToArray(){
//     const devsArray:Array<Developers> = [];
//     while (devsArray.length < 6){

//         let name = prompt("Please enter your name")
//         let slaraySTR:string | null= prompt("Please enter your salaray")
//         let profession = prompt("Please enter your Profession")

//         if (name && slaraySTR && profession){
//             let slaray = parseInt(slaraySTR);
//             const dev = new Developers(name,slaray,profession)
//             devsArray.push(dev)
//         }
//     }
//     let fullStackSum:number = 0;
//     let devopsSum:number = 0;
//     let qaSum:number = 0;
//     let fullStackIndex:number = 0;
//     let devopsIndex:number = 0;
//     let qaIndex:number = 0;

//     devsArray.forEach(dev => {
//         if (dev.profession === "full-stack"){
//             fullStackSum += dev.salary;
//             fullStackIndex++;
//         }
//         if (dev.profession === "devops"){
//             devopsSum += dev.salary;
//             devopsIndex++;
//         }
//         if (dev.profession === "qa"){
//             qaSum += dev.salary;
//             qaIndex++;
//         }
//     })
//     const fullStackAvg = fullStackSum/fullStackIndex;
//     const devopsAvg = devopsSum/devopsIndex;
//     const qaAvg = qaSum/qaIndex;



//     console.log(`The average Salary of Full-stack: ${fullStackAvg}, devops: ${devopsAvg}, qa: ${qaAvg}`);
// }

// pushToArray();








