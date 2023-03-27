import express from "express";
const app= express();

app.use(express.json());

interface New{
    heading:string,
    content: string,
    img:string 
}

const news:New[]=[
    {
        heading:"aaaaaa",
        content: "lorem ipsum jfnuvnfbvgfbvn jnvuirgnv jhviugnvb ugnb guvnkugv unvjf vnfvj fuivvnr vurv giuv",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhAwdq2y0xEktRHo-rtSn5w7FLuxIXLn_AA&usqp=CAU"
    },
    {
        heading:"bbbbb",
        content:"lorem ipsum jfnuvnfbvgfbvn jnvuirgnv jhviugnvb ugnb guvnkugv unvjf vnfvj fuivvnr vurv giuv",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhAwdq2y0xEktRHo-rtSn5w7FLuxIXLn_AA&usqp=CAU"
    },
    {
        heading:"E-T",
        content: "lorem ipsum jfnuvnfbvgfbvn jnvuirgnv jhviugnvb ugnb guvnkugv unvjf vnfvj fuivvnr vurv giuv",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT79byLfksM62GRGdcN94bU41I8nN25dL17mw&usqp=CAU"
       
    }
]

app.get("/api/get-news", (req, res) => {
    try {
        res.send({ news });
    } catch (error: any) {
        console.error(error);
        res.status(500).send({error: error.message});
    }
})

app.post("/api/add-news", (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        news.push(data);
        res.status(201).send({ ok: true });
    
      } catch (error: any) {
        console.error(error);
        res.status(500).send({ error: error.message });
      }
    });

app.use(express.static("./public"));
app.listen(4000, () => {
    console.log ("server listen on port 4000")
});
   
