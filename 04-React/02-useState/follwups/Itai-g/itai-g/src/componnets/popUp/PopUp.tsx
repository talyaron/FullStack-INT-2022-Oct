import "./popup.scss";

const PopUp =(count:any) =>{
    function random_rgba() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }
    return (
        <div style={{height:count.count,width:count.count,backgroundColor:random_rgba()}} className="popUp">popup</div>
    )
}

export default PopUp;