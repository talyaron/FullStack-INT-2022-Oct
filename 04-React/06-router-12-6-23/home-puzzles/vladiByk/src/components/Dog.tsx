import React from "react";
import axios from "axios";

const Dog = () => {
  const [dog, setDog] = React.useState("");

  React.useEffect(() => {
    const fetchDog = async () => {
      const { data } = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );

      setDog((prev) => (prev = data.message));
    };

    fetchDog();
  }, []);
  return <img src={dog} alt="Dog-image" />;
};

export default Dog;
