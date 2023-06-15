import React from 'react';
import { IconType } from 'react-icons';
import { IconContext } from 'react-icons';


interface ServiceProps {
  iconName: IconType;
  title: string;
  des: string;
}

const Service: React.FC<ServiceProps> = ({ iconName, title, des }) => {
  return (
    <IconContext.Provider value={{ size: '3em', color: 'purple'}}>
      <div className=" w-60 h-60 shadow-md  text-main-color m-2 p-5 
      rounded-2xl opacity-1 flex flex-col justify-start items-center align-middle ">
        <div className=''>{React.createElement(iconName)}</div>
        <h2 >{title}</h2>
        <p>{des}</p>
      </div>
    </IconContext.Provider>
  );
};

export default Service;
