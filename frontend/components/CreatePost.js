import React, { useState } from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import toast from "react-hot-toast";
import "./css/CreatePost.css";

const CreatePost = () => {
  const [description, setDescription] = useState("");

  const submitHandler = async () => {
    if (description.trim() === "") {
      toast.error("Please enter something to post.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description }),
      });
      const data = await response.json();
      console.log("Posted:", data);
      setDescription("");
    } catch (error) {
      console.error("Error posting:", error);
    }
  };

  return (
    <div className="create-post-container">
      <div className="create-post-inner">
        <div className="create-post-content">
          <div className="create-post-avatar">
            <Avatar
              src="https://files.catbox.moe/wey2qz.png"
              size="40"
              round={true}
            />
          </div>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="create-post-input"
            type="text"
            placeholder="Create a New Post!"
          />
        </div>
        <div className="create-post-footer">
          <div className="create-post-icon">
            <CiImageOn size="25px" />
          </div>
          <button onClick={submitHandler} className="create-post-button">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
