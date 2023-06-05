import "../style/popup.scss";
import Names from "./Names";


const PopUp =() =>{
    function random_rgba() {
        const color = Math.round, r = Math.random, s = 255;
        return 'rgba(' + color(r()*s) + ',' + color(r()*s) + ',' + color(r()*s) + ',' + r().toFixed(1) + ')';
    }
    return (
        <div style={{backgroundColor:random_rgba()}} className="popUp"><Names /></div>
    )
}

export default PopUp;