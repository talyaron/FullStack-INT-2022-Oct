import React, { FormEvent } from "react";

interface NewCommentProps {
  handleNewComment: (e: FormEvent<HTMLFormElement>) => void;
}

const NewComment = ({ handleNewComment }: NewCommentProps) => {
  return (
    <form onSubmit={handleNewComment}>
      <label htmlFor="addComment">
        <input
          type="text"
          placeholder="New comment..."
          className="newCommentInput"
        />
      </label>
    </form>
  );
};

export default NewComment;
