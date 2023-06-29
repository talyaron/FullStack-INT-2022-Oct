import { motion } from 'framer-motion'
import './cry.scss'

const Cry = () => {
    return (
        <motion.div className='cry'
            initial={{ opacity: 0 }}
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 5 }}
        >AYA!
        </motion.div>
    )
}

export default Cry