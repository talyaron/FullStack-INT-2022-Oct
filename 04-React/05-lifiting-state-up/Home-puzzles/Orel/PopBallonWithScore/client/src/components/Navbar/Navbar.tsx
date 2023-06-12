import axios from 'axios'
import './Navbar.scss'

const Navbar = () => {
    function handleClickResetGame(){
        try {
                location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    async function handleResetScore(){
        try {
           const {data} = await axios.get("/api/balloons/reset-scores") 
           if(!data) throw new Error("no found Data DB")
           const {message} = data
            console.log(message)
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <nav className='navbar-container'>
        <ul className='navbar-container__nav'>
            <li className='navbar-container__list'>
                <button className='navbar-container__btn'>  
                    Start Game
                </button>
            </li>
            <li className='navbar-container__list'>
                <button className='navbar-container__btn' onClick={handleClickResetGame}>
                    Reset Game
                </button>
            </li>
            <li className='navbar-container__list'>
                <button className='navbar-container__btn' onClick={handleResetScore}>
                    Reset Score
                </button>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
