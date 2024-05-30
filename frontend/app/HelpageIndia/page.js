import React from 'react';
import { BiUpvote, BiDownvote, BiBookmark } from "react-icons/bi";
import { AiOutlineRetweet, AiOutlineMessage } from 'react-icons/ai';
import './HelpageIndia.css';

const HelpageIndia = () => {
  return (
    <div className="helpage-india">
      <div className='helpage-india-inner'>
      <div className="header">
        <img src="https://pbs.twimg.com/profile_images/1295240791837704194/tVJ1DeSm_400x400.jpg" alt="User" className="avatar" />
        <h1 className="ngo-name">Helpage India</h1>
      </div>
      <div className="content">
        <h2 className="title">Crowdfunding Campaign for Clean Water</h2>
        <p className="description">Support our campaign to provide clean water to remote villages in Odisha. Many lack access to clean water, leading to health issues. Your help can install purification systems and wells for sustainable water access.</p>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: "70%" }}></div>
        </div>
        <div className="fund-details">
          <p className="raised-amount">Raised: Rs. 7000</p>
          <p className="goal-amount">Goal: Rs. 10000</p>
        </div>
        <div className="payment-options">
          <h3>Donate Now</h3>
          <div className="payment-buttons">
            <button className="paytm-button">UPI</button>
            <button className="paytm-button">PhonePe</button>
            <button className="paytm-button">Paytm</button>
            <button className="paypal-button">PayPal</button>
            {/* Add other payment options */}
          </div>
          <div className="upi-qr-code">
            {/* Add UPI QR code */}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default HelpageIndia;
