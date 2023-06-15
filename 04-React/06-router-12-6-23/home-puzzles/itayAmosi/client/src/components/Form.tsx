import axios from 'axios';
import "../style/form.scss"

const Form = () => {
    async function handleSubmit(e: any) {
        e.preventDefault();
        const name = e.target.name.value;
        const src1 = e.target.src1.value;
        const src2 = e.target.src2.value;
        const src3 = e.target.src2.value;
        const src4 = e.target.src2.value;
        const src5 = e.target.src2.value;
        const { data } = await axios.post("/api/project/add-project", { name, src1, src2, src3, src4, src5 });
      }

  return (
    <>
    <div className='Container-Form'>
            <form className="form" onSubmit={handleSubmit}>
      <h1>Add Project</h1>
      <br />
        <input type="text" name="name" placeholder="Project name" />
        <input type="text" name="src1" placeholder="Project url-1" />
        <input type="text" name="src2" placeholder="Project url-2" />
        <input type="text" name="src3" placeholder="Project url-3" />
        <input type="text" name="src4" placeholder="Project url-4" />
        <input type="text" name="src5" placeholder="Project url-5" />
        <button type="submit">create</button>
      </form>
    </div>
    </>
  )
}

export default Form
