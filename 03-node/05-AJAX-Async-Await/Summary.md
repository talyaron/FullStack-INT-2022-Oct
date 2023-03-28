<!-- תחילת עבודה ויצירת קובץ השרת server.ts -->

import express from "express";  
const app = express();
const PORT = 3000;

app.get("/", (req, res) {
  res.send("hello world");
});

app.listen(PORT, (req,res)=>{
    console.log(`server run on port: http://localhost:${PORT}`))
})


<!--  -->