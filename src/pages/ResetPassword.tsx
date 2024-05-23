import SideImage from "../components/SideImage";
import Logo from "../assets/images/Logo.png";
import "../assets/styles/ForgotPassword.css";
import Chevron from "../assets/images/Chevron_right.png";

export default function ResetPassword() {
  return (
    <>
      <div className="container">
        <SideImage />
        <div className="pw-section">
          <img className="yellow-logo" src={Logo} alt="Company logo" />
          <div className="inner-section">
            <h2>Forgot password?</h2>
            <p className="signup-para">
              No worries, we will send you reset insturctions
            </p>
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
              <button type="submit" className="yellow-submit-btn">
                Reset password
              </button>
            </form>
            <a href="/login" className="back-link">
              <img id="chevron" src={Chevron} alt="Arrow pointing left" /> Back
              to login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
