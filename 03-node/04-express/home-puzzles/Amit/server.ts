import express from "express";

const app = express();

app.use(express.static("./public"));


// app.get("/", mainRoute);
// function mainRoute(req:any, res:any){
//     return res.redirect("/portfolio.html");
// }


app.get('/file1', function (req: any, res: any) {
    return res.redirect('/project-1/instagram.html');
})



app.listen(3000, () => {
  console.log("server listen on port 3000");
});
