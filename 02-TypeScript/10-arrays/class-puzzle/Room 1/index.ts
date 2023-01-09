// class Devs {
//     constructor (private salary:number , private profession:string){
//     }
//     setSalary(number:number){this.salary = number}
//     setProfession(type:string){this.profession = type}
//     getprofession () {return this.profession}
//     getsalary(){return this.salary}
//     }
// const arryOfDevs:Devs[] = [] 
// const logTenDevs = () => {
//     for (let i = 0; arryOfDevs.length < 3; i++){
//         const salary = prompt (`whats your salary?`);
//         const typeOfPro = prompt (`what is your profession? (full-stack/devops/qa)`);
//         if (salary !== null && typeOfPro !== null){
//         const newDev = new Devs(parseInt(salary),typeOfPro);
//         arryOfDevs.push(newDev);
//         console.log(arryOfDevs)
//         }
//     }
// }
// logTenDevs()
// console.log(arryOfDevs)

// const avrgDevSalary = () => {
//     const arryQa = arryOfDevs.filter(dev => dev.getprofession() == "qa").map(a => a.getsalary()).reduce(
//         (accumulator, currentValue) => accumulator + currentValue,
//         0,);
//     const arryFs = arryOfDevs.filter(dev => dev.getprofession() == "full-stack")
//     const arryDo = arryOfDevs.filter(dev => dev.getprofession() == "devops")
    
// }

// 1) create array of Persons. each person has an age. calculate the average age in the array.
// 2) create an array of 10 devlopers. ask each devloper with prompt, what is her salary, and her perofession 
// (full-stack, devops, qa) (with prompt). then, calculate the average of each perofession 



