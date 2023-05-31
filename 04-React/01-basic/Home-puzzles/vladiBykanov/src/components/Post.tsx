import React, { FormEvent, useState } from "react";

import Header from "./Header";
import Icons from "./Icons";
import Likes from "./Likes";
import Text from "./Text";
import Comments from "./Comments";
import NewComment from "./NewComment";

export class Comment {
  constructor(
    public id: number,
    public text: string,
    public author: string,
    public date: Date = new Date()
  ) {}
}

const Post = () => {
  const user = "vladb89";
  const [likes, setLikes] = useState<number>(23543);
  const [newComment, setNewComment] = useState<string>("")
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      text: "Cooooooooool!",
      author: "redBull123",
      date: new Date("05/18/2023"),
    },
    {
      id: 2,
      text: "NICE!",
      author: "Bob",
      date: new Date("05/08/2023"),
    },
    {
      id: 3,
      text: "LOL!",
      author: "Johnny",
      date: new Date("04/22/2023"),
    },
    {
      id: 4,
      text: "boring!",
      author: "unknown",
      date: new Date("04/06/2023"),
    },
  ]);

  const handleNewComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!newComment) return
    const comment = new Comment(comments.length + 1, newComment, )
  };

  return (
    <div className="post">
      <Header />
      <img src="https://wallpapercave.com/wp/acWzCvX.jpg" alt="" />
      <Icons setLikes={setLikes} />
      <Likes likes={likes} />
      <Text userName={user} />
      <Comments comments={comments} />
      <NewComment handleNewComment={handleNewComment} />
    </div>
  );
};

export default Post;
