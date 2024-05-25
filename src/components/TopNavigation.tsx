import Logo from "../assets/images/Logo.png";

export default function TopNavigation() {
  return (
    <>
      <div>
        <img className="yellow-logo" src={Logo} alt="Company logo" />
        <nav>
          <ul>
            <li>
              <a href="/auctions">Auctions</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
          </ul>
        </nav>
      </div>
      <div></div>
    </>
  );
}
