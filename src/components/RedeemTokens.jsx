// import React from "react";
// import "./RedeemTokens.css";

// const RedeemTokens = () => {
//   return (
//     <div className="container">
//       <h2 className="title">Redeem Tokens</h2>
//       <div className="cards-container">
//         <div className="card">
//           <h3>Raise a Bounty</h3>
//           <input type="text" placeholder="Enter question URL" className="input" />
//           <input type="range" min="0" max="1000" className="range" />
//           <button className="button">Confirm Bounty</button>
//         </div>
//         <div className="card">
//           <h3>Fund a Task</h3>
//           <input type="text" placeholder="Enter task ID" className="input" />
//           <input type="text" placeholder="Enter amount" className="input" />
//           <button className="button">Fund Task</button>
//         </div>
//         <div className="card">
//           <h3>Withdraw to Bank</h3>
//           <select className="select">
//             <option>Select account</option>
//           </select>
//           <button className="button secondary">Add New Bank Account</button>
//           <input type="text" placeholder="Enter amount" className="input" />
//           <button className="button">Submit Withdrawal</button>
//         </div>
//       </div>
//       <div className="info-section">
//         <div className="premium-features">
//           <h3>Premium Features</h3>
//           <div className="feature"><span>⭐ Priority Task Assignment</span><span className="tokens">300 Tokens</span></div>
//           <div className="feature"><span>🏅 Community Badge</span><span className="tokens">500 Tokens</span></div>
//         </div>
//         <div className="activity-log">
//           <h3>Activity Log</h3>
//           <p>Funded Project #1234 - <span className="tokens">1000 Tokens</span> <span className="time">2h ago</span></p>
//           <p>Raised Bounty #5678 - <span className="tokens">500 Tokens</span> <span className="time">1d ago</span></p>
//         </div>
//       </div>
//       <div className="faq">
//         <h3>FAQ</h3>
//         <div className="faq-item">
//           <p><strong>Where can I use my tokens?</strong></p>
//           <p>Tokens can be used for raising bounties, funding projects, and unlocking premium features.</p>
//         </div>
//         <div className="faq-item">
//           <p><strong>Can I transfer tokens to another user?</strong></p>
//           <p>Currently, token transfers between users are not supported.</p>
//         </div>
//         <div className="faq-item">
//           <p><strong>Are redeemed tokens refundable?</strong></p>
//           <p>No, all token redemptions are final and non-refundable.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RedeemTokens;

import React, { useState } from "react";

const BuyTokens = () => {
  const [selectedTokens, setSelectedTokens] = useState(250);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit/Debit Card");

  const tokenPackages = [
    { tokens: 50, price: 5, rate: 0.1 },
    { tokens: 100, price: 9, rate: 0.09 },
    { tokens: 250, price: 20, rate: 0.08, bestValue: true },
    { tokens: 500, price: 35, rate: 0.07 },
    { tokens: 1000, price: 60, rate: 0.06 },
  ];

  const selectedPackage = tokenPackages.find(pkg => pkg.tokens === selectedTokens) || { price: 0 };
  const tax = selectedPackage.price * 0.05;
  const total = selectedPackage.price + tax;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Buy Tokens</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Select Token Package</h3>
            <div className="grid grid-cols-3 gap-4">
              {tokenPackages.map(pkg => (
                <div
                  key={pkg.tokens}
                  className={`p-4 border rounded-lg text-center cursor-pointer ${selectedTokens === pkg.tokens ? "border-black bg-gray-200" : "border-gray-300"}`}
                  onClick={() => setSelectedTokens(pkg.tokens)}
                >
                  <p className="text-lg font-semibold">{pkg.tokens} Tokens</p>
                  <p className="text-sm">${pkg.price} (${pkg.rate}/token)</p>
                  {pkg.bestValue && <span className="text-xs text-green-600 font-semibold">Best Value</span>}
                </div>
              ))}
            </div>
            <input
              type="number"
              className="mt-4 w-full p-2 border rounded"
              placeholder="Enter token amount"
              value={customAmount}
              onChange={e => setCustomAmount(e.target.value)}
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
            {[
              "Credit/Debit Card",
              "PayPal",
              "Bank Transfer"
            ].map(method => (
              <div
                key={method}
                className={`p-4 border rounded-lg cursor-pointer ${paymentMethod === method ? "border-black bg-gray-200" : "border-gray-300"}`}
                onClick={() => setPaymentMethod(method)}
              >
                {method}
              </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-2">
              <div className="border p-4 rounded-lg">How do tokens work?</div>
              <div className="border p-4 rounded-lg">Are there any refunds?</div>
              <div className="border p-4 rounded-lg">Where can I use tokens?</div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow h-fit">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <p>Tokens: {selectedTokens}</p>
          <p>Price: ${selectedPackage.price.toFixed(2)}</p>
          <p>Tax: ${tax.toFixed(2)}</p>
          <p className="font-semibold">Total: ${total.toFixed(2)}</p>
          <button className="w-full bg-black text-white p-2 mt-4 rounded">Proceed to Payment</button>
          <button className="w-full mt-2 p-2 border rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default BuyTokens;

