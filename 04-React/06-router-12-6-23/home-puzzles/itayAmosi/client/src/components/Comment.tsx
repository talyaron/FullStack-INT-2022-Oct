import axios from "axios";
import "../style/comment.scss";

const Comment = () => {
  async function handleAddCommet(e: any) {
    e.preventDefault();
    const commet = e.target.commet.value;
    const { data } = await axios.post("/api/project/add-project", { commet });
    console.log(data);
  }

  return (
    <div className="commentContainer">
      <form className="commet" onSubmit={handleAddCommet}>
        <p className="text">
          <textarea
            name="text"
            className="validate[required,length[6,300]] feedback-input"
            id="comment"
            placeholder="Comment"
          ></textarea>
        </p>

        <div className="submit">
          <input type="submit" name="commet" value="SEND" id="button-blue" />
          <div className="ease"></div>
        </div>
      </form>
    </div>
  );
};

export default Comment;
