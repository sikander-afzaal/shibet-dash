import {
  faBell,
  faRefresh,
  faWallet,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="left-topbar">
        <FontAwesomeIcon icon={faUser} className="active-top" />
        <FontAwesomeIcon icon={faWallet} />
        <FontAwesomeIcon icon={faRefresh} />
      </div>
      <div className="notif">
        <p>Notifications</p>
        <div className="bell">
          <div className="notif-dot"></div>
          <FontAwesomeIcon icon={faBell} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
