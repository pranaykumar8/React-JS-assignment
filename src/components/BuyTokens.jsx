import React, { useState } from "react";
import "../components/BuyTokens.css";


const BuyTokensAndFAQ = () => {
  const [selectedTokens, setSelectedTokens] = useState(250);
  const [price, setPrice] = useState(20);
  const [customAmount, setCustomAmount] = useState("");
  const tax = 1;

  const tokenPackages = [
    { tokens: 50, price: 5 },
    { tokens: 100, price: 9 },
    { tokens: 250, price: 20, bestValue: true },
    { tokens: 500, price: 35 },
    { tokens: 1000, price: 60 },
  ];

  const handleTokenSelection = (tokens, price) => {
    setSelectedTokens(tokens);
    setPrice(price);
    setCustomAmount("");
  };

  return (
    <div style={styles.container}>
      {/* Buy Tokens Section */}
      <div className="buy-tokens-container">
        <div className="buy-tokens-wrapper">
          <h2 className="buy-tokens-title">Buy Tokens</h2>
          <div className="buy-tokens-grid">
            <div className="token-selection">
              <h3>Select Token Package</h3>
              <div className="token-packages">
                {tokenPackages.map((pkg) => (
                  <button
                    key={pkg.tokens}
                    className={`token-button ${selectedTokens === pkg.tokens ? "selected" : ""}`}
                    onClick={() => handleTokenSelection(pkg.tokens, pkg.price)}
                  >
                    <p>{pkg.tokens} Tokens</p>
                    <p>${pkg.price}</p>
                    <p>${(pkg.price / pkg.tokens).toFixed(2)}/token</p>
                    {pkg.bestValue && <span className="best-value-badge">Best Value</span>}
                  </button>
                ))}
              </div>
              <div className="custom-amount-container">
                <label>Custom Amount</label>
                <div className="relative">
                  <input
                    type="number"
                    className="custom-amount-input"
                    placeholder="Enter token amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                  />
                  <span className="input-price-label">
                    ${customAmount ? (customAmount * 0.08).toFixed(2) : "0.00"}
                  </span>
                </div>
              </div>
            </div>
            <div className="order-summary">
              <h3>Order Summary</h3>
              <div className="order-details">
                <p>Tokens: {selectedTokens}</p>
                <p>Price: ${price}</p>
                <p>Tax: ${tax}</p>
                <p className="total-amount">Total: ${price + tax}</p>
              </div>
              <button className="proceed-button">Proceed to Payment</button>
              <button className="cancel-button">Cancel</button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment & FAQ Section */}
      <div style={styles.section}>
        <h3 style={styles.heading}>Payment Method</h3>
        <div style={styles.paymentBox}>💳 Credit/Debit Card</div>
        <div style={styles.paymentBox}>💰 PayPal</div>
        <div style={styles.paymentBox}>🏦 Bank Transfer</div>
      </div>
      <div style={styles.section}>
        <h3 style={styles.heading}>Frequently Asked Questions</h3>
        <div style={styles.faqContainer}>
          <div style={styles.faqBox}>
            <strong>How do tokens work?</strong>
            <p>Tokens are used to participate in bounties and fund projects within our community.</p>
          </div>
          <div style={styles.faqBox}>
            <strong>Are there any refunds?</strong>
            <p>Token purchases are non-refundable once the transaction is complete.</p>
          </div>
          <div style={styles.faqBox}>
            <strong>Where can I use tokens?</strong>
            <p>Use tokens across our platform for bounties, rewards, and project funding.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "80%",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  section: {
    background: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  heading: {
    marginBottom: "10px",
  },
  paymentBox: {
    background: "#fff",
    padding: "10px 15px",
    borderRadius: "5px",
    marginBottom: "10px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  },
  faqContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  faqBox: {
    background: "#fff",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    width: "30%",
  },
};

export default BuyTokensAndFAQ;
