import { FC } from "react"

interface NavProps{
    img:string
}


const Nav:FC<NavProps> = ({img}) => {
  return (
    <div>Nav

        <img src={img} alt="some image" />
    </div>
  )
}

export default Nav