import './TextLinear.scss'
import { FC } from 'react'

interface FontSizePromps{
text:string
}

const TextLinear:FC<FontSizePromps> = ({text}) => {

    return(
        <div className='container-linear'>
            <h5  className='container-linear__text'>{text}</h5>
        </div>
    )
}


export default TextLinear