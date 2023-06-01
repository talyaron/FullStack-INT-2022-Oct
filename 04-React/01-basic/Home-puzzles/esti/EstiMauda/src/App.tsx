
import './App.css'
import Post from './components/Post';

const posts :  { title:string, srcImage:string, text:string, authorName:string} [] =[
  {
    title: "Pomeranian",
    srcImage: "https://www.thesprucepets.com/thmb/NV-_XjD92bymEFrPKV_cH0AUNGI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-694087095-592040b2e55d44afb410367c9c6267b9.jpg",
    text: "This spitz breed is descended from sled dogs in Iceland and Lapland and is distantly related to big Malamutes and Samoyeds. Queen Victoria had Poms in the late 1800s, which helped them gain popularity in Europe and beyond. If you’re considering a small playful dog, put Pomeranians on your shortlist. Poms are fun-loving, affectionate pups in a small, fluffy package, although they can have a stubborn streak.",
    authorName: "fani", 
   
  },
  {
    title: "Labrador Retriever",
    srcImage: "https://www.thesprucepets.com/thmb/r6YbZvoE_VlZmRJX5tJBAoczD6M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-553146857-57d0b1115f9b5829f41cac3f.jpg",
    text: "Labrador retrievers are large, goofy dogs that love anything to do with playing. They often love a game of fetch and splashing around in the water. The breed is originally from Newfoundland, bred from a water dog, and was eventually brought to England to work as waterfowl retrievers. They were recognized by the American Kennel Club in 1917, quickly stealing the hearts of dog lovers across the nation. Labs are known for being sociable and even-tempered and are a top choice for a family pet.",
    authorName: "Yarden", 
   
  },
  {
    title: "Labrador Retriever",
    srcImage: "https://www.thesprucepets.com/thmb/r6YbZvoE_VlZmRJX5tJBAoczD6M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-553146857-57d0b1115f9b5829f41cac3f.jpg",
    text: "Labrador retrievers are large, goofy dogs that love anything to do with playing. They often love a game of fetch and splashing around in the water. The breed is originally from Newfoundland, bred from a water dog, and was eventually brought to England to work as waterfowl retrievers. They were recognized by the American Kennel Club in 1917, quickly stealing the hearts of dog lovers across the nation. Labs are known for being sociable and even-tempered and are a top choice for a family pet.",
    authorName: "Liron", 
   
  },
  {
    title: "Boxer",
    srcImage: "https://www.thesprucepets.com/thmb/uUioyeBmOipT2-U0hg3TiQu11bI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-839066142-12caeb931d904d60a2afee0f5dfbc5b5.jpg",
    text: "Muscular and athletic, boxers have a storied history as fighting dogs but have also been lauded for their bravery, intelligence, and loyalty. Working as hunting or guarding dogs, these intelligent canines were also used as couriers. Boxers are a widely sought-after family pet. They love to play, especially with their family. Their generally happy disposition and energetic personality make them a good choice for an active home. These rambunctious dogs are not the best suited for a home with infants or toddlers since they can get overexcited sometimes and knock down new walkers.",
    authorName: "Zohar", 
   
  },
  {
    title: "Golden Retriever",
    srcImage: "https://www.thesprucepets.com/thmb/sTW3RQM3Hxrw9p-x65D8Qq8UcsY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1195429224-387a78a3104147ea80bdd91205f205c2.jpg",
    text: "No breed probably typifies an American family dog more than a golden retriever. Big, beautiful golden retrievers have long, flowing blonde or honey-colored fur. They are loyal and intelligent but also goofy and lively. Similar to Labs, they enjoy water play, fetch, and accompanying you everywhere. They are great companions for humans of all ages and get along with most other animals.",
    authorName: "Dor", 
   
  },
  
]




function App() {
  return (
      <div>
        <h1>Instegram</h1>
        {posts.map(post=><Post title={post.title} srcImage={post.srcImage} text={post.text} authorName={post.authorName}/> )}
    </div>
  )
}

export default App
