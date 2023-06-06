
import './App.css'

export interface Ballons{
   src:string;
}

function App() {
 try {
  const ballons:Ballons[] =[{src:"https://shorturl.at/bpFL5"},
                           {src:"https://shorturl.at/dnOS0"},
                           {src:"https://shorturl.at/oLSX5"},
                           {src:"https://shorturl.at/ghsO3"},
                           {src:"https://shorturl.at/aoEJ5"},
                           {src:"https://shorturl.at/prwEI"},
]
console.log(ballons)
 } catch (error) {
  console.error(error)
 } 


  return (
    <div>
      
    </div>
  )
}

export default App
