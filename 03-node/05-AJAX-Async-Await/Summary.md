<!-- סיכום החומר -->

<!-- תחילת עבודה ויצירת קובץ השרת server.ts -->

import express from "express";  
const app = express();
const PORT = 3000;

<!-- static file -->
app.use(express.static("./client"));
<!-- בעזרתו נוכל לקבל את כל הקבצים שבתיקיית client -->

<!--  ישיג לנו את המידע ל json-->
app.use(express.json());



app.get("/", (req, res) {
  res.send("hello world");
});

app.listen(PORT, (req,res) => {
    console.log(`server run on port: http://localhost:${PORT}`);
})

<!-- קריאת קובץ -->
import { readFile } from "node:fs";

readFile("./pwd.txt", 'utf8', (err, data) => {
  <!-- הפנייה לקובץ שנרצה לקרוא -->
   
   console.log(data);
   
});


<!--  -->
import { v4 } from 'uuid';

console.log("hello", v4());