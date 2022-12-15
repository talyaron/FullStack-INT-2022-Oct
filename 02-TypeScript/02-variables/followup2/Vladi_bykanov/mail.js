
const incrementBtn = document.getElementById('increment-btn')
const amount = document.getElementById("count")
const resetBtn = document.getElementById("reset-btn")
let count = 0;

incrementBtn.addEventListener('click', () => {
    count ++
    amount.textContent = count
    console.log(count)
})

resetBtn.addEventListener('click', () => {
    count = 0
    amount.textContent = count
    console.log(count)
})