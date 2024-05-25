import Logo from "../assets/images/Logo.png";
import PlusImage from "../assets/images/Vector.png";
import ProfilePicture from "../assets/images/Avatar.png";
import "../assets/styles/TopNavigation.css";
import { NavLink } from "react-router-dom";

export default function TopNavigation() {
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
          <img
            className="plus-icon"
            src={PlusImage}
            alt="Add auction"
            width={14}
            height={14}
          />
          <img src={ProfilePicture} alt="Avatar" width={56} height={56} />
        </div>
      </div>
    </>
  );
}
