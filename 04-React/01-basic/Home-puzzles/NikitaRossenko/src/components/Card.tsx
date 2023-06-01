import { FC } from "react";

interface cardProps {
  title: string;
  text: string;
}

const Card:FC<cardProps> = ({title, text}) => {


  return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
        
      </div>
  )
};

export default Card