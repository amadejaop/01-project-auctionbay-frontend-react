import BoldLink from "../components/BoldLink";
import SideImage from "../components/SideImage";
import "../assets/styles/Signup.css";
import Logo from "../assets/images/Logo.png";

export default function Signup() {
  return (
    <>
      <div className="container">
        <SideImage />
        <div className="signup">
          <img className="yellow-logo" src={Logo} alt="Company logo" />
          <div className="side-text">
            <h2>Hello!</h2>
            <p className="signup-para">Please enter your details</p>
            <form action="post">
              <div className="twocol-form">
                <label htmlFor="name">
                  Name
                  <input
                    placeholder="Placeholder"
                    className="signup-input"
                    type="text"
                    name="name"
                    id="name"
                    maxLength={20}
                  />
                </label>
                <label htmlFor="surname">
                  Surname
                  <input
                    placeholder="Placeholder"
                    className="signup-input"
                    type="text"
                    name="surname"
                    id="surname"
                    maxLength={20}
                  />
                </label>
              </div>
              <label htmlFor="email">
                E-mail
                <input
                  placeholder="Placeholder"
                  className="signup-input"
                  type="email"
                  name="email"
                  id="email"
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  placeholder="Placeholder"
                  className="signup-input"
                  type="password"
                  name="password"
                  id="password"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                  maxLength={15}
                />
              </label>
              <label htmlFor="confirmPassword">
                Repeat password
                <input
                  placeholder="Placeholder"
                  className="signup-input"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                  maxLength={15}
                />
              </label>
              <button className="yellow-submit-btn" type="submit">
                Sign up
              </button>
            </form>
          </div>
          <p>
            Already have an account?{" "}
            <BoldLink text={"Log in"} href={"/login"} />
          </p>
        </div>
      </div>
    </>
  );
}
