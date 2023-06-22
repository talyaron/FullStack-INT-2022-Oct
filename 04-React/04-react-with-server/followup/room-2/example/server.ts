import express from "express";
import cors from 'cors';
const app = express();

// app.use(cors({
//   credentials:true,
//   origin:"http://localhost:5173"
// }));

//static file
app.use(express.static('./client'));

interface Flower{
    img:string;
    name:string;
    
}

const flowers:Flower[] = [
    {img:"https://www.thespruce.com/thmb/c3znkzZgMeuvzBy4wH13jVllfUo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/plants-with-big-flowers-4138211-hero-b10becb169064cc4b3c7967adc1b22e1.jpg" ,
    name:"flower1"} ,
    {img:"https://www.1800flowers.com/blog/wp-content/uploads/2015/10/red-roses.jpg" ,
    name:"flower2"} ,
    {img:"https://www.folimg.com/kernel/imageload/?table=fol3_catalog_images&key1=1212_large_feature&key2=1212_feature&key3=404_large_feature" ,
    name:"flower3"} ,
    {img:"https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg" ,
    name:"flower4"} ,

]

app.get("/api/get-word",(req, res)=>{
    res.send({ok:true})
})

app.get("/api/get-flowers",(req, res)=>{
    res.send({ok:true , flowers})
})

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
