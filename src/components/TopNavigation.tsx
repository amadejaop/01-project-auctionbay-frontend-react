import Logo from "../assets/images/Logo.png";
import PlusImage from "../assets/images/Vector.png";
import ProfilePicture from "../assets/images/Avatar.png";
import "../assets/styles/TopNavigation.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function TopNavigation() {
  const [addAuctionOpen, setAddAuctionOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileSettingsOpen, setProfileSettingsOpen] = useState(false);

  function openProfile() {
    setProfileOpen(true);
  }
  function closeProfile() {
    setProfileOpen(false);
  }

  function openAddAuction() {
    setAddAuctionOpen(true);
  }

  function closeAddAuction() {
    setAddAuctionOpen(false);
  }

  function openProfileSettings() {
    setProfileSettingsOpen(true);
  }

  function closeProfileSettings() {
    setProfileSettingsOpen(false);
  }

  return (
    <>
      <div className="topbar">
        <div className="left-side">
          <img
            className="yellow-logo"
            src={Logo}
            alt="Company logo"
            width={32}
            height={32}
          />
          <nav>
            <ul className="left-nav">
              <li>
                <NavLink to="/auctions">
                  <svg
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.9978 2.69L14.9978 7.19V15H12.9978V9H6.9978V15H4.9978V7.19L9.9978 2.69ZM9.9978 0L-0.00219727 9H2.9978V17H8.9978V11H10.9978V17H16.9978V9H19.9978L9.9978 0Z"
                      fill="#000000"
                    />
                  </svg>
                  Auctions
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00002 4.00002C8.73335 4.00002 9.33335 4.60002 9.33335 5.33335C9.33335 6.06669 8.73335 6.66669 8.00002 6.66669C7.26669 6.66669 6.66669 6.06669 6.66669 5.33335C6.66669 4.60002 7.26669 4.00002 8.00002 4.00002ZM8.00002 10.6667C9.80002 10.6667 11.8667 11.5267 12 12H4.00002C4.15335 11.52 6.20669 10.6667 8.00002 10.6667ZM8.00002 2.66669C6.52669 2.66669 5.33335 3.86002 5.33335 5.33335C5.33335 6.80669 6.52669 8.00002 8.00002 8.00002C9.47335 8.00002 10.6667 6.80669 10.6667 5.33335C10.6667 3.86002 9.47335 2.66669 8.00002 2.66669ZM8.00002 9.33335C6.22002 9.33335 2.66669 10.2267 2.66669 12V13.3334H13.3334V12C13.3334 10.2267 9.78002 9.33335 8.00002 9.33335Z"
                      fill="#000000"
                    />
                  </svg>
                  Profile
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right-nav">
          <button onClick={openAddAuction}>
            <img
              className="plus-icon"
              src={PlusImage}
              alt="Add auction"
              width={14}
              height={14}
            />
          </button>
          {addAuctionOpen && (
            <div className="addauction-container">
              <h3>Add auction</h3>
              <form action="" className="addauction-form">
                <div className="add-img">
                  <button>Add image</button>
                </div>
                <label htmlFor="title" className="firstlabel">Title<input type="text" placeholder="Write item name here" /></label>
                <label htmlFor="description">Description<textarea name="description" id="description">Write description here...</textarea></label>
                <div className="price-date">
                  <label htmlFor="startingPrice">Starting price<input type="number" placeholder="price" /></label>
                  <label htmlFor="endDate">End date<input type="text" placeholder="dd.mm.yyyy" /></label>
                </div>
                <div className="formbuttons">
                  <button onClick={closeAddAuction} className="cancel-btn">Cancel</button>
                  <button type="submit">Start auction</button>
                </div>
              </form>
            </div>
          )}
          <button onClick={openProfile}>
            <img src={ProfilePicture} alt="Avatar" width={56} height={56} />
          </button>
          {profileOpen && (
            <div className="profilemodal-container">
              <button className="white-btn" onClick={openProfileSettings}>
                <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9532 7.6535C11.9799 7.44016 11.9999 7.22683 11.9999 7.00016C11.9999 6.7735 11.9799 6.56016 11.9532 6.34683L13.3599 5.24683C13.4866 5.14683 13.5199 4.96683 13.4399 4.82016L12.1066 2.5135C12.0466 2.40683 11.9332 2.34683 11.8132 2.34683C11.7732 2.34683 11.7332 2.3535 11.6999 2.36683L10.0399 3.0335C9.69323 2.76683 9.31989 2.54683 8.91323 2.38016L8.65989 0.613496C8.63989 0.453496 8.49989 0.333496 8.33323 0.333496H5.66656C5.49989 0.333496 5.35989 0.453496 5.33989 0.613496L5.08656 2.38016C4.67989 2.54683 4.30656 2.7735 3.95989 3.0335L2.29989 2.36683C2.25989 2.3535 2.21989 2.34683 2.17989 2.34683C2.06656 2.34683 1.95323 2.40683 1.89323 2.5135L0.559893 4.82016C0.473226 4.96683 0.513226 5.14683 0.639893 5.24683L2.04656 6.34683C2.01989 6.56016 1.99989 6.78016 1.99989 7.00016C1.99989 7.22016 2.01989 7.44016 2.04656 7.6535L0.639893 8.7535C0.513226 8.8535 0.479893 9.0335 0.559893 9.18016L1.89323 11.4868C1.95323 11.5935 2.06656 11.6535 2.18656 11.6535C2.22656 11.6535 2.26656 11.6468 2.29989 11.6335L3.95989 10.9668C4.30656 11.2335 4.67989 11.4535 5.08656 11.6202L5.33989 13.3868C5.35989 13.5468 5.49989 13.6668 5.66656 13.6668H8.33323C8.49989 13.6668 8.63989 13.5468 8.65989 13.3868L8.91323 11.6202C9.31989 11.4535 9.69323 11.2268 10.0399 10.9668L11.6999 11.6335C11.7399 11.6468 11.7799 11.6535 11.8199 11.6535C11.9332 11.6535 12.0466 11.5935 12.1066 11.4868L13.4399 9.18016C13.5199 9.0335 13.4866 8.8535 13.3599 8.7535L11.9532 7.6535ZM10.6332 6.5135C10.6599 6.72016 10.6666 6.86016 10.6666 7.00016C10.6666 7.14016 10.6532 7.28683 10.6332 7.48683L10.5399 8.24016L11.1332 8.70683L11.8532 9.26683L11.3866 10.0735L10.5399 9.7335L9.84656 9.4535L9.24656 9.90683C8.95989 10.1202 8.68656 10.2802 8.41323 10.3935L7.70656 10.6802L7.59989 11.4335L7.46656 12.3335H6.53323L6.40656 11.4335L6.29989 10.6802L5.59323 10.3935C5.30656 10.2735 5.03989 10.1202 4.77323 9.92016L4.16656 9.4535L3.45989 9.74016L2.61323 10.0802L2.14656 9.2735L2.86656 8.7135L3.45989 8.24683L3.36656 7.4935C3.34656 7.28683 3.33323 7.1335 3.33323 7.00016C3.33323 6.86683 3.34656 6.7135 3.36656 6.5135L3.45989 5.76016L2.86656 5.2935L2.14656 4.7335L2.61323 3.92683L3.45989 4.26683L4.15323 4.54683L4.75323 4.0935C5.03989 3.88016 5.31323 3.72016 5.58656 3.60683L6.29323 3.32016L6.39989 2.56683L6.53323 1.66683H7.45989L7.58656 2.56683L7.69323 3.32016L8.39989 3.60683C8.68656 3.72683 8.95323 3.88016 9.21989 4.08016L9.82656 4.54683L10.5332 4.26016L11.3799 3.92016L11.8466 4.72683L11.1332 5.2935L10.5399 5.76016L10.6332 6.5135ZM6.99989 4.3335C5.52656 4.3335 4.33323 5.52683 4.33323 7.00016C4.33323 8.4735 5.52656 9.66683 6.99989 9.66683C8.47323 9.66683 9.66656 8.4735 9.66656 7.00016C9.66656 5.52683 8.47323 4.3335 6.99989 4.3335ZM6.99989 8.3335C6.26656 8.3335 5.66656 7.7335 5.66656 7.00016C5.66656 6.26683 6.26656 5.66683 6.99989 5.66683C7.73323 5.66683 8.33323 6.26683 8.33323 7.00016C8.33323 7.7335 7.73323 8.3335 6.99989 8.3335Z"
                  fill="#071015"
                />
              </svg>
              Profile settings</button>
              <button className="bordered-btn" onClick={closeProfile}>Log out</button>
            </div>
          )}
           {profileSettingsOpen && (
              <div className="profilesettings-container">
                <h3>Profile settings</h3>
                <form action="">
                  <div className="firstlast">
                    <label htmlFor="settingsName">Name <input type="text" value="Jamal" /></label>
                    <label htmlFor="settingsSurname">Surname <input type="text" value="Reces" /></label>
                  </div>
                  <label htmlFor="settingsEmail">Email <input type="email" value="jamal.reces@gmail.com" /></label>
                  <button type="button">Change password</button>
                  <button type="button">Change profile picture</button>
                  <div className="changesettings-btns">
                    <button type="button" onClick={closeProfileSettings}>Cancel</button>
                    <button type="submit" onClick={closeProfileSettings}>Save changes</button>
                  </div>
                </form>

              </div>
            )}
        </div>
      </div>
    </>
  );
}
