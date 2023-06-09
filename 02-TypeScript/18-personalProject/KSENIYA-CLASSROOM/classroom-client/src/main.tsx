import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//react router
import { BrowserRouter as Router } from "react-router-dom";

//react context
import { ColorTogglerProvider } from "./context/contextTheme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ColorTogglerProvider>
    <Router>
      <App />
    </Router>
  </ColorTogglerProvider>
);
