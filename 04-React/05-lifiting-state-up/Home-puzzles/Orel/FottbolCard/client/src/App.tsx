import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import './App.scss'
function App() {
  return (
<section className='main-container'>
    <Navbar/>
    <div className='main-container__game-board'>
    <Card/>
    </div>
</section>
  )
}

export default App
