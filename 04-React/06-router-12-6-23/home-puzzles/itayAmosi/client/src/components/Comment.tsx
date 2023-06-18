import "../style/comment.scss";

const Comment = () => {
  return (
    <>
      <form className="form1" id="form1">
        <p className="text">
          <textarea
            name="text"
            className="validate[required,length[6,300]] feedback-input"
            id="comment"
            placeholder="Comment"
          ></textarea>
        </p>

        <div className="submit">
          <input type="submit" value="SEND" id="button-blue" />
          <div className="ease"></div>
        </div>
      </form>
    </>
  );
};

export default Comment;
