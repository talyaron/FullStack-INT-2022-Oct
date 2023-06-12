interface NeymarInjuredProps {
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const NeymarInjured = ({ setClicked }: NeymarInjuredProps) => {
  return (
    <div>
      <img
        src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F11%2Fneymar-jr-miss-rest-of-2022-world-cup-qatar-team-brazil-ankle-injury-report-001.jpg?q=90&w=1400&cbr=1&fit=max"
        alt="Neymar on the ground"
        onClick={() => setClicked((prev) => (prev = !prev))}
      />
      <p>Ouch!!!</p>
      <source src="" />
    </div>
  );
};

export default NeymarInjured;
