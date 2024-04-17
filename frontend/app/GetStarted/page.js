import React from "react";
import Link from "next/link";
import './GetStarted.css';


const GetStarted = () => {
  return (
    <div className="get-started">
      <h1>Join the Madhyam Community</h1>
      <p>Choose an option to get started:</p>
      <div className="get-started-box-container">
        <Link href="/Home" className="get-started-box">
          <h3>Browse as Guest</h3>
          <p>View posts and NGOs without logging in.</p>
        </Link>
        <Link href="/Login" className="get-started-box">
          <h3>Login as User/Contributor</h3>
          <p>Join the community and contribute to NGOs.</p>
        </Link>
        <Link href="/Ngo" className="get-started-box">
          <h3>Login as NGO</h3>
          <p>Post requests and manage your NGO profile.</p>
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;