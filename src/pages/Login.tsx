import SideImage from "../components/SideImage";
import Logo from "../assets/images/Logo.png";
import { useState } from "react";
import Eye from "../assets/images/Eye.png";
import BoldLink from "../components/BoldLink";
import "../assets/styles/Login.css";

export default function Login() {
  const [loginPasswordShown, setLoginPasswordShown] = useState(false);
  const toggleLoginPasswordVisibility = () => {
    setLoginPasswordShown(loginPasswordShown ? false : true);
  };

  return (
    <>
      <div className="container">
        <SideImage />
        <div className="login">
          <img className="yellow-logo" src={Logo} alt="Company logo" />
          <div className="side-text">
            <h2>Welcome back!</h2>
            <p className="signup-para">Please enter your details</p>
            <form action="post">
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
              <div>
                <label htmlFor="password">
                  Password
                  <input
                    placeholder="Placeholder"
                    className="signup-input"
                    type={loginPasswordShown ? "text" : "password"}
                    name="password"
                    id="password"
                    required
                  />{" "}
                </label>
                <button
                  type="button"
                  className="empty-btn"
                  onClick={toggleLoginPasswordVisibility}
                >
                  <img id="login-pw-icon" src={Eye} alt="eye icon" />
                </button>
              </div>
              <a href="/reset-password" className="forgotten-pw">
                Forgot password?
              </a>
              <button type="submit" className="yellow-submit-btn">
                Login
              </button>
            </form>
          </div>
          <p>
            Don't have an account?{" "}
            <BoldLink text={"Sign up"} href={"/signup"} />
          </p>
        </div>
      </div>
    </>
  );
}
