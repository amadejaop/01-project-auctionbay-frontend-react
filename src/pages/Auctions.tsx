import TopNavigation from "../components/TopNavigation";
import "../assets/styles/Auctions.css";
import AuctionCard from "../components/AuctionCard";
import Rubic from "../assets/images/rubic.jpeg";

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
      </div>
    </>
  );
}
