import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <FontAwesomeIcon
        icon={faBars}
        className="bars mobile"
        onClick={() => setOpenSidebar(true)}
      />
      <div
        onClick={() => setOpenSidebar(false)}
        className={`overlay ${openSidebar ? "open-overlay" : ""}`}
      ></div>
      <div className={`sidebar ${openSidebar ? "open-side" : ""}`}>
        <FontAwesomeIcon
          icon={faXmark}
          className="mobile"
          onClick={() => setOpenSidebar(false)}
        />
        <div className="logo">
          <img src="/logo.png" alt="" />
          <h2>Probably nothing</h2>
        </div>
        <a
          onClick={() => setOpenSidebar(false)}
          href="#"
          className="side-link active-link"
        >
          <img src="/dice.png" alt="" />
          ETH Bet
        </a>
        <a onClick={() => setOpenSidebar(false)} href="#" className="side-link">
          <img src="/dice-eth.png" alt="" />
          To Bet with $??
        </a>
      </div>
    </>
  );
};

export default Sidebar;
