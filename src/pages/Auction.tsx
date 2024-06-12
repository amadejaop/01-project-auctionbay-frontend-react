import TopNavigation from "../components/TopNavigation";
import Chair from "../assets/images/chair.jpeg";
import "../assets/styles/Auction.css";
import OutbidLg from "../components/tags/OutbidLg";
import ClockLg from "../components/tags/ClockLg";
import User1 from "../assets/images/user1.jpeg";
import User2 from "../assets/images/user2.jpeg";
import User from "../assets/images/Avatar.png";
import { useState } from "react";

export default function Auction() {
  const [isShown, setIsShown] = useState(false);
  const [price, setPrice] = useState(0);
  const [dateNow, setDateNow] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const priceInt = parseInt(event.target.value);
    setPrice(priceInt);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    let time = new Date();
    let hours = time.getHours() + 2;
    let minutes = time.getMinutes();
    let day = time.getDate();
    let month = time.getMonth() + 1;
    let year = time.getFullYear();
    setDateNow(hours + ":" + minutes + " " + day + "." + month + "." + year);

    setIsShown(true);
  };

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
          <form action="" className="additem">
            <label htmlFor="price">
              Bid
              <input
                type="number"
                placeholder="40"
                value={price}
                id="price"
                name="price"
                onChange={handleChange}
              />
            </label>
            <button type="submit" onClick={handleSubmit}>
              Place bid
            </button>
          </form>
        </div>
        <div className="item-bidding">
          <h3>Bidding history({isShown ? "3" : "2"})</h3>
          {isShown && (
            <div className="user-bid">
              <div className="user-info">
                <img src={User} alt="user avatar" width={32} height={32} />
                <p className="bid-username">Jamal Reces</p>
              </div>
              <div className="bid-date-price">
                <p className="bid-date">{dateNow}</p>
                <p className="bid-price">{price} €</p>
              </div>
            </div>
          )}

          <div className="user-bid">
            <div className="user-info">
              <img src={User1} alt="user avatar" width={32} height={32} />
              <p className="bid-username">Joanes Boyl</p>
            </div>
            <div className="bid-date-price">
              <p className="bid-date">14:31 22.6.2023</p>
              <p className="bid-price">32 €</p>
            </div>
          </div>

          <div className="user-bid">
            <div className="user-info">
              <img src={User2} alt="user avatar" width={32} height={32} />
              <p className="bid-username">Bigi Smols</p>
            </div>
            <div className="bid-date-price">
              <p className="bid-date">14:31 22.6.2023</p>
              <p className="bid-price">29 €</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
