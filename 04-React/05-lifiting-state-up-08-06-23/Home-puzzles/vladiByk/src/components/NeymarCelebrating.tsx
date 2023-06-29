interface NeymarCelebratingProps {
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const NeymarCelebrating = ({ setClicked }: NeymarCelebratingProps) => {
  return (
    <div>
      <img
        src="https://idsb.tmgrup.com.tr/ly/uploads/images/2022/09/29/thumbs/800x531/233394.jpg?v=1664454118"
        alt="Neymar celebrating"
        onClick={() => setClicked((prev) => (prev = !prev))}
      />
    </div>
  );
};

export default NeymarCelebrating;
