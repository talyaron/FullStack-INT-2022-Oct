import './App.css'
import Img from './components/img/Img'


const images:Array<string> = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-N4Qo8Ekk2WIQmGpLEZSZekmeAiQJfGt3v-A-IA9iB4TuyS3v3HBSiaYt81IW11sObFY&usqp=CAU","https://w0.peakpx.com/wallpaper/200/798/HD-wallpaper-summer-beach-cool-fresh-nature-nice-scene-sea-view.jpg", "https://e0.pxfuel.com/wallpapers/900/358/desktop-wallpaper-sky-sunset-beautiful-scenery-road-800-x-1280.jpg"]

function App() {
 //jsx
  return (
   <div>
    <h1>Instagram</h1>
    {images.map(name=>
    <Img text={name}/>)}
   </div>
  )
}

export default App;
