import {FC} from 'react'

export interface UserProp{
    name:string,
    age:number
}

export const User:FC<UserProp> = ({name,age}) => {
  return (
    <div className='user'>
        <h2>Name: {name}</h2>
        <h4>Age: {age}</h4>
    </div>
  )
}

