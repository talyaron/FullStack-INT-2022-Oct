import { Link } from "react-router-dom"
import './buttonAni.scss'
interface ButtonAniProps{
    text:string,
    url:string
}

const ButtonAni:React.FC<ButtonAniProps> = ({text , url}) => {
  return (
    <div className="container-buttonAni">
      <Link className="container-buttonAni__link" to={url}>{text}</Link>
    </div>
  )
}

export default ButtonAni
