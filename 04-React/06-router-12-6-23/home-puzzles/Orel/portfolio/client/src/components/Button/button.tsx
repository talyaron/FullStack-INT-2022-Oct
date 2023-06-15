
interface ButtonProps{
    text:string
}

const Button:React.FC<ButtonProps> = ({text}) => {
  return (
    <button 
    className='text-background-color bg-main-color  rounded p-2 mt-2 hover:scale-105 active:scale-100'  >
       {text}

    </button>

  )
}

export default Button
