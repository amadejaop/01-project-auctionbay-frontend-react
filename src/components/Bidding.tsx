import "../assets/styles/MyAuctions.css";
import "../assets/styles/Bidding.css";
import Chair from "../assets/images/chair.jpeg";
import AuctionCard from "./AuctionCard";

export default function Bidding() {
  return (
    <>
      <div className="bidding-container">
        {Array.from({ length: 2 }, (_, key) => (
          <AuctionCard
            inProgress={false}
            done={false}
            winning={true}
            outbid={false}
            whiteTimer={false}
            time="24h"
            title="Old chair"
            price="65 €"
            imageUrl={Chair}
          />
        ))}

        {Array.from({ length: 3 }, (_, key) => (
          <AuctionCard
            inProgress={false}
            done={false}
            winning={false}
            outbid={true}
            whiteTimer={false}
            time="24h"
            title="Old chair"
            price="65 €"
            imageUrl={Chair}
          />
        ))}
      </div>
    </>
  );
}
