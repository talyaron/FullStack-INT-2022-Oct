// const main = document.querySelector('.main')
const nameInput = document.getElementById('name')
const ageInput:HTMLElement  = document.getElementById('age')
const output = document.querySelector('.output')

let totalAge = 0
let totalPpl = 0

window.addEventListener('keydown', (e) => {
    if(e.key == 'Enter' && !nameInput.value == '' && !ageInput.value == ''){
        console.log('check')
        totalAge += parseInt(ageInput.value)
        totalPpl ++
        ageInput.value = ''
    }
})


// let nameOne = 'vladi'
// let nameTwo = 'itay'
// let ageOne = 33
// let ageTwo = 25

// let avrage = (ageOne + ageTwo) / 2

// let output = `The avrage age of ${nameOne} and ${nameTwo} is ${avrage}`

// console.log(output)