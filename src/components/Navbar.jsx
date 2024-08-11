import { useNavigate, useLocation } from "react-router-dom";
import OfferIcon from "../assets/svg/localOfferIcon.svg";
import ExploreIcon from "../assets/svg/exploreIcon.svg";
import PersonOutlineIcon from "../assets/svg/personOutlineIcon.svg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route == location.pathname) {
      return true;
    }
  };

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li
            className={`navbarListItem ${pathMatchRoute("/") ? "c2" : "f8"}`}
            onClick={() => navigate("/")}
          >
            <img src={ExploreIcon} alt="Explore" width="36px" height="36px" />
            <p>Explore</p>
          </li>
          <li
            className={`navbarListItem ${
              pathMatchRoute("/offers") ? "c2" : "f8"
            }`}
            onClick={() => navigate("/offers")}
          >
            <img src={OfferIcon} alt="Offer" width="36px" height="36px" />
            <p>Offers</p>
          </li>
          <li
            className={`navbarListItem ${
              pathMatchRoute("/profile") ? "c2" : "f8"
            }`}
            onClick={() => navigate("/profile")}
          >
            <img
              src={PersonOutlineIcon}
              alt="Profile"
              width="36px"
              height="36px"
            />
            <p>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
