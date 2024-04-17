import React from 'react';
import { BiUpvote, BiDownvote, BiBookmark } from "react-icons/bi"; // Import BiBookmark
import { AiOutlineRetweet, AiOutlineMessage } from 'react-icons/ai';
import './css/FeedContent.css'; // Import the CSS file
import Link from 'next/link';

const FeedContent = () => {
  return (
    <div className="feed-content">
      <div className="feed-post">
        <div className="feed-post-header">
          <img src="https://files.catbox.moe/9jn9ry.jpg" alt="User" className="feed-post-avatar" />
          <p className="feed-post-username">Care India</p>
        </div>
        <div className="feed-post-content">
          <p className="feed-post-description">CARE India Partners With PepsiCo Foundation to launch ‘She Feeds the World’ Programme in India</p>
          <img src="https://files.catbox.moe/6mmge9.jpg" alt="Mock Post" className="feed-post-image" />
        </div>
        <div className="feed-post-actions">
          <button className="feed-post-action-button"><BiUpvote /> </button>
          <button className="feed-post-action-button"><BiDownvote /> </button>
          <button className="feed-post-action-button"><AiOutlineRetweet /> Repost</button>
          <button className="feed-post-action-button"><AiOutlineMessage /> Comment</button>
          <button className="feed-post-action-button"><BiBookmark /> </button> {/* Add bookmark icon */}
        </div>
      </div>

      {/* Crowdfunding post */}
      <div className="feed-post crowdfunding-post">
        <div className="feed-post-header">
          <img src="https://pbs.twimg.com/profile_images/1295240791837704194/tVJ1DeSm_400x400.jpg" alt="User" className="feed-post-avatar" />
          <p className="feed-post-username">Helpage India</p>
        </div>
        <div className="feed-post-content">
          <h3 className="feed-post-title">Crowdfunding Campaign for Clean Water</h3>
          <p className="feed-post-description">Support our campaign to provide clean water to remote villages in Odisha. Many lack access to clean water, leading to health issues. Your help can install purification systems and wells for sustainable water access.</p>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: "70%" }}></div>
          </div>
          <div className="fund-details">
            <p className="raised-amount">Raised: Rs. 7000</p>
            <p className="goal-amount">Goal: Rs. 10000</p>
          </div>
        </div>
        <div className="feed-post-actions">
          <button className="feed-post-action-button"><BiUpvote /> </button>
          <button className="feed-post-action-button"><BiDownvote /> </button>
          <Link href="/HelpageIndia">
          <button className="feed-post-action-button support-btn">Support</button>
          </Link>
          <button className="feed-post-action-button readmore-btn">Read More</button>
          <button className="feed-post-action-button"><BiBookmark /> </button> {/* Add bookmark icon */}
        </div>
      </div>




      {/* NGO request post */}
      <div className="feed-post ngo-request-post">
        <div className="feed-post-header">
          <img src="https://i.imgur.com/n6yq1IB.png" alt="User" className="feed-post-avatar" />
          <p className="feed-post-username">Smile Foundation</p>
        </div>
        <div className="feed-post-content">
          <h3 className="feed-post-title">Urgent: Winter Clothes Needed for the Underprivileged</h3>
          <p className="feed-post-description">We are urgently seeking donations for winter clothes to support the underprivileged in our community. Your support can make a big difference in keeping them warm during the cold season.</p>
        </div>
        <div className="feed-post-actions">
          <button className="feed-post-action-button"><BiUpvote /> </button>
          <button className="feed-post-action-button"><BiDownvote /> </button>
          <button className="feed-post-action-button support-btn">Support</button>
          <button className="feed-post-action-button readmore-btn">Read More</button>
          <button className="feed-post-action-button"><BiBookmark /> </button> {/* Add bookmark icon */}
        </div>
      </div>
      

      <div className="feed-post">
        <div className="feed-post-header">
          <img src="https://files.catbox.moe/9jn9ry.jpg" alt="User" className="feed-post-avatar" />
          <p className="feed-post-username">Care India</p>
        </div>
        <div className="feed-post-content">
        <p className="feed-post-description">
          Uniting to Drive Change in Bangalore 🤝💖 <br />
          CARE India is working with <a href="https://twitter.com/Technicolor">@Technicolor</a> on the project Innovator’s Lab for Rural Students to make STEAM (science, technology, engineering, arts, and mathematics) 📚
        </p>

          <img src="https://pbs.twimg.com/media/F47CQDdbIAEHAR-?format=jpg&name=large" alt="Mock Post" className="feed-post-image" />
        </div>
        <div className="feed-post-actions">
          <button className="feed-post-action-button"><BiUpvote /> </button>
          <button className="feed-post-action-button"><BiDownvote /> </button>
          <button className="feed-post-action-button"><AiOutlineRetweet /> Repost</button>
          <button className="feed-post-action-button"><AiOutlineMessage /> Comment</button>
          <button className="feed-post-action-button"><BiBookmark /> </button> {/* Add bookmark icon */}
        </div>
      </div>


{/* ---------------------------------------------------------------------------------------------------- */}

      <div className="feed-post">
        <div className="feed-post-header">
          <img src="https://files.catbox.moe/9jn9ry.jpg" alt="User" className="feed-post-avatar" />
          <p className="feed-post-username">Care India</p>
        </div>
        <div className="feed-post-content">
          <p className="feed-post-description">CARE India and HDFC Bank Parivartan are empowering tribal women in Chhota Udaipur, Gujarat, by providing 200 self help groups (SHGs) with training and support to start their own small businesses.</p>
          <img src="https://pbs.twimg.com/media/F3ysFctbcAAAmm8?format=jpg&name=medium" alt="Mock Post" className="feed-post-image" />
        </div>
        <div className="feed-post-actions">
          <button className="feed-post-action-button"><BiUpvote /> </button>
          <button className="feed-post-action-button"><BiDownvote /> </button>
          <button className="feed-post-action-button"><AiOutlineRetweet /> Repost</button>
          <button className="feed-post-action-button"><AiOutlineMessage /> Comment</button>
          <button className="feed-post-action-button"><BiBookmark /> </button> {/* Add bookmark icon */}
        </div>
      </div>

      {/* Crowdfunding post */}
      <div className="feed-post crowdfunding-post">
        <div className="feed-post-header">
          <img src="https://pbs.twimg.com/profile_images/1295240791837704194/tVJ1DeSm_400x400.jpg" alt="User" className="feed-post-avatar" />
          <p className="feed-post-username">Helpage India</p>
        </div>
        <div className="feed-post-content">
          <h3 className="feed-post-title">Crowdfunding Campaign for Clean Water</h3>
          <p className="feed-post-description">Support our campaign to provide clean water to remote villages in Odisha. Many lack access to clean water, leading to health issues. Your help can install purification systems and wells for sustainable water access.</p>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: "70%" }}></div>
          </div>
          <div className="fund-details">
            <p className="raised-amount">Raised: Rs. 7000</p>
            <p className="goal-amount">Goal: Rs. 10000</p>
          </div>
        </div>
        <div className="feed-post-actions">
          <button className="feed-post-action-button"><BiUpvote /> </button>
          <button className="feed-post-action-button"><BiDownvote /> </button>
          <Link href="/HelpageIndia">
          <button className="feed-post-action-button support-btn">Support</button>
          </Link>
          <button className="feed-post-action-button readmore-btn">Read More</button>
          <button className="feed-post-action-button"><BiBookmark /> </button> {/* Add bookmark icon */}
        </div>
      </div>


      {/* NGO request post */}
      <div className="feed-post ngo-request-post">
        <div className="feed-post-header">
          <img src="https://i.imgur.com/n6yq1IB.png" alt="User" className="feed-post-avatar" />
          <p className="feed-post-username">Smile Foundation</p>
        </div>
        <div className="feed-post-content">
          <h3 className="feed-post-title">Urgent: Winter Clothes Needed for the Underprivileged</h3>
          <p className="feed-post-description">We are urgently seeking donations for winter clothes to support the underprivileged in our community. Your support can make a big difference in keeping them warm during the cold season.</p>
        </div>
        <div className="feed-post-actions">
          <button className="feed-post-action-button"><BiUpvote /> </button>
          <button className="feed-post-action-button"><BiDownvote /> </button>
          <button className="feed-post-action-button support-btn">Support</button>
          <button className="feed-post-action-button readmore-btn">Read More</button>
          <button className="feed-post-action-button"><BiBookmark /> </button> {/* Add bookmark icon */}
        </div>
      </div>
      

      <div className="feed-post">
        <div className="feed-post-header">
          <img src="https://files.catbox.moe/9jn9ry.jpg" alt="User" className="feed-post-avatar" />
          <p className="feed-post-username">Care India</p>
        </div>
        <div className="feed-post-content">
        <p className="feed-post-description">
          Uniting to Drive Change in Bangalore 🤝💖 <br />
          CARE India is working with <a href="https://twitter.com/Technicolor">@Technicolor</a> on the project Innovator’s Lab for Rural Students to make STEAM (science, technology, engineering, arts, and mathematics) 📚
        </p>

          <img src="https://pbs.twimg.com/media/F47CQDdbIAEHAR-?format=jpg&name=large" alt="Mock Post" className="feed-post-image" />
        </div>
        <div className="feed-post-actions">
          <button className="feed-post-action-button"><BiUpvote /> </button>
          <button className="feed-post-action-button"><BiDownvote /> </button>
          <button className="feed-post-action-button"><AiOutlineRetweet /> Repost</button>
          <button className="feed-post-action-button"><AiOutlineMessage /> Comment</button>
          <button className="feed-post-action-button"><BiBookmark /> </button> {/* Add bookmark icon */}
        </div>
      </div>
    </div>
  );
}

export default FeedContent;
