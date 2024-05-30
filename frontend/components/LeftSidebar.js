import React from 'react';
import { CiHome, CiHashtag, CiUser, CiLogout } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import Link from 'next/link';
import './css/LeftSidebar.css'

const LeftSidebar = ({ switchComponent }) => { // Accept switchComponent as a prop

 return (
    <div className='left-sidebar'>
      <div className='left-sidebar-inner'>
        {/* Use Link component for the logo */}
        <Link href="/" className='left-sidebar-logo' onClick={() => switchComponent("Feed")}>
          <img width={"92%"} src="https://files.catbox.moe/cj41wq.png" alt="madhyam-logo" />
        </Link>
        <div className='left-sidebar-links'>
          <Link href="/" className='left-sidebar-link' onClick={(e) => { e.preventDefault(); switchComponent("Feed"); }}>
            <div className='left-sidebar-icon'>
              <CiHome size="24px" />
            </div>
            <p className='left-sidebar-text'>Activity</p>
          </Link>
          <Link href="/Crowdfunding" className='left-sidebar-link' onClick={(e) => { e.preventDefault(); switchComponent("Feed"); }}>
            <div className='left-sidebar-icon'>
              <CiHashtag size="24px" />
            </div>
            <p className='left-sidebar-text'>Crowdfunding</p>
          </Link>
          <Link href="/Requests" className='left-sidebar-link' onClick={(e) => { e.preventDefault(); switchComponent("Feed"); }}>
            <div className='left-sidebar-icon'>
              <IoIosNotificationsOutline size="24px" />
            </div>
            <p className='left-sidebar-text'>Requests</p>
          </Link>
          <Link href="/Bookmarks" className='left-sidebar-link' onClick={(e) => { e.preventDefault(); switchComponent("Feed"); }}>
            <div className='left-sidebar-icon'>
              <CiBookmark size="24px" />
            </div>
            <p className='left-sidebar-text'>Bookmarks</p>
          </Link>
          <Link href="/Profile" className='left-sidebar-link' onClick={(e) => { e.preventDefault(); switchComponent("Profile"); }}>
            <div className='left-sidebar-icon'>
              <CiUser size="24px" />
            </div>
            <p className='left-sidebar-text'>Profile</p>
          </Link>
          <Link href="/Logout" className='left-sidebar-link' onClick={(e) => { e.preventDefault(); switchComponent("Feed"); }}>
            <div className='left-sidebar-icon'>
              <CiLogout size="24px" />
            </div>
            <p className='left-sidebar-text'>Logout</p>
          </Link>
          {/* <button className='left-sidebar-post-button' onClick={() => switchComponent("Feed")}>Post</button> */}
        </div>
      </div>
    </div>
 )
}

export default LeftSidebar;
