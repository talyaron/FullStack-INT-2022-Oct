import { FC } from 'react'

interface boxProp{
    color:string
}

export const Box:FC<boxProp> = ({color}) => {
  return (
    <div>{color}</div>
  )
}
