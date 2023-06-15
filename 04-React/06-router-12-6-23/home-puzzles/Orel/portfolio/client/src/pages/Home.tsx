import 'animate.css';
import { AiOutlineArrowDown } from 'react-icons/ai'

import './Home.scss'
import Button from '../components/Button/button'
interface HomePrompt {
  name: string,
  subtitle: string,
  imgSrc: string
}


const Home: React.FC<HomePrompt> = ({ name, subtitle, imgSrc }) => {

  return (
    <section
      className='
      w-100vw
      mt-4
       p-3 
       min-h-home	
     flex 
     justify-center
      align-middle
       flex-col 
     lg:flex-row 
      items-center'>
      <div className='mb-7 space-y-5 font-bold'>
        <h2 className=' text-5xl '>
          Hello Im
          <span className='text-main-color ml-2  '>
            {name}
          </span>
        </h2>
        <p className='text-3xl'> {subtitle} </p>
        <Button text=" Click For More.." />
      </div>
      <div>
        <img src={imgSrc} />
      </div>
      <div className=' animate-bounce cursor-pointer absolute left-7 bottom-0 text-3xl pointer text-main-color' >
        <AiOutlineArrowDown />
      </div>
    </section>
  )
}

export default Home
