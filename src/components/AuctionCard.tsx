import Done from "./tags/Done";
import InProgress from "./tags/InProgress";
import Outbid from "./tags/Outbid";
import RedTimer from "./tags/RedTimer";
import WhiteTimer from "./tags/WhiteTimer";
import Winning from "./tags/Winning";
import "../assets/styles/AuctionCard.css";

interface AuctionCardProps {
  inProgress: boolean;
  done: boolean;
  winning: boolean;
  outbid: boolean;
  whiteTimer: boolean;
  time: string;
  title: string;
  price: string;
  imageUrl: string;
}

export default function AuctionCard(props: AuctionCardProps) {
  return (
    <div className="auctions-card-container">
      <div className="auctions-tags">
        {props.inProgress ? (
          <InProgress />
        ) : props.done ? (
          <Done />
        ) : props.winning ? (
          <Winning />
        ) : (
          <Outbid />
        )}
        {props.whiteTimer ? (
          <WhiteTimer time={props.time} />
        ) : (
          <RedTimer time={props.time} />
        )}
      </div>
      <p className="auctions-card-title">{props.title}</p>
      <p className="auctions-card-price">{props.price}</p>
      <img src={props.imageUrl} alt="Auction item" width={208} height={150} />
    </div>
  );
}
