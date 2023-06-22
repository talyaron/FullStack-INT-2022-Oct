import React from 'react';
import './popup.scss';

const PopUp = ({ count }: any) => {
  function random_rgba() {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
  }

  const names = ['yossi', 'moshe', 'david', 'elior'];
  const randomIndex = Math.floor(Math.random() * names.length);
  const randomName = names[randomIndex];

  return (
    <div
      style={{
        height: count ? '100px' : '0',
        width: count ? '100px' : '0',
        backgroundColor: count ? random_rgba() : 'transparent',
      }}
      className="popUp"
    >
      {randomName}
    </div>
  );
};
export default PopUp;