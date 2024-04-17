import React from "react";
import "./css/RightSidebar.css";
import { RiBarChart2Fill } from "react-icons/ri"; // Import stats icon

const RightSidebar = () => {
  return (
    <div className="right-container">
      <div className="right-container-inner">
        <div className="box">
          <h3 className="box-heading">Top Contributors</h3>
          <div className="profile">
            <img src="https://i.imgur.com/hIUevjS.jpeg" alt="Top Contributor" />
            <div>
              <p>Jaiyaxh</p>
              <span className="karma">Karma: 149</span> 
            </div>
            <button className="support-button">Follow</button> 
          </div>
          
          <div className="profile">
            <img src="https://yt3.googleusercontent.com/PFaXPfbaXA5fHROSZjsPVp9d3dpI0AO2qAWEniK_gT_JEsvt1y8B9f6Izm2ERjM1uEg4ldKX=s900-c-k-c0x00ffffff-no-rj" alt="Top Contributor" />
            <div>
              <p>Preet Kaur</p>
              <span className="karma">Karma: 141</span> 
            </div>
            <button className="support-button">Follow</button> 
          </div>

          <div className="profile">
            <img src="https://i1.sndcdn.com/artworks-aqKsmCc4l1mxAmj8-7ligVQ-t500x500.jpg" alt="Top Contributor" />
            <div>
              <p>Surya Bhat</p>
              <span className="karma">Karma: 132</span> 
            </div>
            <button className="support-button">Follow</button> 
          </div>

        </div> {/* TOP CONTRIBUTORS END */}

        <div className="box">
          <h3 className="box-heading">Most Active NGOs</h3>
          <div className="profile">
            <img src="https://pbs.twimg.com/profile_images/1295240791837704194/tVJ1DeSm_400x400.jpg" alt="Top Contributor" />
            <div>
              <p>Helpage In</p>
              <span className="karma">Karma: 184</span> 
            </div>
            <button className="support-button">Support</button> 
          </div>
          
          <div className="profile">
            <img src="https://i.imgur.com/oAkfs57.png" alt="Top Contributor" />
            <div>
              <p>Pratham</p>
              <span className="karma">Karma: 126</span> 
            </div>
            <button className="support-button">Support</button> 
          </div>
          

          <div className="profile">
            <img src="https://files.catbox.moe/9jn9ry.jpg" alt="Top Contributor" />
            <div>
              <p>Care India</p>
              <span className="karma">Karma: 120</span> 
            </div>
            <button className="support-button">Support</button> 
          </div>
        </div> {/* MOST ACTIVE ENDS */}

        <div className="box">
          <h3 className="box-heading">Most Funded NGOs</h3>
          <div className="profile">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Goonj_logo.png/150px-Goonj_logo.png" alt="Top Contributor" />
            <div>
              <p>Goonj</p>
              <span className="karma">Karma: 154</span> 
            </div>
            <button className="support-button">Support</button> 
          </div>
          
          <div className="profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ6cKQcy9Vh4c6jaoRbAL0Hg1mZpDdRNJAIPbZ1Hjs-Q&s" alt="Top Contributor" />
            <div>
              <p>Nanhi Kali</p>
              <span className="karma">Karma: 148</span> 
            </div>
            <button className="support-button">Support</button> 
          </div>

          <div className="profile">
            <img src="https://i.imgur.com/GKC5ph5.png" alt="Top Contributor" />
            <div>
              <p>CRY India</p>
              <span className="karma">Karma: 132</span> 
            </div>
            <button className="support-button">Support</button> 
          </div>
        </div> {/* Most Funded Ends */}
      </div>
    </div>
  );
};

export default RightSidebar;
