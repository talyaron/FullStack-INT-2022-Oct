import './popup.scss';

const PopUp = ({ count, colorEnabled }: any) => {
  function random_rgba() {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
  }
  return (
    <div
      style={{
        height: count ? '100px' : '0',
        width: count ? '100px' : '0',
        backgroundColor: colorEnabled ? random_rgba() : 'transparent',
      }}
      className="popUp"
    >
    </div>
  );
};

export default PopUp;