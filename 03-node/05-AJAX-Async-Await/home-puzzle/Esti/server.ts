
import express from "express";
import path from "path";
import dog from "dog"

const app = express();
const PORT = 3000;

app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
  });

  
app.listen(PORT, () => {
    console.log(`Server lister on port: ${PORT}`);
})