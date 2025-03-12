// // import { useState } from "react";

// // const BuyTokens = () => {
// //   const [selectedTokens, setSelectedTokens] = useState(250);
// //   const [price, setPrice] = useState(20);
// //   const [customAmount, setCustomAmount] = useState("");
// //   const tax = 1;

// //   const tokenPackages = [
// //     { tokens: 50, price: 5 },
// //     { tokens: 100, price: 9 },
// //     { tokens: 250, price: 20, bestValue: true },
// //     { tokens: 500, price: 35 },
// //     { tokens: 1000, price: 60 },
// //   ];

// //   const handleTokenSelection = (tokens, price) => {
// //     setSelectedTokens(tokens);
// //     setPrice(price);
// //     setCustomAmount("");
// //   };

// //   return (
// //     <div className="container">
// //       <div className="card">
// //         <h2 className="title">Buy Tokens</h2>
// //         <div className="token-grid">
// //           {tokenPackages.map((pkg) => (
// //             <button
// //               key={pkg.tokens}
// //               className={`token-button ${
// //                 selectedTokens === pkg.tokens ? "selected" : ""
// //               }`}
// //               onClick={() => handleTokenSelection(pkg.tokens, pkg.price)}
// //             >
// //               <p className="token-text">{pkg.tokens} Tokens</p>
// //               <p>${pkg.price}</p>
// //               <p className="sub-text">${(pkg.price / pkg.tokens).toFixed(2)}/token</p>
// //               {pkg.bestValue && <span className="best-value">Best Value</span>}
// //             </button>
// //           ))}
// //         </div>

// //         <input
// //           type="number"
// //           placeholder="Enter token amount"
// //           className="input"
// //           value={customAmount}
// //           onChange={(e) => setCustomAmount(e.target.value)}
// //         />

// //         <h3 className="section-title">Payment Method</h3>
// //         <div className="payment-methods">
// //           <button className="payment-button">Credit/Debit Card</button>
// //           <button className="payment-button">PayPal</button>
// //           <button className="payment-button">Bank Transfer</button>
// //         </div>

// //         <div className="summary-card">
// //           <h3 className="section-title">Order Summary</h3>
// //           <p>Tokens: {selectedTokens}</p>
// //           <p>Price: ${price}</p>
// //           <p>Tax: ${tax}</p>
// //           <p className="total">Total: ${price + tax}</p>
// //           <button className="proceed-button">Proceed to Payment</button>
// //           <button className="cancel-button">Cancel</button>
// //         </div>

// //         <h3 className="section-title">Frequently Asked Questions</h3>
// //         <div className="faq-grid">
// //           <div className="faq-item">
// //             <h4>How do tokens work?</h4>
// //             <p>Tokens are used to participate in bounties and fund projects.</p>
// //           </div>
// //           <div className="faq-item">
// //             <h4>Are there any refunds?</h4>
// //             <p>Token purchases are non-refundable.</p>
// //           </div>
// //           <div className="faq-item">
// //             <h4>Where can I use tokens?</h4>
// //             <p>Tokens are used for rewards and funding.</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BuyTokens;

// import { useState } from "react";

// const BuyTokens = () => {
//   const [selectedTokens, setSelectedTokens] = useState(250);
//   const [price, setPrice] = useState(20);
//   const [customAmount, setCustomAmount] = useState("");
//   const tax = 1;

//   const tokenPackages = [
//     { tokens: 50, price: 5 },
//     { tokens: 100, price: 9 },
//     { tokens: 250, price: 20, bestValue: true },
//     { tokens: 500, price: 35 },
//     { tokens: 1000, price: 60 },
//   ];

//   const handleTokenSelection = (tokens, price) => {
//     setSelectedTokens(tokens);
//     setPrice(price);
//     setCustomAmount("");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center p-6">
//       <div className="max-w-4xl w-full">
//         <h2 className="text-2xl font-bold mb-6">Buy Tokens</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {/* Token Selection */}
//           <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
//             <h3 className="text-lg font-semibold mb-4">Select Token Package</h3>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               {tokenPackages.map((pkg) => (
//                 <button
//                   key={pkg.tokens}
//                   className={`border p-4 rounded-lg text-center ${
//                     selectedTokens === pkg.tokens
//                       ? "border-black bg-gray-100"
//                       : "border-gray-300"
//                   }`}
//                   onClick={() => handleTokenSelection(pkg.tokens, pkg.price)}
//                 >
//                   <p className="text-lg font-semibold">{pkg.tokens} Tokens</p>
//                   <p className="text-gray-700">${pkg.price}</p>
//                   <p className="text-sm text-gray-500">
//                     ${(pkg.price / pkg.tokens).toFixed(2)}/token
//                   </p>
//                   {pkg.bestValue && (
//                     <span className="mt-2 inline-block bg-black text-white text-xs px-2 py-1 rounded">
//                       Best Value
//                     </span>
//                   )}
//                 </button>
//               ))}
//             </div>

//             {/* Custom Amount */}
//             <div className="mt-4">
//               <label className="block text-gray-700 text-sm font-medium">
//                 Custom Amount
//               </label>
//               <div className="relative mt-2">
//                 <input
//                   type="number"
//                   className="w-full border-gray-300 rounded-lg p-2 pr-10"
//                   placeholder="Enter token amount"
//                   value={customAmount}
//                   onChange={(e) => setCustomAmount(e.target.value)}
//                 />
//                 <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
//                   ${customAmount ? customAmount * 0.08 : "0.00"}
//                 </span>
//               </div>
//             </div>

//             {/* Payment Methods */}
//             <h3 className="text-lg font-semibold mt-6 mb-4">Payment Method</h3>
//             <div className="space-y-2">
//               <button className="w-full border border-gray-300 p-3 rounded-lg flex items-center gap-2">
//                 Credit/Debit Card
//               </button>
//               <button className="w-full border border-gray-300 p-3 rounded-lg flex items-center gap-2">
//                 PayPal
//               </button>
//               <button className="w-full border border-gray-300 p-3 rounded-lg flex items-center gap-2">
//                 Bank Transfer
//               </button>
//             </div>
//           </div>

//           {/* Order Summary */}
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
//             <div className="text-gray-700 space-y-2">
//               <p>Tokens: {selectedTokens}</p>
//               <p>Price: ${price}</p>
//               <p>Tax: ${tax}</p>
//               <p className="font-semibold text-lg">Total: ${price + tax}</p>
//             </div>
//             <button className="w-full bg-black text-white p-3 rounded-lg mt-4">
//               Proceed to Payment
//             </button>
//             <button className="w-full border border-gray-300 p-3 rounded-lg mt-2">
//               Cancel
//             </button>
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <h3 className="text-lg font-semibold mt-8">Frequently Asked Questions</h3>
//         <div className="grid md:grid-cols-3 gap-4 mt-4">
//           <div className="bg-white p-4 rounded-lg shadow">
//             <h4 className="font-semibold">How do tokens work?</h4>
//             <p className="text-sm text-gray-600">
//               Tokens are used to participate in bounties and fund projects.
//             </p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow">
//             <h4 className="font-semibold">Are there any refunds?</h4>
//             <p className="text-sm text-gray-600">
//               Token purchases are non-refundable.
//             </p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow">
//             <h4 className="font-semibold">Where can I use tokens?</h4>
//             <p className="text-sm text-gray-600">
//               Use tokens for rewards and project funding.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyTokens;


import { useState } from "react";
import "../components/BuyTokens.css"; // Import the CSS file

const BuyTokens = () => {
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
    <div className="buy-tokens-container">
      <div className="buy-tokens-wrapper">
        <h2 className="buy-tokens-title">Buy Tokens</h2>
        <div className="buy-tokens-grid">
          {/* Token Selection */}
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

            {/* Custom Amount */}
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

          {/* Order Summary */}
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
  );
};

export default BuyTokens;
