import { useState } from "react";
import Name from "./components/Name";

export interface Student {
  name: string;
  color: string;
}

const students: Student[] = [
  { name: "Vladislav Bykanov", color: getRandomColor() },
  { name: "Amyth Zalzberger", color: getRandomColor() },
  { name: "Itai Gelberg", color: getRandomColor() },
  { name: "Tomer Cohen", color: getRandomColor() },
  { name: "שלומי אייזנקוט", color: getRandomColor() },
  { name: "Tanya Holczer", color: getRandomColor() },
  { name: "Angela", color: getRandomColor() },
  { name: "Asael Matari", color: getRandomColor() },
  { name: "Barak", color: getRandomColor() },
  { name: "Esti Mauda", color: getRandomColor() },
  { name: "John", color: getRandomColor() },
  { name: "Karin Levi", color: getRandomColor() },
  { name: "ksenya", color: getRandomColor() },
  { name: "Lena", color: getRandomColor() },
  { name: "Matanel", color: getRandomColor() },
  { name: "Max", color: getRandomColor() },
  { name: "Nikita Rossenko", color: getRandomColor() },
  { name: "Noa", color: getRandomColor() },
  { name: "Omer Virshuvski", color: getRandomColor() },
  { name: "Or Lev-Ari", color: getRandomColor() },
  { name: "Sarah", color: getRandomColor() },
  { name: "Tamar Desse", color: getRandomColor() },
  { name: "אוראל", color: getRandomColor() },
  { name: "שלום קופרמן", color: getRandomColor() },
  { name: "לידור אמסלם", color: getRandomColor() },
];

const randomIndex = () => Math.floor(Math.random() * students.length);

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function App() {
  const [student, setStudent] = useState<Student | null>(null);
  const message = "Click to get a random student";
  
  return (
    <>
      <button onClick={() => setStudent(students[randomIndex()])}>Click</button>
      <Name student={student} message={message} />
    </>
  );
}

export default App;
