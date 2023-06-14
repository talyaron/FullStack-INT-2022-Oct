import Dog from "../components/Dog";

const Home = () => {
  return (
    <div className="homePage">
      <h1>
        From Athlete to Full-Stack Developer: The Inspiring Journey of Vladislav
        Bykanov
      </h1>
      <p>
        Vladislav Bykanov's story is one of remarkable transformation and
        unwavering determination. Born with a passion for sports, he initially
        pursued a career as a professional athlete. But as fate would have it,
        his path took an unexpected turn, leading him to discover his true
        calling in the world of technology as a full-stack developer.
      </p>
      <p>
        Vladislav's athletic journey began at a young age when he displayed
        exceptional talent and dedication in the field of ice skating. His
        relentless pursuit of excellence propelled him to compete at the highest
        levels, representing his country in numerous international competitions.
        He achieved remarkable success and even participated in the Olympic
        Games, showcasing his incredible skill and determination to the world.
      </p>
      <p>
        However, even amidst his athletic achievements, Vladislav's curiosity
        for technology and computers remained ever-present. In his downtime, he
        would tinker with computers, exploring their inner workings and teaching
        himself the fundamentals of programming. What started as a hobby soon
        evolved into a deep passion that would redefine his future.
      </p>
      
      <div className="dogContainer">
        <h2>And by the way...</h2>
        <h2>here is my favourite type of dog</h2>
        <Dog />
      </div>
    </div>
  );
};

export default Home;
