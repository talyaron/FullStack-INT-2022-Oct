const Names = () => {
    const names = ["Itay", "Matan", "Assaf", "Tal", "Tomer", "Nikita", "Vladi", "Itai", "Orel", "Shlom", "Esti", "Angela", "amit", "Noa", "Yuval"];
    const random = Math.floor(Math.random() * names.length);
    function random_rgba() {
        const color = Math.round, r = Math.random, s = 255;
        return 'rgba(' + color(r()*s) + ',' + color(r()*s) + ',' + color(r()*s) + ',' + r().toFixed(1) + ')';
    }
  return (
    <div>
<h1 style={{backgroundColor:random_rgba()}}>{names[random]}</h1>
    </div>
  )
}

export default Names
