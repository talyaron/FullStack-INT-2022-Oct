import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar/NavBar";
import RouteMaster from "./Routes/Routes";
import { Switch, Route, Redirect } from "react-router-dom"
import {HOME_PATH} from "./consts/routes"


function App() {

  return (
    <div className="App">
      <NavBar />
      <Switch>
        {RouteMaster.map((routeElement, index) => (
          <Route
            key={index}
            path={routeElement.path}
            render={() => <routeElement.component />}
          />
        ))}
        <Redirect from="*" to={HOME_PATH}/>
      </Switch>
    </div>
  );
}
export default App;
