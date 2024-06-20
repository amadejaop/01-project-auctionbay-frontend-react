import BoldLink from "../components/BoldLink";
import SideImage from "../components/SideImage";
import "../assets/styles/Signup.css";
import Logo from "../assets/images/Logo.png";
import Eye from "../assets/images/Eye.png";
import { useEffect, useState } from "react";

export default function Signup() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [repeatPasswordShown, setRepeatPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const toggleRepeatPasswordVisibility = () => {
    setRepeatPasswordShown(repeatPasswordShown ? false : true);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 750;
  useEffect(() => {
   const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <>
      <div className="container">
        {(width > breakpoint) ? <SideImage /> : null}        
        <div className="signup">
          <img className="yellow-logo" src={Logo} alt="Company logo" />
          <div className="side-text">
            <h2>Hello!</h2>
            <p className="signup-para">Please enter your details</p>
            <form action="post" className="signup-form">
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
                  required
                />
              </label>
              <div>
                <label htmlFor="password">
                  Password
                  <input
                    placeholder="Placeholder"
                    className="signup-input"
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    id="password"
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                    maxLength={15}
                    required
                  />{" "}
                </label>
                <button type="button" className="empty-btn" onClick={togglePasswordVisibility}>
                  <img id="signup-pw-icon" src={Eye} alt="eye icon" />
                </button>
              </div>

              <div>
                <label htmlFor="confirmPassword">
                  Repeat password
                  <input
                    placeholder="Placeholder"
                    className="signup-input"
                    type={repeatPasswordShown ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                    maxLength={15}
                    required
                  />{" "}
                </label>
                <button
                  type="button"
                  className="empty-btn"
                  onClick={toggleRepeatPasswordVisibility}
                >
                  <img id="signup-repeat-pw-icon" src={Eye} alt="eye icon" />
                </button>
              </div>
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
