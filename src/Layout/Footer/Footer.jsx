import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <img src="/logo.png" alt="" />
      <div className="footer-desc">
        <h2>Keeping up with Shibet Inu Degen Dapp</h2>
        <p>
          Shibet Inu Degen Dapp’s official outlets and social profiles. Please
          be careful of scammers who maliciously replicate us!
        </p>
        <div className="social-div">
          <a href="#">
            <img src="/telegram.png" alt="" />
          </a>
          <a href="#">
            <img src="/twitter.png" alt="" />
          </a>
          <a href="#">
            <img src="/shibet.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
