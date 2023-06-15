import axios from "axios";
import "../style/FormStyle.scss";
import NavBar from "../comp/NavBar/NavBar";

export interface Project {
  name: string;
  _id: string;
  work: string;
}

function Form() {
  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log(e.target);
    const name = e.target.name.value;
    const work = e.target.work.value;

    console.log(name, work);
    const { data } = await axios.post("/api/projects/add-project", {
      name,
      work,
    });
    console.log(data);
  }
  return (
    <>
      <NavBar />
      <div className="login-box">
        <h2>Add Project</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="text" name="name" placeholder="" />

            <label>Project Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="work" placeholder="" />
            <label>work Image</label>
          </div>
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default Form;
