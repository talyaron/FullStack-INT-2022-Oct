
import { ImInstagram, ImLinkedin, ImTwitter } from "react-icons/im";
const Contact = () => {
  return (
    <div className="contactPage">
      <div className="formContainer">
        <form onSubmit={(e) => e.preventDefault()} className="form">
          <h3>Get in contact</h3>
          <label htmlFor="fullName">
            Full Name:
            <input id="fullName" type="text" placeholder="John Doe" />
          </label>
          <label htmlFor="email">
            Email:
            <input id="email" type="email" placeholder="johnny123@gmail.com" />
          </label>
          <label htmlFor="phoneNumber">
            Phone Number:
            <input id="phoneNumber" type="number" placeholder="054-61234567" />
          </label>
          <label htmlFor="textArea" className="textArea">
            Your message:
            <textarea id="textArea"  placeholder="Let's get a coffee sometime. I got a project idea we can work on together..." />
          </label>
          <input type="submit" value="Send" />
        </form>
        <div className="iconsDiv">
          <p>Or via social media</p>
          <div className="icons">
            <ImInstagram className="icon" />
            <ImLinkedin className="icon" />
            <ImTwitter className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
