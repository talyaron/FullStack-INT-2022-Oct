// const main = document.querySelector('.main')
const nameInput = document.getElementById('name')
const ageInput  = document.getElementById('salary')
const calculateBtn = document.querySelector('#calculateBtn')
const saveBtn = document.querySelector('#saveBtn')
const resetBtn = document.querySelector('#resetBtn')
const output = document.querySelector('.output')

let salaryArr = []
let namesArr = []
let totalPpl = 0

saveBtn?.addEventListener('click', () => {
    if(nameInput.value == '' || ageInput.value == ''){
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

