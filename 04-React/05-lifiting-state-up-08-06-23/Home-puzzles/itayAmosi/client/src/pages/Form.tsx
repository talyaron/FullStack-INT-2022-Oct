import axios from 'axios';
import "../style/form.scss"

const Form = () => {
    async function handleSubmit(e: any) {
        e.preventDefault();
        const name = e.target.name.value;
        const src1 = e.target.src1.value;
        const src2 = e.target.src2.value;
        const { data } = await axios.post("/api/players/add-player", { name, src1, src2 });
      }

  return (
    <div className='Container-Form'>
            <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Player Name" />
        <input type="text" name="src1" placeholder="Player url-1" />
        <input type="text" name="src2" placeholder="Player url-2" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default Form
