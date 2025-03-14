import React from "react";
import "./RedeemTokens.css";

const RedeemTokens = () => {
  return (
    <div className="container">
      <h2 className="title">Redeem Tokens</h2>
      <div className="cards-container">
        <div className="card">
          <h3>Raise a Bounty</h3>
          <input type="text" placeholder="Enter question URL" className="input" />
          <input type="range" min="0" max="1000" className="range" />
          <button className="button">Confirm Bounty</button>
        </div>
        <div className="card">
          <h3>Fund a Task</h3>
          <input type="text" placeholder="Enter task ID" className="input" />
          <input type="text" placeholder="Enter amount" className="input" />
          <button className="button">Fund Task</button>
        </div>
        <div className="card">
          <h3>Withdraw to Bank</h3>
          <select className="select">
            <option>Select account</option>
          </select>
          <button className="button secondary">Add New Bank Account</button>
          <input type="text" placeholder="Enter amount" className="input" />
          <button className="button">Submit Withdrawal</button>
        </div>
      </div>
      <div className="info-section">
        <div className="premium-features">
          <h3>Premium Features</h3>
          <div className="feature"><span>⭐ Priority Task Assignment</span><span className="tokens">300 Tokens</span></div>
          <div className="feature"><span>🏅 Community Badge</span><span className="tokens">500 Tokens</span></div>
        </div>
        <div className="activity-log">
          <h3>Activity Log</h3>
          <p>Funded Project #1234 - <span className="tokens">1000 Tokens</span> <span className="time">2h ago</span></p>
          <p>Raised Bounty #5678 - <span className="tokens">500 Tokens</span> <span className="time">1d ago</span></p>
        </div>
      </div>
      <div className="faq">
        <h3>FAQ</h3>
        <div className="faq-item">
          <p><strong>Where can I use my tokens?</strong></p>
          <p>Tokens can be used for raising bounties, funding projects, and unlocking premium features.</p>
        </div>
        <div className="faq-item">
          <p><strong>Can I transfer tokens to another user?</strong></p>
          <p>Currently, token transfers between users are not supported.</p>
        </div>
        <div className="faq-item">
          <p><strong>Are redeemed tokens refundable?</strong></p>
          <p>No, all token redemptions are final and non-refundable.</p>
        </div>
      </div>
    </div>
  );
};

export default RedeemTokens;

