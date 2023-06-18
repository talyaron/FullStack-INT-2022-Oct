import { Link } from "react-router-dom";
import "../style/admin.scss";
import Form from "../components/Form";
import NavBar from "../components/NavBar";

const Admin = () => {
  return (
    <>
      <NavBar />
      <aside>
        <header>
          <div className="profile">
            <img
              className="profile-picture"
              src="https://imgtr.ee/images/2023/06/13/Qj1oL.jpg"
            />
            <p>Itay Amosi</p>
          </div>
        </header>
        <nav className="side-navigation">
          <ul>
            <p className="active">
              <Link to={"/"}>
                {" "}
                <i className="fa fa-dashboard"></i>Home
              </Link>
            </p>
            <p>
              <Link to={"/"}>
                {" "}
                <i className="fa fa-dashboard"></i>Projects
              </Link>
            </p>
            <p>
              <Link to={"/"}>
                {" "}
                <i className="fa fa-dashboard"></i>Comments
              </Link>
            </p>
            <p>
              <Link to={"/"}>
                {" "}
                <i className="fa fa-dashboard"></i>Users
              </Link>
            </p>
          </ul>
        </nav>
      </aside>
      <Form />
    </>
  );
};

export default Admin;
