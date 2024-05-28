import "../assets/styles/MyAuctions.css";
import "../assets/styles/Won.css";
import Card from "./Card";
import Chair from "../assets/images/chair.jpeg";

export default function Won() {
  return (
    <>
      <div className="won-container">
        {Array.from({ length: 11 }, (_, key) => (
          <Card
            inProgress={false}
            done={true}
            winning={false}
            outbid={false}
            time={""}
            title={"Old chair"}
            price="65 €"
            imageUrl={Chair}
          />
        ))}
      </div>
    </>
  );
}
