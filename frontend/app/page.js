  import React from "react";
  import Link from "next/link";
  import "./homepage.css";

  const HomePage = () => {

    return (
      <div className="home">
        <div className="top-headings">
          <h1>Madhyam</h1>
          <h2>A Centralized Hub for NGOs</h2>
        </div>
        <div className="top-buttons">
        <Link href="/GetStarted" className="button">
            Get Started
          </Link>
          <Link href="/LearnMore" className="button">
            Learn More
          </Link>
        </div>
      </div>
    );
  };

  export default HomePage;
