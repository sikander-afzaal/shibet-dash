import "./Bet.css";
import {
  faCircleCheck,
  faCopy,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

const Bet = () => {
  return (
    <div className="bet page">
      <h1>Registering</h1>
      <div className="row">
        <div className="col">
          <h2>Current Betting</h2>
          <div className="black-box">
            <div className="row">
              <p>My Deposit(ETH)</p>
              <h6>0 ETH</h6>
            </div>
            <div className="row">
              <p>My Predictions</p>
              <h6 style={{ color: "hsla(104, 100%, 50%, 1)" }}>Not Bet</h6>
            </div>
            <div className="row">
              <p>Betters</p>
              <h6>0</h6>
            </div>{" "}
            <div className="row">
              <p>Token</p>
              <h6>
                0x0000...0000{" "}
                <FontAwesomeIcon
                  icon={faCopy}
                  style={{ color: "var(--orange)" }}
                />
              </h6>
            </div>{" "}
            <div className="row">
              <p>Target Token</p>
              <h6></h6>
            </div>{" "}
            <div className="row">
              <p>Target Price</p>
              <h6>0%</h6>
            </div>
            <div className="row">
              <p>Current Price</p>
              <h6>0%</h6>
            </div>
          </div>
        </div>
        <div className="col">
          <h2>My History</h2>
          <div className="black-box">
            <div className="row">
              <p>My Deposit(ETH)</p>
              <h6>0.0000 ETH</h6>
            </div>
            <div className="row">
              <p>Deposited Times</p>
              <h6>0</h6>
            </div>
            <div className="row">
              <p>Won</p>
              <h6>0.0000 ETH</h6>
            </div>{" "}
            <div className="row">
              <p>Lost</p>
              <h6>0.0000 ETH</h6>
            </div>{" "}
            <div className="row">
              <p>Bet Times</p>
              <h6>0</h6>
            </div>{" "}
            <div className="row">
              <p>Won Times</p>
              <h6>0</h6>
            </div>
            <div className="row">
              <p>Winning Rate</p>
              <h6>0.00%</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row row2">
        <div className="left-row">
          <div className="row2-box">
            <h3>Under</h3>
            <h4>
              <span>0</span> $ETH
            </h4>
          </div>
          <div className="row2-box">
            <h3>Over</h3>
            <h4>
              <span>0</span> $ETH
            </h4>
          </div>
        </div>
        <div className="row2-box">
          <div className="global">
            <h5>Global</h5>
            <div className="global-right">
              <p>
                Deposited (ETH) <span>0 ETH</span>
              </p>
              <p>
                Register Period <span>0 Hours</span>
              </p>
              <p>
                Total Period <span>0 Hours</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="balance">
        <div className="left-balance">
          <div className="col-balance">
            <div className="row-balance">
              <h2>Min:</h2>
              <p>
                <span>0</span> $ETH
              </p>
            </div>
            <div className="row-balance">
              <h2>Balance:</h2>
              <p>
                <span>0</span> $ETH
              </p>
            </div>
          </div>
          <input type="text" placeholder="0" />
          <div className="btn-div">
            <button>Under</button>
            <button>Over</button>
            <button>Make a Bet</button>
          </div>
        </div>
        <div className="right-balance">
          <h3>Betters</h3>
          <div className="line"></div>
          <div className="address">
            <p>No Address</p>
            <div className="right-address">
              <h4>Deposit</h4>
              <h4>Prediction</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col mt-20">
        <h2>Target Token to Bet to</h2>
        <div className="target">
          <div className="target-col">
            <h4>Address</h4>
            <div className="input-div">
              <input type="text" />
              <div>
                <FontAwesomeIcon icon={faCopy} />
                <img src="/redirect.png" alt="" />
              </div>
            </div>
          </div>
          <div className="target-col">
            <h4>Symbol</h4>
            <div className="input-div">
              <input type="text" />
            </div>
          </div>
          <div className="target-col">
            <h4>
              Price <FontAwesomeIcon icon={faPlusSquare} />
            </h4>
            <div className="input-div">
              <input type="text" />
              <div>
                <FontAwesomeIcon icon={faXmarkCircle} />
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bet;
