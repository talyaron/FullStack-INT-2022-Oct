import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import RouteMaster from "./routes/routes";
import { STUDENTS_ROUTE } from "./consts/routes";



function App() {

  
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {RouteMaster.map((routeElement, index) => (
          <Route
            key={index}
            path={routeElement.route}
            render={() => <routeElement.component />}
          />
        ))}
        <Redirect from="*" to={STUDENTS_ROUTE} />
      </Switch>
    </div>
  );
}

export default App;
