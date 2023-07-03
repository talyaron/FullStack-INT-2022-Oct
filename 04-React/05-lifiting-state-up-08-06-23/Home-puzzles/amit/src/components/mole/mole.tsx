import { FC, SetStateAction, useState } from "react";
import { motion } from "framer-motion"
import './mole.scss'

import Cry from "../cry/cry";

interface MoleProps {
    setMoles: SetStateAction<any>;
    moles: MoleInterface[];
    mole: MoleInterface;
    emerges: boolean;
}

export interface MoleInterface {
    id: string;
    name: string;
    score: number;
}


const Mole: FC<MoleProps> = ({ setMoles, moles, mole, emerges }) => {

    const [moleCry, setMoleCry] = useState(false)
    const [isAngry, setIsAngry] = useState(false)

    function handleClickMole(moleId: string) {
        try {
            setMoleCry(true)
            setIsAngry(true)
            setTimeout(() => {
                setIsAngry(false)
                setMoleCry(false)
            }, 2000)

            const moleIndex = moles.findIndex((mole) => mole.id === moleId)
            if (moleIndex === -1) throw new Error("mole not found")
            const newMoles = [...moles]
            newMoles[moleIndex].score++
            setMoles(newMoles)

        } catch (error) {
            console.error(error);
        }
    }

    return (<div>
        {moleCry ? <Cry /> : null}
        {emerges ? <motion.div className='mole'
            style={{ backgroundImage: isAngry ? "url('https://www.clipartmax.com/png/full/181-1815733_mole-clipart-earthbound-cartoon-mole-transparent-background.png')" : "url('https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/7932713/mole-clipart-sm.png')" }}
            onClick={() => handleClickMole(mole.id)}
            initial={{ y: 0 }}
            animate={{ y: [0, -70, 9] }}
            transition={{ duration: 3 }}
        >
        </motion.div> : null}
    </div>
    )
};

export default Mole