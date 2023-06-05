import { Student } from "../App";

interface NameProps {
  student: Student | null;
  message: string;
}

const Name = ({ student, message }: NameProps) => {
  return (
    <p style={!student ? { color: "black" } : { color: student.color }}>
      {!student ? message : student.name}
    </p>
  );
};

export default Name;
