import MyAuctions from "../components/MyAuctions";
import Bidding from "../components/Bidding";
import Won from "../components/Won";
import { useState } from "react";
import TopNavigation from "../components/TopNavigation";
import "../assets/styles/Profile.css";

export default function Profile() {
  const [showBidding, setShowBidding] = useState(false);
  const [showMyAuctions, setShowMyAuctions] = useState(true);
  const [showWon, setShowWon] = useState(false);

  return (
    <>
      <TopNavigation />
      <h2 className="hello-title">Hello Jamal Reces!</h2>
      <div className="card-container">
        <div className="card black">
          <div>
            <p className="card-title">Earnings</p>
            <p className="subtitle">All-time</p>
          </div>
          <p className="number">324 €</p>
        </div>
        <div className="card">
          <div>
            <p className="card-title">Posted auctions</p>
            <p className="subtitle">All-time</p>
          </div>
          <p className="number">18</p>
        </div>
        <div className="card">
          <div>
            <p className="card-title">Currently bidding</p>
          </div>
          <p className="number">5</p>
        </div>
        <div className="card">
          <div>
            <p className="card-title">Currently winning</p>
          </div>
          <p className="number green">2</p>
        </div>
      </div>

      <div className="profilenav-container">
        <div className="profile-nav">
          <button
            className={showMyAuctions ? "active" : undefined}
            onClick={function () {
              setShowBidding(false);
              setShowMyAuctions(true);
              setShowWon(false);
            }}
          >
            My auctions
          </button>
          <button
            className={showBidding ? "active" : undefined}
            onClick={function () {
              setShowBidding(true);
              setShowMyAuctions(false);
              setShowWon(false);
            }}
          >
            Bidding
          </button>
          <button
            className={showWon ? "active" : undefined}
            onClick={function () {
              setShowBidding(false);
              setShowMyAuctions(false);
              setShowWon(true);
            }}
          >
            Won
          </button>
        </div>
      </div>

      {showMyAuctions ? <MyAuctions /> : null}
      {showBidding ? <Bidding /> : null}
      {showWon ? <Won /> : null}
    </>
  );
}
