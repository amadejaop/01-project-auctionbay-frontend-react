import TopNavigation from "../components/TopNavigation";
import Chair from "../assets/images/chair.jpeg";
import "../assets/styles/Auction.css";
import OutbidLg from "../components/tags/OutbidLg";
import ClockLg from "../components/tags/ClockLg";

export default function Auction() {
  return (
    <>
      <TopNavigation />
      <div className="item-container">
        <img
          src={Chair}
          alt="auctioned item"
          className="item-image"
          width={680}
          height={888}
        />
        <div className="item-description">
          <div className="item-bidding-status">
            <OutbidLg />
            <ClockLg />
          </div>
          <h2>Old wooden chair</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos molestias asperiores optio ipsam deleniti eum
            reprehenderit possimus, obcaecati nam aliquid aspernatur beatae,
            iure harum vel aperiam pariatur rem enim corporis laboriosam.
            Tempora veniam assumenda iusto expedita.
          </p>
          <form action="">
            <label htmlFor="bid">
              Bid
              <input type="number" placeholder="40" />
            </label>
            <button type="submit">Place bid</button>
          </form>
        </div>
        <div className="item-bidding">
          <h3>Bidding history</h3>
        </div>
      </div>
    </>
  );
}
