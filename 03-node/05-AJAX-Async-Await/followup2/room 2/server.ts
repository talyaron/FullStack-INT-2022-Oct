import express from "express";
const app= express();

app.use(express.json());

interface Bot{
    name:string,
    img:string 
}

const bots:Bot[]=[
    {
        name:"J-M",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhAwdq2y0xEktRHo-rtSn5w7FLuxIXLn_AA&usqp=CAU"
    },
    {
        name:"D-U",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhMCXUoL-8HULCFPFbNiCmbw2r-LWVIXNsw&usqp=CAU"
    },
    {
        name:"E-T",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT79byLfksM62GRGdcN94bU41I8nN25dL17mw&usqp=CAU"
    }
]

app.get("/api/get-bots", (req, res) => {
    try {
        res.send({ bots });
    } catch (error: any) {
        console.error(error);
        res.status(500).send({error: error.message});
    }
})
   
