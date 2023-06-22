import './ErrorPage.scss'
import { Navigate } from 'react-router-dom'
import {useEffect , useState} from 'react'





const ErrorPage = () => {
    const [change , setChange] = useState(false)
useEffect(()=>{
    setTimeout(()=>{
        setChange(true)
    },3000)
},[change])

    return (
        <div>
        {change && (
          <Navigate to="/" replace={true} />
        )}
            <div className="container">
                <img src="/images/404Page.jpg" alt="404" />
            </div>
  

        </div>

    )
}

export default ErrorPage
