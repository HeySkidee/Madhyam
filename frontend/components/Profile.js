import React, { useState } from 'react';
import './css/Profile.css';

const Profile = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const handleProfilePicClick = () => {
    // Open file upload dialog
    // You can implement this functionality based on your requirements
  };

  const handleEditButtonClick = () => {
    setIsEditingProfile(true);
    // Additional logic for editing profile
  };

  return (
    <div className="profile-container">
      {/* Profile Pic, Name, Bio */}
      <div className="profile-header">
        <img
          src="https://files.catbox.moe/wey2qz.png"
          alt="Profile Pic"
          onClick={handleProfilePicClick}
        />
        <div className="profile-info">
          <div className="profile-name-bio">
            <h2>Harshit</h2>
            <p>one step at a time</p>
          </div>
          <button className="edit-profile-button" onClick={handleEditButtonClick}>
            Edit Profile
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="profile-stats">
        <div>
          <h3>Contributions</h3>
          <p>10</p>
        </div>
        <div>
          <h3>Followers</h3>
          <p>23</p>
        </div>
        <div>
          <h3>Following</h3>
          <p>47</p>
        </div>
      </div>

      {/* Comments, Reposts, Upvotes */}
      <div className="profile-interactions">
        <div className="comments">
          <h3>Comments</h3>
          <p>No comments yet.</p>
        </div>
        <div className="reposts">
          <h3>Reposts</h3>
          <p>No reposts yet.</p>
        </div>
        <div className="upvotes">
          <h3>Upvotes</h3>
          <p>No upvotes yet.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
