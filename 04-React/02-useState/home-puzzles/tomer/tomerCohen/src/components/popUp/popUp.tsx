import "./popUp.scss"
import Names from "../Names/Names";


const PopUp = ()=>{
    function randomColor() {
        const color = Math.round, r = Math.random, s = 255;
        return 'rgba(' + color(r()*s) + ',' + color(r()*s) + ',' + color(r()*s) + ',' + r().toFixed(1) + ')';
    }
    return(
        <div style={{backgroundColor:randomColor()}} className="popUpName"><Names /></div>
    )
}
export default PopUp;