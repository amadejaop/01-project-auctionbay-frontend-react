import Image from "../assets/images/Image.png";
import "../assets/styles/SideImage.css";

export default function SideImage() {
  return (
    <div className="aside">
      <img src={Image} alt="Auction cards screenshot" className="side-image" />
    </div>
  );
}
