import { Comment } from "./Post";

interface CommentsProps {
  comments: Comment[];
}

const Comments = ({ comments }: CommentsProps) => {
  return (
    <div className="post__comments">
      <ul>
        {comments.slice(0, 3).map((comment) => (
          <li key={comment.id}>
            {comment.author} - {comment.text}
            <p className="date">
              {comment.date.toUTCString().split("").splice(5, 11)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
