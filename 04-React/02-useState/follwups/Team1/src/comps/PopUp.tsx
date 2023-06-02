import { FC } from 'react'
import "./popUp.scss"

interface popUpProps {
    text:string
}

const PopUp: FC<popUpProps> = ({text}) => {
  return (
    <div className='popUpContainer'>{text}</div>
  )
}

export default PopUp