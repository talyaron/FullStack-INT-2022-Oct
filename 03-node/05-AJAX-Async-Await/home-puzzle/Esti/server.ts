
import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.static("./public"));

const text = fs.readFileSync("./public/textfile.txt", "utf8")
app.get("/esti", (req: any, res: any) => {
    res.send(text)
})

app.listen(PORT, () => {
    console.log(`Server lister on port: ${PORT}`);
})