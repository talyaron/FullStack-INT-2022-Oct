import './Alert.scss'
interface Message{
    message:string,
    styles:object,
    srcAngry:string
}

const Alert:React.FC<Message> = ({message , styles , srcAngry}) => {
  return (
<div style={styles} className='alert-container'>
<h1  className="alert-container__alert-message">{message} </h1>
<img src={srcAngry} className='alert-container__img' />
</div>
  )
}

export default Alert
