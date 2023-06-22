import "./App.scss";
import { Link, Route, Routes } from "react-router-dom";
import Players from "./pages/Players";
import Form from "./pages/Form";
import Home from "./pages/Home";

function App() {
  return (
    <>
  <nav className="navigation-menu navigation-container">
    <h1><Link to="/" className="site-identity-logo">FootBall-Players-Crying </Link></h1>
    <input type="checkbox" id="toggleMenu" />
    <label htmlFor="toggleMenu"><i className="ri-menu-line" id="toggleIcon"></i></label>
    <section className="main-menu">
      <ul className="navigation-menu__labels">
        <li><Link to="/Players">Players</Link></li>
        <li><Link to="/Form">Form</Link></li>
        <li><Link to="/">Home</Link></li>

      </ul>
    </section>
  </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Players" element={<Players />} />
      </Routes>
    </>
  );
}

export default App;
