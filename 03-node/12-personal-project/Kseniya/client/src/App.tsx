//components
import Navbar from "./components/Navbar/Navbar";

// routing
import { Redirect, Route, Switch } from "react-router-dom";
import RouteMaster from "./routes/routes";

//consts
import { HOME_ROUTE } from "./consts/routeConsts";

//css
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const colorTheme = createTheme({
    palette: {
      primary: {
        main: "rgb(255, 161, 19)",
      },
    },
    typography: {
      fontFamily: 'M PLUS Rounded 1c, sans-serif'
    },
  });
  return (
    <>
      <ThemeProvider theme={colorTheme}>
        <Navbar />
        <div className="mainPage">
          <Switch>
            {RouteMaster.map((routeElement, index) => (
              <Route
                key={index}
                path={routeElement.path}
                render={() => <routeElement.component />}
              />
            ))}
            <Redirect from="*" to={HOME_ROUTE} />
          </Switch>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
