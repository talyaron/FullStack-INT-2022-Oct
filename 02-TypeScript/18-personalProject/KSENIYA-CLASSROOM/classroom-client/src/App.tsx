import Navbar from "./componenets/Navbar/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import RouteMaster from "./routes/routes";
import { CLASSES_PATH } from "./consts/routes";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {RouteMaster.map((routeElement, index) => (
          <Route
            key={index}
            path={routeElement.path}
            render={() => <routeElement.component />}
          />
        ))}
        <Redirect from="*" to={CLASSES_PATH} />
      </Switch>
    </div>
  );
}

export default App;
