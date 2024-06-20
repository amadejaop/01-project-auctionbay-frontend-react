import YellowBgLink from "../components/YellowBgLink";
import BoldLink from "../components/BoldLink";
import Logo from "../assets/images/Logo.png";
import BlackBgLink from "../components/BlackBgLink";
import "../assets/styles/Home.css";
import Auction from "../assets/images/Auctions1.png";
import { useEffect, useState } from "react";
import Screenshot from "../assets/images/screenshot.png";

export default function Home() {
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
        {(width > breakpoint) ? <img
          src={Auction}
          alt="Screenshot from our app"
          className="landing-image"
        /> : (
          <div className="ss-container">
            <img src={Screenshot} alt="Screenshot form our app" />
          </div>
        )}
      </div>
    </>
  );
}
