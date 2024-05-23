import YellowBgLink from "../components/YellowBgLink";
import BoldLink from "../components/BoldLink";
import Logo from "../assets/images/Logo.png";
import BlackBgLink from "../components/BlackBgLink";
import "../assets/styles/Home.css";
import Auction from "../assets/images/Auctions1.png";

export default function Home() {
  return (
    <>
      <div className="landing-page">
        <div className="landing-nav">
          <img src={Logo} alt="Company logo" className="yellow-logo" />
          <div>
            <BoldLink text={"Log in"} href={"/login"} />
            &nbsp; or &nbsp;
            <BlackBgLink text={"Sign up"} href={"/signup"} />
          </div>
        </div>
        <div className="landing-text">
          <h1 className="landing-heading">E-auctions made easy!</h1>
          <p className="landing-paragraph">
            Simple way for selling your unused products, or <br /> getting a
            deal on product you want!
          </p>
          <YellowBgLink text={"Start bidding"} href={"/login"} />
        </div>
        <img
          src={Auction}
          alt="Screenshot from our app"
          className="landing-image"
        />
      </div>
    </>
  );
}
