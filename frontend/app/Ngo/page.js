"use client"
import React from 'react';
import './Ngo.css';
import Link from "next/link";


const Ngo = () => {
  return (
<div className="registration-container">
      <h1 className="registration-heading">NGO Registration</h1>
      <form className="registration-form">
        <div className="form-group">
          <label htmlFor="ngoName" className="form-label">NGO Name</label>
          <input type="text" id="ngoName" name="ngoName" className="form-input" placeholder="Enter NGO name" />
        </div>
        <div className="form-group">
          <label htmlFor="location" className="form-label">Location</label>
          <input type="text" id="location" name="location" className="form-input" placeholder="Enter location" />
        </div>
        <div className="form-group">
          <label htmlFor="foundationDate" className="form-label">Foundation Date</label>
          <input type="date" id="foundationDate" name="foundationDate" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" name="email" className="form-input" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber" className="form-label">Contact Number</label>
          <input type="tel" id="contactNumber" name="contactNumber" className="form-input" placeholder="Enter contact number" />
        </div>
        <div className="form-group">
          <label htmlFor="ngoLicense" className="form-label">NGO License</label>
          <input type="file" id="ngoLicense" name="ngoLicense" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="volunteers" className="form-label">Number of Volunteers</label>
          <input type="number" id="volunteers" name="volunteers" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="officialDocuments" className="form-label">Official Documents</label>
          <input type="file" id="officialDocuments" name="officialDocuments" className="form-input" />
        </div>
        <button type="submit" className="registration-button">Register</button>
      </form>
      <p className="already-have-account">Already have an account? <Link href="/Login" className="login-link">Login</Link></p>
    </div>
  );
}

export default Ngo;
