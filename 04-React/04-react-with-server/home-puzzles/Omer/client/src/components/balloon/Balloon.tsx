import {FC} from 'react'
import CSS from 'csstype';

interface BalloonProp{
    width:string,
    height:string,
    color:string
}

export const BalloonComp:FC<BalloonProp> = ({width,height,color}) => {
    console.log({width});
    

    const myStyle:CSS.Properties = {
        width:width,
        height:height,
        backgroundColor: color,
        borderRadius: '50%'
    }
  return (
    <div style={myStyle}></div>
  )
}
