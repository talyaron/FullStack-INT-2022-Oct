import React from "react";
import axios from "axios";

const Dog = () => {
  const [dog, setDog] = React.useState("");

  React.useEffect(() => {
    try {
      const fetchDog = async () => {
        const { data } = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );

        setDog((prev) => (prev = data.message));
      };

      fetchDog();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div
      className="dogImg"
      style={{ background: `url("${dog}") no-repeat center / contain` }}
    ></div>
  );
};

export default Dog;
