// import ErrorPage from "./pages/ErrorPage.tsx";
import { Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import About from "./pages/About.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import Admin from "./pages/Admin.tsx";
import Projects from "./pages/Projects.tsx";
import BugsLife from "./pages/BugsLife.tsx";


export const router = ([
<Routes>
  <Route path={"/"} element={<App />}/>,
  <Route path="/about" element={<About />}/>,
  <Route path="/register" element={<Register />} /*action={}*/ />,
  <Route path="/login" element={<Login />}/>,
  <Route path="/admin" element={<Admin />}/>,
  <Route path="*" element={<ErrorPage />}/>,
  <Route path="/projects" element={<Projects />}/>,
  <Route path="/projects/bugsLife" element={<BugsLife />}/>,
</Routes>
]);



// export const Router = ()=>(
//   <Routes>
//     <Route path={"/"} element={<App />}/>
//     <Route path="/about" element={<About />}/>
//     <Route path="/contact" element={<Contact />}/>
//     <Route path="*" element={<ErrorPage />}/>
//     <Route path="/projects" element={<Projects />}/>
//     <Route path="/projects/:_id" element={<ProjectDetails />}/>
//   </Routes>
//   );
  


// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//   <BrowserRouter>
//   <Router />
//   </BrowserRouter>
// </React.StrictMode>
// );