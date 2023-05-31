import "../style/topNav.scss";
import { FC, useState } from "react";

interface TopNav {
  name: string;
  children?: string;
  onSelectButton: (children: string) => void;
}


const NavTop: FC<TopNav> = ({ name, onSelectButton, children }) => {
  const [counter, setCounter] = useState(0);
  function handleClick(){
    setCounter(counter => counter + 1);
  }
  return (
    <div className="topNav">
      <button className="topNav__btn" onClick={() =>{
        handleClick()
        onSelectButton(children!)
        }}>{name}: {counter}</button>
    </div>
  );
};

export default NavTop;
