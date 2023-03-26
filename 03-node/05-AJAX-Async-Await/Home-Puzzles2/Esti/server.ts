

import exprss from "express";
import path from "path";
// import v4 from 'uuid';
import { foodTips } from "./public/module";


const PORT = 3000;
const app = exprss();


app.use(exprss.static("./public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
  });

  app.get('/foodTips', (req, res) => {
    const jsonData = JSON.stringify(foodTips);
    res.send(jsonData);
  });

app.listen(PORT, () => {
    console.log(`Server lister on port: ${PORT}`);
})
