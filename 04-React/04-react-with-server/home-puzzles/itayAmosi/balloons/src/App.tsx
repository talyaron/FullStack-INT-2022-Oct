import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import BalloonComponent from "./components/Balloons";


// const [delete, setDelete] = useState(0);

function App() {

  return (
    <div className="continer">
          <h3>PopUpBalloons</h3>
    <h4>Rules: <span>One click = change color ||
        Double click = blow up the balloon</span></h4>

    <div className="wrapper">
      <BalloonComponent />
    </div>
    </div>
  );
}

export default App;
