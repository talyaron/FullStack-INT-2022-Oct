import './App.css'
import Box from "./components/img"

const img:Array<string>=["https://www.spieltimes.com/wp-content/uploads/2023/04/b7d4c3fa-7794-466f-a96a-ecf9a611d960.jpg","https://www.themarysue.com/wp-content/uploads/2023/04/luffy-gear-5-one-piece-vol-104.jpg"]

function App() {
  return (
      <div>
      <h1> hello</h1>  
      {img.map(img=><Box text={img}/>)}
      </div>
  )
}

export default App
