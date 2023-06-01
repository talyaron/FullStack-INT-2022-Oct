import { SiBytedance } from "react-icons/si";

type TextProps = {
  userName: string;
};

const Text = ({ userName }: TextProps) => {
  return (
    <div className="post__text">
      <b>{userName}: </b>
      <p><SiBytedance /> Art is an expression of the mind</p>
    </div>
  );
};

export default Text;
