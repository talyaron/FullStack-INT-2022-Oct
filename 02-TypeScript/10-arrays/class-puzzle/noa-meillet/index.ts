/*
1) create array of Persons. each person has an age. calculate the average age in the array.
2) create an array of 10 devlopers. ask each devloper with prompt, what is her salary, and her perofession (full-stack, devops, qa) (with prompt). then, calculate the average of each perofession */

class Developer {
  public constructor(
    public name: string,
    public profession?: string,
    public salary?: number
  ) {}
}

const noa = new Developer("Noa");
const amit = new Developer("Amit");
const uriel = new Developer("Uriel");
const tomer = new Developer("Tomer");
const dan = new Developer("Dan");
const ruth = new Developer("Ruth");
const noam = new Developer("Noam");
const shira = new Developer("Shira");
const daniel = new Developer("Daniel");
const gershon = new Developer("Gershon");

const developersArr: Developer[] = [
  noa,
  amit,
  uriel,
  tomer,
  dan,
  ruth,
  noam,
  shira,
  daniel,
  gershon,
];
console.log(developersArr.length);
getProfessionAndSalary(developersArr);
console.log(developersArr);
salaryAverage(developersArr);

function getProfessionAndSalary(developersArr: Developer[]) {
  try {
    let getFromUser;
    for (let i = 0; i < developersArr.length; i++) {
      while (!getFromUser) {
        getFromUser = prompt(`${developersArr[i].name} enter your profession:`);
      }
      developersArr[i].profession = getFromUser;
      getFromUser=null;
      while (!getFromUser) {
        getFromUser = prompt(`${developersArr[i].name} enter your salary:`);
      }
      developersArr[i].salary = parseInt(getFromUser);
      getFromUser=null;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
}

function salaryAverage (developersArr:Developer[]){
  try {
    const fullstackDevelopers = developersArr.filter(developer => developer.profession === "fullstack");
    const sumFS = fullstackDevelopers.reduce((sum, current) => sum + current.salary, 0);
    console.log (`the average salary of fullstack developper is ${sumFS/fullstackDevelopers.length}`);

    const qaDevelopers = developersArr.filter(developer => developer.profession === "qa");
    const sumQA = qaDevelopers.reduce((sum, current) => sum + current.salary, 0);
    console.log (`the average salary of qa developper is ${sumQA/qaDevelopers.length}`);

    const devopsDevelopers = developersArr.filter(developer => developer.profession === "devops");
    const sumDevops = devopsDevelopers.reduce((sum, current) => sum + current.salary, 0);
    console.log (`the average salary of devops developper is ${sumDevops/devopsDevelopers.length}`);

  } catch (error) {
    console.error(error);
    return error;
  }
}


