import "../assets/styles/MyAuctions.css";
import Card from "./Card";

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
          title={"Item1"}
          price="12 €"
          imageUrl={""}
        />

        <Card
          inProgress={false}
          done={false}
          winning={false}
          outbid={true}
          time={"30h"}
          title={"Item1"}
          price="12 €"
          imageUrl={""}
        />

        <Card
          inProgress={false}
          done={false}
          winning={true}
          outbid={false}
          time={"30h"}
          title={"Item1"}
          price="12 €"
          imageUrl={""}
        />

        <Card
          inProgress={false}
          done={true}
          winning={false}
          outbid={false}
          time={"30h"}
          title={"Item1"}
          price="12 €"
          imageUrl={""}
        />
      </div>
    </>
  );
}
