const nameInput = document.getElementById<HTMLInputElement>('name')
const ageInput  = document.getElementById('salary')
const calculateBtn = document.querySelector('#calculateBtn')
const saveBtn = document.querySelector('#saveBtn')
const resetBtn = document.querySelector('#resetBtn')
const makeListBtn = document.querySelector('#makeListBtn')
const output = document.querySelector('.output')
const listOutput: HTMLElement | null = document.querySelector('#listOutput')
const main = document.querySelector('.main')


const highestPayingJobs = {
    'Cardiologist': 353970,
    'Anesthesiologist': 331190,
    'Oral and Maxillofacial Surgeon': 311460,
    'Emergency Medicine Physician': 310640,
    'Orthopedic Surgeon, Except Pediatric': 306220,
    'Dermatologist': 302740,
    'Radiologist': 301720,
    'Surgeon (All Other)': 297800,
    'Obstetrician-Gynecologist': 296210,
    'Pediatric Surgeon': 290310
}

// console.log((Object.values(highestPayingJobs).reduce((a,b) => a + b, 0)) / 10)

const totalIncome = Object.values(highestPayingJobs).reduce((a,b) => a + b, 0)
const jobTitles = Object.keys(highestPayingJobs).join(', ')
const avrageOfIncome = totalIncome / Object.entries(highestPayingJobs).length

const text: string = `The highest 10 paying jobs in the US are: ${jobTitles}. And their average income is ${avrageOfIncome}$ a year`

if (listOutput != null) listOutput.textContent = text



makeListBtn?.addEventListener('click', () => {
    main.style.transform = 'translateY(0)'
})

let salaryArr = []
let namesArr = []
let totalPpl = 0

saveBtn?.addEventListener('click', () => {
    if(nameInput?.value == '' || ageInput.value == ''){
        ageInput.value = ''
        nameInput.value = ''
        return output?.textContent = 'please provide full data'
    }
    salaryArr.push(parseInt(ageInput.value))
    namesArr.push(nameInput.value)
    console.log(salaryArr)
    console.log(namesArr)
    totalPpl ++
    ageInput.value = ''
    nameInput.value = ''
})

calculateBtn?.addEventListener('click', () => {
    if (salaryArr.length == 0 || namesArr.length < 0){
        ageInput.value = ''
        nameInput.value = ''
        return output?.textContent = 'No Date Entered'
    } 
    else if (salaryArr.length < 3 || namesArr.length < 3){
        return output?.textContent = 'please provide at least 3 inputs'
    }
    const fullSum = salaryArr.reduce((a, b) => a + b, 0)
    const textOutput = `The avrage salaries of ${namesArr.join(', ')} is ${fullSum / totalPpl}`

    output?.textContent = textOutput
})

resetBtn?.addEventListener('click', () => {
    output?.textContent = 'Cleaned'

    if (salaryArr.length == 0 || namesArr.length == 0){
        ageInput.value = ''
        nameInput.value = ''
        return
    }

    salaryArr = []
    namesArr = []
})

