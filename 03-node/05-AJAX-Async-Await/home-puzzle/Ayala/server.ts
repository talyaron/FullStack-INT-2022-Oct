import express from "express";
const app = express();


app.use(express.static("./client"));


const image = [
  
  'images1.jpg',
  "images2.jpg",
  "images3.jpg",
  "images4.jpg",
  "images5.jpg",
  "images6.jpg",
  "images7.jpg",
];



app.get("/random-image", (req: any, res: any) => {
  setTimeout(() => {
    res.send({ images: Math.floor(Math.random() * image.length) });
    
  });
});





// app.get("/random-image", (req, res) => {
//   const randomIndex = Math.floor(Math.random() * image.length);
//   const randomImageUrl = image[randomIndex];
//   res.json({ imageUrl: randomImageUrl });
//   // res.send({ imageUrl: Math.round(Math.random() * image.length) });
// });



app.listen(3000, () => {
  console.log("Server listening on port 3000");
});


