import { useState } from "react";
import Done from "./tags/Done";
import InProgress from "./tags/InProgress";
import Outbid from "./tags/Outbid";
import RedTimer from "./tags/RedTimer";
import WhiteTimer from "./tags/WhiteTimer";
import Winning from "./tags/Winning";
import "../assets/styles/EditAuction.css"
import Mic from "../assets/images/microphone.jpeg"

interface CardProps {
  inProgress: boolean;
  done: boolean;
  winning: boolean;
  outbid: boolean;
  time: string;
  title: string;
  price: string;
  imageUrl: string;
}

export default function Card(props: CardProps) {
  const [editAuction, setEditAuction] = useState(false);

  function openEditAuction() {
    setEditAuction(true);
  }

  function closeEditAuction() {
    setEditAuction(false);
  }

  return (
    <div className="auction-card">
      <div className="auction-status">
        {props.inProgress ? (
          <InProgress />
        ) : props.done ? (
          <Done />
        ) : props.winning ? (
          <Winning />
        ) : (
          <Outbid />
        )}
        {props.inProgress ? (
          <WhiteTimer time={props.time} />
        ) : props.done ? null : (
          <RedTimer time={props.time} />
        )}
      </div>
      <p className="auction-title">{props.title}</p>
      <p className="auction-price">{props.price}</p>
      <img
        src={props.imageUrl}
        alt="Auction item"
        width={208}
        height={props.done ? 198 : 150}
      />
      {props.done ? null : (
        <div className="auction-actions">
          <button type="button" className="delete-btn">
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.999674 10.6667C0.999674 11.4 1.59967 12 2.33301 12H7.66634C8.39967 12 8.99967 11.4 8.99967 10.6667V2.66667H0.999674V10.6667ZM2.33301 4H7.66634V10.6667H2.33301V4ZM7.33301 0.666667L6.66634 0H3.33301L2.66634 0.666667H0.333008V2H9.66634V0.666667H7.33301Z"
                fill="#071015"
              />
            </svg>
          </button>
          <button type="button" className="edit-btn" onClick={openEditAuction}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.37333 4.01333L7.98667 4.62667L1.94667 10.6667H1.33333V10.0533L7.37333 4.01333ZM9.77333 0C9.60667 0 9.43333 0.0666666 9.30667 0.193333L8.08667 1.41333L10.5867 3.91333L11.8067 2.69333C12.0667 2.43333 12.0667 2.01333 11.8067 1.75333L10.2467 0.193333C10.1133 0.06 9.94667 0 9.77333 0ZM7.37333 2.12667L0 9.5V12H2.5L9.87333 4.62667L7.37333 2.12667Z"
                fill="white"
              />
            </svg>
            Edit
          </button>
        </div>
      )}
      {editAuction && (
        <div className="editauction-container">
          <h3>Edit Auction</h3>
          <div className="changeimg">
            <img src={Mic} alt="auction item" width={501} height={168} />
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.00016 10.6667C1.00016 11.4 1.60016 12 2.3335 12H7.66683C8.40016 12 9.00016 11.4 9.00016 10.6667V2.66667H1.00016V10.6667ZM2.3335 4H7.66683V10.6667H2.3335V4ZM7.3335 0.666667L6.66683 0H3.3335L2.66683 0.666667H0.333496V2H9.66683V0.666667H7.3335Z" fill="white"/>
            </svg>
          </div>
          <label htmlFor="editTitle">Title <input type="text" /></label>
          <label htmlFor="editDescription">Description <input type="text" name="" id="" /></label>
          <label htmlFor="editEndDate">End date <div className="enddate-input"><input type="text" /></div></label>
          <div className="editauction-btns">
            <button type="button" onClick={closeEditAuction}>Discard changes</button>
            <button type="submit" onClick={closeEditAuction}>Edit auction</button>
          </div>
        </div>
      )}
    </div>
  );
}
