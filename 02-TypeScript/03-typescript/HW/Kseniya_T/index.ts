interface IDeveloper {
    name: string
    salary: number
}

let developers: IDeveloper[] = [
    {
        name: 'Tom',
        salary: 12000
    },
    {
        name: 'Adam',
        salary: 2000
    },
    {
        name: 'Shir',
        salary: 1000
    },
    {
        name: 'Anna',
        salary: 11000
    },
    {
        name: 'Mia',
        salary: 120
    },
    {
        name: 'Sarah',
        salary: 15000
    },
    {
        name: 'Moran',
        salary: 8000
    },
    {
        name: 'Helen',
        salary: 9000
    },
    {
        name: 'Becky',
        salary: 20000
    },
    {
        name: 'Shalom',
        salary: 39000
    }
]
 
const averageSalary = (developers: IDeveloper[]) :void => {
    let sum = 0
    developers.forEach((element) => {
        sum += element.salary
    })
    let averageSalary = sum / developers.length
    console.log(`The average salary of a developer is ${averageSalary}`)
}

const powerNumber = (num: number): void => {
    let power = Math.pow(num, 2)
    console.log(power)
}


const rootNumbers = (firstNum: number, secondNum: number): void => {
    let firstRoot = Math.sqrt(firstNum)
    let secondRoot = Math.sqrt(secondNum)
    console.log(`The square root of the numbers are ${firstRoot} and ${secondRoot}`)
}

averageSalary(developers)
powerNumber(5)
rootNumbers(9, 49)


