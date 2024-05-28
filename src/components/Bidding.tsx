import "../assets/styles/MyAuctions.css";
import "../assets/styles/Bidding.css";
import Card from "./Card";
import Chair from "../assets/images/chair.jpeg";

export default function Bidding() {
  return (
    <>
      <div className="bidding-container">
        {Array.from({ length: 2 }, (_, key) => (
          <Card
            inProgress={false}
            done={false}
            winning={true}
            outbid={false}
            time={"24h"}
            title={"Old chair"}
            price="65 €"
            imageUrl={Chair}
          />
        ))}

        {Array.from({ length: 3 }, (_, key) => (
          <Card
            inProgress={false}
            done={false}
            winning={false}
            outbid={true}
            time={"24h"}
            title={"Old chair"}
            price="65 €"
            imageUrl={Chair}
          />
        ))}
      </div>
    </>
  );
}
