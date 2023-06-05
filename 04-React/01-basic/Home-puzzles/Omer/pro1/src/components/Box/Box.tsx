import { FC } from "react"
import "./box.css"
interface boxProps {
    header:string;
    body:string;
    auther:string;
}

const box:FC<boxProps> = ({header,body,auther}) => {
  return (
    <div className="box">
        <h2>{header}</h2>
        <p>{body}</p>
        <h5>{auther}</h5>
    </div>
  )
}

export default box

