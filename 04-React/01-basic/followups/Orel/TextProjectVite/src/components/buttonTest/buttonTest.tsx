import "./buttonTest.css"
import { FC } from "react"

interface BtnProps {
    text: string
}



const ButtonTest:FC<BtnProps> = ({ text }) => {
    return (
        <button>
            {text}
        </button>
    )
}

export default ButtonTest