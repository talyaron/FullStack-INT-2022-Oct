import NavBar from "../components/NavBar";
import "../style/about.scss";

const About = () => {
  return (
    <>
      <NavBar />
      <div id="resume">
        <div className="left-column">
          <div className="substrate">
            <h2>My Profile</h2>
            <img
              className="profilepic"
              src="https://imgtr.ee/images/2023/06/13/QfO5i.jpg"
              alt="abhaymakadia"
            />
            <ul className="main-info-list">
              <li>
                Name<span>Itay Amosi</span>
                <div className="floatlimit"></div>
              </li>
              <li>
                Born<span>24 August 1993</span>
                <div className="floatlimit"></div>
              </li>
              <li>
                Address<span>Jerusalem, Israel</span>
                <div className="floatlimit"></div>
              </li>
              <li>
                Email<span>itayz1e@gmail.com</span>
                <div className="floatlimit"></div>
              </li>
            </ul>
            <div className="paper-clip"></div>
          </div>
          <div className="substrate">
            <h2>history</h2>
            <div className="left-blue">
              <div className="time-period-left-blue"></div>
              <h3>
                <span className="time-period-right-blue">2020 - Now</span>
              </h3>
              <h4>Work</h4>
              <p>
                I am turning at one Software Company in 2013 as Asp.net
                Developer.
              </p>
              <div className="time-period-left-blue"></div>
              <h3>
                <span className="time-period-right-blue">2017 - 2020</span>
              </h3>
              <h4>Work</h4>
              <p>
                I am turning at one Software Company in 2013 as Asp.net
                Developer.
              </p>
              <div className="time-period-left-blue"></div>
              <h3>
                <span className="time-period-right-blue">2014 - 2017</span>
              </h3>
              <h4>M.C.A.</h4>
              <p>Learn CSS, HTML, Javascript</p>
              <div className="time-period-left-blue"></div>
              <h3>
                <span className="time-period-right-blue">2011 - 2014</span>
              </h3>
              <h4>B.C.A</h4>
              <p>
                I have Completed My Bachelors in Computer Application from
                Rajkot.
              </p>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="substrate gradient-blue font-blue">
            <h2>About Me</h2>
            <h3>Hay, I'm Abhay Makadia . . .</h3>
            <div className="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              asperiores dolorum corporis temporibus, fugit, praesentium
              exercitationem numquam, odio eum fugiat aspernatur. Aliquam
              obcaecati aliquid architecto et. Repellat ducimus velit
              laudantium? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Minus consequatur inventore quae. Nobis corporis alias sequi
              ex provident vel voluptate ea possimus natus? Voluptas praesentium
              quos vitae impedit debitis asperiores.
            </div>
          </div>

          <div className="substrate">
            <h2>My Progress</h2>
            <h3>Web Development</h3>
            <ul className="skills">
              <li className="skill">
                <span>HTML</span>
                <div className="b">
                  <span className="eighty"></span>
                </div>
              </li>
              <li className="skill">
                <span>CSS</span>
                <div className="b">
                  <span className="eighty"></span>
                </div>
              </li>
              <li className="skill">
                <span>TypeScript</span>
                <div className="b">
                  <span className="eighty"></span>
                </div>
              </li>
              <li className="skill">
                <span>MongoDB</span>
                <div className="b">
                  <span className="eighty"></span>
                </div>
              </li>
              <li className="skill">
                <span>React</span>
                <div className="b">
                  <span className="eighty"></span>
                </div>
              </li>
            </ul>
            <div className="paper-clip"></div>
          </div>
        </div>

        <div className="floatlimit"></div>
      </div>
    </>
  );
};

export default About;
