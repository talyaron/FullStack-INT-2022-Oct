import React, { FormEvent } from "react";

interface NewCommentProps {
  handleNewComment: (e: FormEvent<HTMLFormElement>) => void;
  setNewComment: React.Dispatch<React.SetStateAction<string>>;
  newComment: string;
}

const NewComment = ({
  handleNewComment,
  newComment,
  setNewComment,
}: NewCommentProps) => {
  return (
    <form className="post__newCommentForm" onSubmit={handleNewComment}>
      <label htmlFor="addComment">
        <input
          type="text"
          name="addComment"
          placeholder="New comment..."
          className="newCommentInput"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </label>
    </form>
  );
};

export default NewComment;
