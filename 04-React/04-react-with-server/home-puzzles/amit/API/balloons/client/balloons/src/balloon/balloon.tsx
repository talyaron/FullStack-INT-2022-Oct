import { forwardRef, Ref } from "react";
import "./balloon.scss";
import { motion } from "framer-motion";

interface BalloonProps {
    color: string;
    status: string;
    balloonIndex: number;
    ballonsLength: number;
    onPress: any,
}

function getRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
}
const xAxisLeftEnd = -200;
const xAxisRightEnd = 1100;

const Balloon = forwardRef(({ color, status, balloonIndex, ballonsLength, onPress }: BalloonProps, ref: Ref<HTMLDivElement>,) => {
    try {

        return (
            <motion.div
                className="balloon"
                onClick={onPress}
                style={{ backgroundColor: color, display: status === "init" ? "block" : "none" }}
                ref={ref}
                animate={{ x: getRandomNumber(xAxisLeftEnd, xAxisRightEnd), y: -2000 }}
                initial={{ x: getRandomNumber(xAxisLeftEnd, xAxisRightEnd), y: -300 }}
                transition={{ delay: balloonIndex - ballonsLength + 1, duration: 15 }}
            >
            </motion.div>)
    } catch (error) {
        console.error(error)
        return null
    }
})

export default Balloon

