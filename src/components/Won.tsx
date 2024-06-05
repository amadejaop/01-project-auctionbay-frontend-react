import "../assets/styles/MyAuctions.css";
import "../assets/styles/Won.css";
import Chair from "../assets/images/chair.jpeg";
import AuctionCard from "./AuctionCard";

export default function Won() {
  return (
    <>
      <div className="won-container">
        {Array.from({ length: 11 }, (_, key) => (
          <AuctionCard
            inProgress={false}
            done={true}
            winning={false}
            outbid={false}
            whiteTimer={false}
            time=""
            title="Old chair"
            price="65 €"
            imageUrl={Chair}
          />
        ))}
      </div>
    </>
  );
}
