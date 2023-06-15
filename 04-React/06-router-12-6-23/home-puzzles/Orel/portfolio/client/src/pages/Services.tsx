import "./Services.scss"
import Service from '../components/Service/Service'
import { FaHome, FaUser } from 'react-icons/fa';


const Services = () => {
  return (
    <section className='services-container'>

      <div className="flex flex-wrap justify-center">
      < Service iconName={FaHome} title="Give you Services" des="i give you servisec with my heart"/>
      < Service iconName={FaUser} title="Give you Services" des="i give you servisec with my heart"/>

      </div>
      <div></div>
    </section>
  )
}

export default Services
