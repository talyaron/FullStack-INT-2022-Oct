import express from "express";
const app = express()
const PORT = 3000;

const numbers = [1, 2, 3, 4, 5] 
app.get('/', (req, res) => {
    res.send('working')
  })

  app.listen(PORT, ()=>{
    console.log(`port listen at: ${PORT}`)
})  
console.log(numbers)
