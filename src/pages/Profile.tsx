import MyAuctions from "../components/MyAuctions";
import Bidding from "../components/Bidding";
import Won from "../components/Won";
import { useState } from "react";

export default function Profile() {
  const [showBidding, setShowBidding] = useState(false);
  const [showMyAuctions, setShowMyAuctions] = useState(false);
  const [showWon, setShowWon] = useState(false);

  return (
    <>
      <h1>profile</h1>
      <button
        onClick={function () {
          setShowBidding(true);
          setShowMyAuctions(false);
          setShowWon(false);
        }}
      >
        Bidding
      </button>
      <button
        onClick={function () {
          setShowBidding(false);
          setShowMyAuctions(true);
          setShowWon(false);
        }}
      >
        My auctions
      </button>
      <button
        onClick={function () {
          setShowBidding(false);
          setShowMyAuctions(false);
          setShowWon(true);
        }}
      >
        Won
      </button>
      {showMyAuctions ? <MyAuctions /> : null}
      {showBidding ? <Bidding /> : null}
      {showWon ? <Won /> : null}
    </>
  );
}
