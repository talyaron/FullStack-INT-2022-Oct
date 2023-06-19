import axios from "axios";
import "../style/comment.scss";

const Comment = () => {
  async function handleAddCommet(e: any) {
    e.preventDefault();
    const comment = e.target.comment.value;
    const { data } = await axios.post("/api/comment/add-comment", { comment });
    console.log(data);
  }

  return (
    <div className="commentContainer">
      <form className="commet" onSubmit={handleAddCommet}>
        <p className="text">
          <input
            type="text"
            name="comment"
            className="validate[required,length[6,300]] feedback-input"
            placeholder="Comment"
          ></input>
        </p>
        <div className="submit">
          <input type="submit" value="SEND" id="button-blue" />
          <div className="ease"></div>
        </div>
      </form>
    </div>
  );
};

export default Comment;
