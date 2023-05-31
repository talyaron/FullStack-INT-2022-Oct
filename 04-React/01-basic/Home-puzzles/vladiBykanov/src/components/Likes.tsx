import React, { useState } from "react";
import numeral from "numeral";

type LikesProps = {
  likes: number;
//   setLikes: React.Dispatch<React.SetStateAction<number>>;
};

const Likes = ({ likes }: LikesProps) => {
  return <div className="likes">{numeral(likes).format("0,0")} Likes</div>;
};

export default Likes;
