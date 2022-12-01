import React from "react";
import GenericIntro from "../Generics/GenericIntro";
import mainImg from "../../icons/ksen.jpg";
import "./Home.css";

function Home() {
  return (
    <div id="mainHome">
      <GenericIntro
        smallTitle="This is me"
        mainTitle="Kseniya Timoshchuk"
        desc="
                This project is still in the building and it will grow with me as I grow and become a better programmer.
                "
      />
      <img className="mainImg picFrame" src={mainImg} alt="girl smiling" />
    </div>
  );
}
export default Home;
