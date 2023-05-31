import { SiBytedance } from "react-icons/si";

type TextProps = {
  userName: string;
};

const Text = ({ userName }: TextProps) => {
  return (
    <div className="postText">
      <b>{userName}: </b>
      <p><SiBytedance /> Art</p>
    </div>
  );
};

export default Text;
