import express from "express";
import cors from 'cors';
const app = express();

// app.use(cors({
//   credentials:true,
//   origin:"http://localhost:5173"
// }));

//static file
app.use(express.static('./client'));

interface Prime{
    img:string;
    name?:string;
    info?:string;
}

const primeMinisters:Prime[] = [

  {img:"https://shorturl.at/dATU4", 
   name:"Bibi",
   info:"Benjamin Netanyahu, Benjamin also spelled Binyamin, byname Bibi, (born October 21, 1949, Tel Aviv [now Tel Aviv–Yafo], Israel), Israeli politician and diplomat who served as his country’s prime minister three times (1996–99, 2009–21, and 2022– ) and was the longest-serving prime minister since Israel’s independence."
  },

   {img:"https://shorturl.at/wTU19",
    name:"Golda",
    info:"Israeli politician Golda Meir and her family immigrated to Milwaukee, Wisconsin, where she became an active Zionist. From the 1940s through the 1960s, Meir worked for the Israeli government in various roles including as Minister of Labor and Foreign Minister. In 1969, party factions appointed her as the country’s fourth Prime Minister, thereby also becoming the world’s third woman with that title. She died in Jerusalem on December 8, 1978"
},

  {img:"https://shorturl.at/mtOR5",
   name:"Barak",
   info:"Ehud Barak, original name Ehud Brog, (born February 12, 1942, Mishmar HaSharon kibbutz, Palestine [now in northern Israel]), Israeli general and politician who was prime minister of Israel from 1999 to 2001.",
}

]

app.get("/api/get-flowers",(req, res)=>{
    res.send({ok:true})
})

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
