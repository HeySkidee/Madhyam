"use client";
import React, { useState } from "react";
import Feed from "@/components/Feed";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Profile from "@/components/Profile";
import Activity from "@/components/Activity"; // Import the Activity component
import "./Home.css";

const Home = () => {
  const [currentComponent, setCurrentComponent] = useState("Feed");

  const switchComponent = (componentName) => {
    setCurrentComponent(componentName);
  };

  return (
    <div className="home-container">
      <LeftSidebar switchComponent={switchComponent} />
      <div className="center">
        {/* Render components based on currentComponent state */}
        {currentComponent === "Feed" && <Feed />}
        {currentComponent === "Profile" && <Profile />}
        {currentComponent === "Activity" && <Activity />}
      </div>
      <RightSidebar />
    </div>
  );
};

export default Home;

