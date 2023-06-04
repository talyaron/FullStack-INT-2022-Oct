import { FC, ReactNode } from "react";
import "../style/massage.scss"

interface MassageProps {
    children?: ReactNode;
    onClose: () => void;
    
}


const Massage: FC<MassageProps> = ( children ) => {
  return (
<div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> <h1>
    You should check in on some of those fields below.
    </h1>
  <button type="button" className="alert__btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={children.onClose}>X</button>
</div>
  )
}

export default Massage
