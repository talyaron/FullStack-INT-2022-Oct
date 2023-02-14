import { FC } from "react";
import { useHistory } from "react-router-dom";
import { ISingleSidebarOption } from "./ISingleSidebarOption";

// css
import './SingleSidebarOption.css'

const SingleSidebarOption: FC<ISingleSidebarOption> = ({
  title,
  path,
  setIsSidebarOpen,
}) => {
  let history = useHistory()

  const optionClicked = () => {
    history.push(path)
    setIsSidebarOpen(false)
  }

  return(
  <div className="sidebarOption">
    <span onClick={() => {optionClicked()} }>
      {title}
    </span>
    </div>
    ) 
};

export default SingleSidebarOption;
