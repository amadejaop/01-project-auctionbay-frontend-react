import "../assets/styles/MyAuctions.css";
import Card from "./Card";
import Mic from "../assets/images/microphone.jpeg";
import Chair from "../assets/images/chair.jpeg";

export default function MyAuctions() {
  return (
    <>
      <div className="myauctions-container">
        <Card
          inProgress={true}
          done={false}
          winning={false}
          outbid={false}
          time={"30h"}
          title={"Rode vintage microphone"}
          price="123 €"
          imageUrl={Mic}
        />

        {Array.from({ length: 4 }, (_, key) => (
          <Card
            inProgress={true}
            done={false}
            winning={false}
            outbid={false}
            time={"30h"}
            title={"Old chair"}
            price="65 €"
            imageUrl={Chair}
          />
        ))}

        {Array.from({ length: 7 }, (_, key) => (
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
