import React from "react";
import Link from "next/link";
import "./LearnMore.css";

const LearnMore = () => {
  return (
    <div className="learn-more">
      <h1>About Madhyam</h1>
      <p className="description">
        Madhyam is a centralized hub where registered NGOs can maintain a
        profile with detailed information about their location, objectives,
        and ongoing initiatives. NGOs can post specific needs from different
        regions, enabling the platform to feature a crowdfunding section,
        empowering NGOs to raise funds for their initiatives directly. Madhyam
        allows NGOs to submit direct requests to the relevant government
        organizations in specific regions, ensuring that urgent needs and
        concerns are communicated efficiently.
      </p>
      <p className="description">
        In the future, Madhyam will enable content monetization by adding
        Google AdSense and allowing NGOs to put ads for their own campaigns
        and events. We will also enable requests from regions where there are
        no existing NGOs.
      </p>
      <Link href="/" className="button">
        Back to Home
      </Link>
    </div>
  );
};

export default LearnMore;