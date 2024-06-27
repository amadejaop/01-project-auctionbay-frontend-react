import TopNavigation from "../components/TopNavigation";
import "../assets/styles/Auctions.css";
import AuctionCard from "../components/AuctionCard";
import Rubic from "../assets/images/rubic.jpeg";
import Sofa from "../assets/images/sofa.jpeg";
import Mac2 from "../assets/images/mac2.jpeg";
import Mac from "../assets/images/mac.jpeg";
import Laptop from "../assets/images/laptop.jpeg";
import Ipad from "../assets/images/ipad.jpeg";
import Mouse from "../assets/images/mouse.jpeg";
import Chair from "../assets/images/chair.jpeg";
import Iphone from "../assets/images/iphone.jpeg";
import Dji from "../assets/images/dji.jpeg";
import Earphones from "../assets/images/earphones.jpeg";
import Polaroid from "../assets/images/polaroid.jpeg";
import Nest from "../assets/images/googlenest.jpeg";
import Redmote from "../assets/images/redmote.jpeg";
import Camcase from "../assets/images/camcase.jpeg";
import Jbl from "../assets/images/jbl.jpeg";
import Logitech from "../assets/images/logitech.jpeg";
import Tv from "../assets/images/tv.jpeg";

export default function Auctions() {
  return (
    <>
      <TopNavigation />
      <h2 className="auctions-title">Auctions</h2>
      <div className="auction-card-container">
        <AuctionCard
          inProgress={true}
          done={false}
          winning={false}
          outbid={false}
          whiteTimer={false}
          time="24h"
          title="Rubic cube"
          price="8 €"
          imageUrl={Rubic}
        />
        <AuctionCard
          inProgress={true}
          done={false}
          winning={false}
          outbid={false}
          whiteTimer={false}
          time="24h"
          title="Olive sofa"
          price="720 €"
          imageUrl={Sofa}
        />
        <AuctionCard
          inProgress={true}
          done={false}
          winning={false}
          outbid={false}
          whiteTimer={false}
          time="24h"
          title="Macbook Pro 15 2015"
          price="200 €"
          imageUrl={Laptop}
        />
        <AuctionCard
          inProgress={true}
          done={false}
          winning={false}
          outbid={false}
          whiteTimer={false}
          time="24h"
          title="iPad Pro 13inch"
          price="500 €"
          imageUrl={Ipad}
        />
        <AuctionCard
          inProgress={true}
          done={false}
          winning={false}
          outbid={false}
          whiteTimer={false}
          time="24h"
          title="Magic mouse"
          price="40 €"
          imageUrl={Mouse}
        />
        <a href="/auction"><AuctionCard
          inProgress={false}
          done={false}
          winning={true}
          outbid={false}
          whiteTimer={true}
          time="2 days"
          title="Old wooden chair"
          price="65 €"
          imageUrl={Chair}
        /></a>
        <AuctionCard
          inProgress={true}
          done={false}
          winning={false}
          outbid={false}
          whiteTimer={true}
          time="2 days"
          title="iPhone 11"
          price="160 €"
          imageUrl={Iphone}
        />
        <AuctionCard
          inProgress={true}
          done={false}
          winning={false}
          outbid={false}
          whiteTimer={true}
          time="2 days"
          title="DJI Mavic"
          price="253 €"
          imageUrl={Dji}
        />
        <AuctionCard
          inProgress={true}
          done={false}
          winning={false}
          outbid={false}
          whiteTimer={true}
          time="2 days"
          title="Earphones"
          price="77 €"
          imageUrl={Earphones}
        />
        <AuctionCard
          inProgress={true}
          done={false}
          winning={false}
          outbid={false}
          whiteTimer={true}
          time="3 days"
          title="iMac 27inch 2019 combo"
          price="600 €"
          imageUrl={Mac}
        />
        <AuctionCard
          inProgress={true}
          done={false}
          winning={false}
          outbid={false}
          whiteTimer={true}
          time="3 days"
          title="Polaroid - for parts"
          price="22 €"
          imageUrl={Polaroid}
        />
        <AuctionCard
          inProgress={true}
          done={false}
          winning={false}
          outbid={false}
          whiteTimer={true}
          time="3 days"
          title="Google Nest Red edition"
          price="32 €"
          imageUrl={Nest}
        />
        <AuctionCard
          inProgress={true}
          done={false}
          winning={false}
          outbid={false}
          whiteTimer={true}
          time="3 days"
          title="Redmote recorder"
          price="532 €"
          imageUrl={Redmote}
        />
        <AuctionCard
          inProgress={true}
          done={false}
          winning={false}
          outbid={false}
          whiteTimer={true}
          time="4 days"
          title="Camera case iPhone 13"
          price="102 €"
          imageUrl={Camcase}
        />
        <AuctionCard
          inProgress={true}
          done={false}
          winning={false}
          outbid={false}
          whiteTimer={true}
          time="4 days"
          title="JBL xm32"
          price="34 €"
          imageUrl={Jbl}
        />
        <AuctionCard
          inProgress={true}
          done={false}
          winning={false}
          outbid={false}
          whiteTimer={true}
          time="4 days"
          title="Logitech g wireless"
          price="55 €"
          imageUrl={Logitech}
        />
        <AuctionCard
          inProgress={true}
          done={false}
          winning={false}
          outbid={false}
          whiteTimer={true}
          time="6 days"
          title="Sony 50inch TV"
          price="162 €"
          imageUrl={Tv}
        />
        <AuctionCard
          inProgress={true}
          done={false}
          winning={false}
          outbid={false}
          whiteTimer={true}
          time="6 days"
          title="iMac 24inch 2014"
          price="149 €"
          imageUrl={Mac2}
        />
      </div>
    </>
  );
}
