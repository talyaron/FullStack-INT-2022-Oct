import "./App.css";
import BalloonComponent from "./components/Balloons";



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
